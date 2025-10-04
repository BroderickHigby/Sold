# How to Connect to Facebook API - Complete Guide

## ⚠️ CRITICAL: Facebook Marketplace Reality

### The Hard Truth
**Facebook does NOT provide a public API for posting to Marketplace.**

There is NO official, legal way to programmatically post items to Facebook Marketplace through an API.

---

## What Facebook APIs DO Exist

### 1. Facebook Login (OAuth) ✅ AVAILABLE
**Purpose**: Let users sign in with their Facebook account
**What you CAN do**:
- Authenticate users
- Get user's name, email, profile picture
- Verify user identity

**What you CANNOT do**:
- Post to Marketplace
- Access Marketplace listings
- Manage Marketplace items

### 2. Facebook Graph API ⚠️ LIMITED
**Purpose**: Access Facebook platform features
**Available features**:
- User profile data
- Friend lists (with permissions)
- Pages management
- Groups (limited)
- Instagram business accounts

**NOT available**:
- ❌ Marketplace posting
- ❌ Marketplace reading
- ❌ Marketplace management

### 3. Facebook Commerce API ⚠️ BUSINESS ONLY
**Purpose**: For businesses with Facebook Shops
**Requirements**:
- Business verification
- Facebook Shop approval
- Catalog management setup
- Not for Marketplace (different system)

---

## What We CAN Actually Do

### Option 1: Facebook Login Only (RECOMMENDED)
Use Facebook for authentication, NOT Marketplace posting.

**Steps to implement**:

#### Step 1: Create Facebook App
1. Go to [developers.facebook.com](https://developers.facebook.com)
2. Create a new app
3. Choose "Consumer" app type
4. Add Facebook Login product

#### Step 2: Configure App
```
Settings → Basic:
- App Name: Sold
- App Domains: your-domain.com
- Privacy Policy URL: your-domain.com/privacy
- Terms of Service URL: your-domain.com/terms

Facebook Login → Settings:
- Valid OAuth Redirect URIs:
  - http://localhost:3000/api/auth/facebook/callback (dev)
  - https://sold-app.com/api/auth/facebook/callback (prod)
```

#### Step 3: Get Credentials
```
App ID: 1234567890123456
App Secret: abcdef1234567890abcdef1234567890
```

#### Step 4: Backend Integration (Node.js)

**Install dependencies**:
```bash
npm install passport passport-facebook express-session
```

**Configure Passport** (`backend/src/config/passport.ts`):
```typescript
import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID!,
    clientSecret: process.env.FACEBOOK_APP_SECRET!,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL!,
    profileFields: ['id', 'emails', 'name', 'picture']
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Find or create user in database
      let user = await prisma.user.findUnique({
        where: { oauthId: profile.id, oauthProvider: 'facebook' }
      });

      if (!user) {
        user = await prisma.user.create({
          data: {
            email: profile.emails[0].value,
            oauthProvider: 'facebook',
            oauthId: profile.id,
            // Don't store password for OAuth users
          }
        });
      }

      return done(null, user);
    } catch (error) {
      return done(error as Error);
    }
  }
));
```

**Auth Routes** (`backend/src/routes/auth.ts`):
```typescript
import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Initiate Facebook login
router.get('/auth/facebook',
  passport.authenticate('facebook', { scope: ['email'] })
);

// Facebook callback
router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { session: false }),
  (req, res) => {
    // Generate JWT token
    const token = jwt.sign(
      { userId: req.user.id },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    );

    // Redirect to mobile app with token
    res.redirect(`sold://auth?token=${token}`);
  }
);

export default router;
```

#### Step 5: Mobile App Integration (React Native)

**Install dependencies**:
```bash
npx expo install expo-auth-session expo-web-browser
```

**Facebook Login Button** (`mobile/src/screens/LoginScreen.tsx`):
```typescript
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: 'YOUR_FACEBOOK_APP_ID',
      redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
      scopes: ['email', 'public_profile'],
    },
    {
      authorizationEndpoint: 'https://www.facebook.com/v18.0/dialog/oauth',
    }
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      // Send code to your backend
      loginWithFacebook(code);
    }
  }, [response]);

  const handleFacebookLogin = () => {
    promptAsync();
  };

  return (
    <TouchableOpacity onPress={handleFacebookLogin}>
      <Text>Sign in with Facebook</Text>
    </TouchableOpacity>
  );
};
```

**Result**: Users can sign in with Facebook, but NO Marketplace access.

---

### Option 2: Manual Marketplace Export (PRACTICAL)

Since we can't auto-post, we create perfect listings for users to copy/paste.

**Implementation**:

#### Generate Optimized Listing Text
```typescript
// backend/src/services/listingExport.ts
export function generateFacebookMarketplaceListing(item: Item) {
  return {
    title: item.title, // Max 100 chars
    description: `
${item.description}

✨ Condition: ${item.condition}
💰 Price: $${item.priceMid}
📍 Location: ${item.location}

${item.ai GeneratedDetails}

Contact me to arrange pickup!
    `.trim(),
    price: item.priceMid,
    category: mapToFacebookCategory(item.category),
    images: item.imageUrls, // User uploads manually
  };
}
```

#### Mobile UI for Export
```typescript
// mobile/src/screens/FacebookExportScreen.tsx
const FacebookExportScreen = ({ route }) => {
  const { item } = route.params;
  const listing = generateFacebookMarketplaceListing(item);

  const copyToClipboard = async () => {
    await Clipboard.setString(listing.description);
    Alert.alert('Copied!', 'Paste into Facebook Marketplace');
  };

  return (
    <View>
      <Text>Title:</Text>
      <Text>{listing.title}</Text>

      <Text>Description:</Text>
      <Text>{listing.description}</Text>

      <Button title="Copy to Clipboard" onPress={copyToClipboard} />

      <Button
        title="Open Facebook Marketplace"
        onPress={() => Linking.openURL('https://www.facebook.com/marketplace/create')}
      />

      <Text>Instructions:</Text>
      <Text>1. Tap "Copy to Clipboard"</Text>
      <Text>2. Tap "Open Facebook Marketplace"</Text>
      <Text>3. Paste title and description</Text>
      <Text>4. Upload your photos manually</Text>
      <Text>5. Set price: ${listing.price}</Text>
    </View>
  );
};
```

**Result**: User gets optimized text, manual posting takes 30 seconds.

---

### Option 3: Browser Automation (RISKY, NOT RECOMMENDED)

**⚠️ WARNING**: This violates Facebook's Terms of Service and can result in account bans.

**How it theoretically works**:
1. Use Puppeteer to control a headless browser
2. Log into Facebook programmatically
3. Navigate to Marketplace
4. Fill in forms
5. Submit listing

**Why you SHOULD NOT do this**:
- ❌ Violates Facebook ToS
- ❌ Requires storing user's Facebook credentials (security risk)
- ❌ Facebook detects and blocks automation
- ❌ CAPTCHA challenges
- ❌ Account bans (permanent)
- ❌ Legal liability
- ❌ Facebook can sue for ToS violations
- ❌ Not reliable (breaks when Facebook updates UI)

**If you ignore warnings** (for education only):

```typescript
// ⚠️ DO NOT USE IN PRODUCTION
import puppeteer from 'puppeteer';

async function postToFacebookMarketplace(credentials, item) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // 1. Login (requires user's password - BIG NO NO)
  await page.goto('https://www.facebook.com/login');
  await page.type('#email', credentials.email);
  await page.type('#pass', credentials.password); // ❌ SECURITY RISK
  await page.click('button[name="login"]');

  // Wait for 2FA, CAPTCHA, etc. (often fails here)
  await page.waitForNavigation();

  // 2. Navigate to Marketplace
  await page.goto('https://www.facebook.com/marketplace/create/item');

  // 3. Fill form (breaks when Facebook changes HTML)
  await page.type('[aria-label="Title"]', item.title);
  await page.type('[aria-label="Description"]', item.description);

  // 4. Upload images (complex, often fails)
  // ... more automation ...

  // 5. Submit (may trigger security checks)
  await page.click('button[type="submit"]');

  await browser.close();
}
```

**Problems**:
- Requires headless browser (250MB+)
- Needs user's password (never acceptable)
- Fails on 2FA
- Fails on CAPTCHA
- Facebook detects automation patterns
- Breaks with every Facebook UI update
- Account gets banned within days

**Verdict**: DO NOT IMPLEMENT THIS.

---

## What We're Actually Building

### Realistic Approach

#### For Facebook:
1. **Facebook Login** - OAuth for authentication ✅
2. **Optimized Export** - Generate perfect listings to copy/paste ✅
3. **Quick Instructions** - Guide users through manual posting ✅

#### Focus on APIs that WORK:
1. **eBay API** - Full posting automation ✅
2. **Mercari API** - Full posting automation ✅
3. **Our Marketplace** - Complete control ✅

---

## Step-by-Step: What You Need To Do

### For School Project (Due 10/3)

#### 1. Update Proposal ✅ DONE
- Explain Facebook API doesn't exist
- Focus on eBay/Mercari integration
- Describe Facebook as "export feature"

#### 2. Implement Facebook Login (Week 3-4)

**Backend tasks**:
- [ ] Create Facebook app on developers.facebook.com
- [ ] Get App ID and App Secret
- [ ] Install passport-facebook
- [ ] Configure Facebook strategy
- [ ] Create /auth/facebook routes
- [ ] Test OAuth flow

**Mobile tasks**:
- [ ] Install expo-auth-session
- [ ] Add "Sign in with Facebook" button
- [ ] Handle OAuth redirect
- [ ] Store JWT token
- [ ] Test login flow

**Time**: 4-6 hours

#### 3. Implement Facebook Export (Week 5-6)

**Backend tasks**:
- [ ] Create listing export service
- [ ] Generate optimized descriptions
- [ ] Map categories to Facebook format
- [ ] API endpoint: POST /api/listings/:id/export/facebook

**Mobile tasks**:
- [ ] Export screen UI
- [ ] Copy to clipboard button
- [ ] "Open Marketplace" button
- [ ] Step-by-step instructions

**Time**: 2-3 hours

#### 4. Implement eBay API (Week 7-8) - PRIORITY

**Why eBay**:
- Official developer API ✅
- Well-documented ✅
- OAuth 2.0 ✅
- Reliable ✅
- Large marketplace ✅

**Steps**:
1. Register at [developer.ebay.com](https://developer.ebay.com)
2. Create sandbox app (for testing)
3. Get Client ID and Client Secret
4. Implement OAuth flow
5. POST to eBay API
6. Handle inventory management

**Time**: 10-15 hours

---

## Documentation for Instructor

### Honesty is Best Policy

**What to say in proposal**:

> "After extensive research, we determined that Facebook does not provide a public API for Marketplace posting. Automated posting would violate their Terms of Service and risk user account bans.
>
> Instead, our application will:
> 1. Use Facebook OAuth for user authentication
> 2. Generate AI-optimized listings for Facebook Marketplace
> 3. Provide a 'Copy & Post' feature for manual posting (30 seconds)
> 4. Focus on platforms with official APIs (eBay, Mercari)
>
> This approach delivers value (AI-generated listings save time) while being technically and legally sound. Users still benefit from our AI without risking their Facebook accounts."

**Why this is GOOD for your grade**:
- Shows research and critical thinking ✅
- Demonstrates adaptability ✅
- Proves understanding of APIs and limitations ✅
- Ethical approach (no ToS violations) ✅
- Realistic scope ✅

---

## Summary: Your Action Plan

### Week 1-2: ✅ COMPLETE
- Project setup
- Mobile UI
- Documentation

### Week 3: Facebook OAuth
```bash
# Backend
cd backend
npm install passport passport-facebook
# Create Facebook app
# Configure OAuth
# Test with Postman

# Mobile
cd mobile
npx expo install expo-auth-session expo-web-browser
# Add Facebook login button
# Test OAuth flow
```

### Week 4: Facebook Export
```bash
# Backend
# Create listing export service
# Generate optimized text
# API endpoint for export

# Mobile
# Export screen
# Clipboard integration
# Instructions UI
```

### Week 5-7: eBay API (PRIORITY)
```bash
# Register on developer.ebay.com
# Get credentials
# Implement OAuth
# POST listings
# Test thoroughly
```

### Week 8+: Other Features
- Mercari API
- Built-in marketplace
- Stripe payments
- Image upload

---

## Resources

### Official Documentation
- [Facebook Login Docs](https://developers.facebook.com/docs/facebook-login)
- [eBay Developer Program](https://developer.ebay.com/develop/get-started)
- [Mercari API Docs](https://developer.mercari.com)

### Libraries
- [passport-facebook](https://www.passportjs.org/packages/passport-facebook/)
- [expo-auth-session](https://docs.expo.dev/versions/latest/sdk/auth-session/)
- [ebay-api (Node.js)](https://www.npmjs.com/package/ebay-api)

---

## Final Answer to Your Question

**Q: What do I need to do to connect to Facebook API?**

**A: For Facebook LOGIN (authentication)**:
1. Create app on developers.facebook.com
2. Get App ID & Secret
3. Use passport-facebook in backend
4. Use expo-auth-session in mobile
5. Implement OAuth flow
6. **Time**: 4-6 hours

**For Facebook MARKETPLACE (posting)**:
**You cannot. The API doesn't exist.**

Instead:
1. Generate perfect listings with AI
2. Let users copy/paste (30 seconds)
3. Focus on eBay/Mercari (have real APIs)
4. **Time**: 2-3 hours for export feature

---

**Bottom Line**: Facebook OAuth is easy. Facebook Marketplace is impossible. Focus on platforms with APIs (eBay, Mercari). Your project is still awesome!

Ready to implement? Start with Facebook Login (Week 3), then eBay API (Week 5).
