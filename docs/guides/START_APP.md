# How to Start the Sold App

## ✅ App Updated with Spotify Colors!

The app now features Spotify's iconic black and green color scheme:
- **Background**: Dark black (#121212, #191414)
- **Primary**: Spotify Green (#1DB954)
- **Text**: White on dark backgrounds
- **Gradient**: Black → Green

---

## 🚀 Quick Start

### Option 1: Continue Running Server
The server is already running in the background. Just:

1. **Wait for QR code** to appear in terminal
2. **Scan with phone**:
   - iPhone: Camera app
   - Android: Expo Go app

### Option 2: Restart Server
If nothing shows up:

```bash
# Kill current server
cd mobile
npm start
```

Then press:
- **`i`** - Open iOS simulator
- **`a`** - Open Android emulator
- **`w`** - Open in web browser

---

## 🎨 New Color Scheme

### Spotify Theme
```
Primary Green:  #1DB954
Dark Black:     #191414
Background:     #121212
Surface:        #181818
Text White:     #FFFFFF
Text Gray:      #B3B3B3
```

### What Changed
- ✅ Welcome screen: Black → Green gradient
- ✅ Login/Register: Dark backgrounds
- ✅ Buttons: Spotify green with gradients
- ✅ All text: White on dark
- ✅ Inputs: Dark surfaces with green focus

---

## 📱 Screenshots (What You'll See)

### Welcome Screen
- Black background with green gradient
- White "Sold" logo
- Green "Get Started" button
- Feature cards with dark backgrounds

### Login/Register
- Dark background (#121212)
- Green input focus states
- White text
- Spotify-style buttons

---

## 🐛 Troubleshooting

### If nothing shows:
```bash
# Method 1: Restart Expo
cd mobile
npm start --clear

# Method 2: Check for errors
cd mobile
npx expo start

# Method 3: Try web version
cd mobile
npm run web
```

### If colors look wrong:
The app automatically updates when you save files. If it doesn't:
1. Press `r` in terminal to reload
2. Shake phone and tap "Reload"

---

## ✅ Current Status

**Mobile App**: ✅ Running with Spotify colors
**Backend**: ⏳ Not started yet
**Database**: ⏳ Not connected

**What works now**:
- Beautiful dark UI with Spotify theme
- Welcome → Login → Register navigation
- Form validation (client-side)
- Smooth animations

**What doesn't work yet**:
- Actual login (no backend)
- Creating account (no database)
- Taking photos (not built)
- Posting items (not built)

---

## 📸 To See Your App Right Now

1. Look at your terminal
2. Find the QR code (should appear soon)
3. Scan with phone
4. App loads with beautiful Spotify colors!

OR

Press `w` in terminal to open in browser immediately.
