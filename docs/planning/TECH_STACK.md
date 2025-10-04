# Technical Stack & Architecture

## Technology Stack Definition

### Mobile Application (Cross-Platform)

**Framework**: React Native 0.72+
- **Why**: Single codebase for iOS & Android, 60% code reuse
- **UI Library**: React Native Paper (Material Design)
- **Navigation**: React Navigation 6.x
- **State Management**: Zustand (lightweight, <1KB)
- **Forms**: React Hook Form + Zod validation

**Camera & Media**
- **react-native-vision-camera**: High-performance camera
- **react-native-image-picker**: Gallery selection
- **react-native-image-crop-picker**: Crop & edit

**Authentication**
- **react-native-app-auth**: OAuth 2.0 (Google, Facebook)
- **@react-native-async-storage/async-storage**: Secure token storage
- **react-native-biometrics**: Fingerprint/Face ID

**Notifications**
- **@react-native-firebase/messaging**: Push notifications (FCM)

---

### Backend API

**Runtime**: Node.js 20 LTS
**Framework**: Express.js 4.x
- **Why**: Mature, well-documented, massive ecosystem

**Language**: TypeScript 5.x
- **Why**: Type safety, better developer experience

**API Documentation**: Swagger/OpenAPI 3.0

**Key Libraries**:
- **express-validator**: Request validation
- **helmet**: Security headers
- **cors**: CORS handling
- **compression**: Response compression
- **morgan**: HTTP logging

---

### Database & Storage

**Primary Database**: PostgreSQL 15
- **Why**: ACID compliance, JSON support, mature
- **ORM**: Prisma 5.x (type-safe queries, migrations)

**Caching & Queue**: Redis 7.x
- **Use Cases**:
  - Session storage
  - Job queue (Bull MQ)
  - Rate limiting
  - API response caching

**File Storage**: AWS S3
- **Use Cases**: Item images, user uploads
- **CDN**: CloudFront for fast delivery
- **Libraries**: @aws-sdk/client-s3, multer, sharp

---

### AI & Machine Learning Services

**⚠️ IMPORTANT**: We are NOT building ML models (prohibited). We are using third-party AI APIs as services.

**OpenAI API** (External Service - requires documentation & approval)
- **Vision API (GPT-4 Vision)**: Image analysis, item identification
- **GPT-4 Turbo**: Conversational AI buyer agent
- **Libraries**: openai@4.x

**Price Comparison APIs**
- **eBay Finding API**: Historical sold prices
- **Amazon Product API**: Current market prices
- **Alternative**: Web scraping with Puppeteer (legal compliance review needed)

---

### Third-Party Integrations

**Authentication**
- **Google OAuth 2.0**: passport-google-oauth20
- **Facebook OAuth 2.0**: passport-facebook
- **Passport.js**: Authentication middleware

**Calendar**
- **Google Calendar API**: Pickup scheduling
- **Libraries**: googleapis@126.x

**Payment Processing**
- **Stripe API**: Subscriptions & one-time charges
- **Libraries**: stripe@14.x
- **Webhooks**: Event handling for payment status

**Marketplace APIs**
- **Facebook Graph API**: Marketplace posting (if available)
- **Craigslist**: Email posting or Puppeteer automation
- **OfferUp/5miles**: Reverse-engineered APIs or automation
- **⚠️ Note**: Legal review required for automation compliance

---

### Infrastructure & DevOps

**Cloud Hosting** (Choose one):
- **Option A**: AWS (EC2, RDS, ElastiCache, S3)
- **Option B**: Heroku (simpler, good for MVP)
- **Option C**: DigitalOcean (cost-effective)

**Database Hosting**:
- **AWS RDS PostgreSQL** or **Heroku Postgres**

**CI/CD**: GitHub Actions
- Automated testing on PR
- Deploy to staging on merge to develop
- Deploy to production on merge to main

**Monitoring & Logging**:
- **Sentry**: Error tracking & performance monitoring
- **AWS CloudWatch** or **LogDNA**: Application logs
- **Uptime Robot**: Service health monitoring

**Analytics**:
- **Mixpanel** or **Amplitude**: User behavior tracking
- **Stripe Dashboard**: Revenue analytics

---

### Development Tools

**Package Manager**: pnpm (faster, disk-efficient)
- **Monorepo**: pnpm workspaces

**Project Management**: Jira
- Sprint planning, task tracking, burndown charts

**Version Control**: GitHub
- **Branching**: Trunk-based development
- **PR Reviews**: Required before merge
- **Commit Convention**: Conventional Commits

**Documentation**: Markdown (can export to Confluence)

**Diagramming**: Mermaid
- Use case diagrams, sequence diagrams, ER diagrams

**API Testing**:
- **Postman**: Manual testing & collection sharing
- **Supertest**: Automated integration tests

**Code Quality**:
- **ESLint**: Linting (Airbnb config)
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit checks
- **lint-staged**: Run linters on staged files

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────┐
│                  Mobile App (React Native)          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│  │  Auth    │  │  Camera  │  │ Listings │          │
│  │  Screens │  │  & Upload│  │ & Chat   │          │
│  └──────────┘  └──────────┘  └──────────┘          │
└────────────────────┬────────────────────────────────┘
                     │ HTTPS/REST API
                     │
┌────────────────────▼────────────────────────────────┐
│              Express.js REST API                     │
│  ┌─────────────────────────────────────────────┐   │
│  │ Routes: /auth /users /items /listings       │   │
│  │         /conversations /payments            │   │
│  └─────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────┐   │
│  │ Middleware: Auth, Validation, Error Handler │   │
│  └─────────────────────────────────────────────┘   │
└─────┬─────────┬──────────┬──────────┬──────────────┘
      │         │          │          │
      ▼         ▼          ▼          ▼
┌──────────┐ ┌─────┐  ┌────────┐ ┌──────────────┐
│PostgreSQL│ │Redis│  │  S3    │ │ External APIs│
│ Database │ │Queue│  │Storage │ │ (OpenAI,     │
│          │ │     │  │        │ │  Stripe,     │
│ (Prisma) │ │(Bull)│  │(Images)│ │  OAuth, etc.)│
└──────────┘ └─────┘  └────────┘ └──────────────┘

Background Jobs (Bull/Redis Queue):
  ┌─────────────────────────────────────┐
  │ - Multi-platform posting            │
  │ - AI price analysis                 │
  │ - Image optimization                │
  │ - Email/SMS notifications           │
  │ - Webhook processing                │
  └─────────────────────────────────────┘
```

---

## Monorepo Structure

```
sold/
├── backend/                 # Express.js API
│   ├── src/
│   │   ├── routes/         # API routes
│   │   ├── controllers/    # Business logic
│   │   ├── services/       # External integrations
│   │   ├── middleware/     # Auth, validation, etc.
│   │   ├── models/         # Prisma models
│   │   ├── utils/          # Helper functions
│   │   └── server.ts       # Entry point
│   ├── tests/              # Jest + Supertest
│   ├── prisma/             # Database schema
│   ├── package.json
│   └── tsconfig.json
│
├── mobile/                  # React Native app
│   ├── src/
│   │   ├── screens/        # App screens
│   │   ├── components/     # Reusable components
│   │   ├── navigation/     # React Navigation
│   │   ├── store/          # Zustand state
│   │   ├── services/       # API client
│   │   ├── hooks/          # Custom hooks
│   │   └── utils/          # Helpers
│   ├── __tests__/          # Jest + RTL
│   ├── android/            # Android native
│   ├── ios/                # iOS native
│   ├── package.json
│   └── tsconfig.json
│
├── shared/                  # Shared TypeScript types
│   ├── src/
│   │   ├── types/          # Common interfaces
│   │   ├── constants/      # Shared constants
│   │   └── validators/     # Zod schemas
│   ├── package.json
│   └── tsconfig.json
│
├── .github/
│   └── workflows/          # CI/CD pipelines
│       ├── backend-ci.yml
│       ├── mobile-ci.yml
│       └── deploy.yml
│
├── docs/                    # Documentation
│   ├── api/                # API docs (Swagger)
│   ├── architecture/       # System design
│   └── deployment/         # Deploy guides
│
├── package.json            # Root workspace
├── pnpm-workspace.yaml     # Monorepo config
├── .gitignore
├── .eslintrc.js
├── .prettierrc
└── README.md
```

---

## Database Schema (Prisma)

```prisma
// users table
model User {
  id                String    @id @default(uuid())
  email             String    @unique
  passwordHash      String?
  oauthProvider     String?   // 'google' | 'facebook'
  oauthId           String?
  address           String?
  locationLat       Float?
  locationLng       Float?
  venmoHandle       String?
  zelleHandle       String?
  subscriptionTier  String    @default("free") // 'free' | 'perpost' | 'unlimited'
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt

  items             Item[]
  transactions      Transaction[]
}

// items table
model Item {
  id           String    @id @default(uuid())
  userId       String
  title        String
  description  String
  imageUrls    String[]  // Array of S3 URLs
  priceHigh    Float
  priceMid     Float
  priceLow     Float
  status       String    @default("draft") // 'draft' | 'posted' | 'sold'
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt

  user         User      @relation(fields: [userId], references: [id])
  listings     Listing[]
  transactions Transaction[]
}

// listings table (one per platform)
model Listing {
  id                String    @id @default(uuid())
  itemId            String
  platform          String    // 'facebook' | 'craigslist' | 'offerup' | '5miles'
  platformListingId String?   // External platform ID
  status            String    @default("pending") // 'pending' | 'posted' | 'failed'
  postedAt          DateTime?
  createdAt         DateTime  @default(now())

  item              Item      @relation(fields: [itemId], references: [id])
  conversations     Conversation[]
}

// conversations table
model Conversation {
  id                String    @id @default(uuid())
  listingId         String
  buyerContact      String    // email or phone
  messagesJson      Json      // Array of {role, content, timestamp}
  pickupScheduledAt DateTime?
  status            String    @default("active") // 'active' | 'scheduled' | 'completed' | 'cancelled'
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt

  listing           Listing   @relation(fields: [listingId], references: [id])
}

// transactions table
model Transaction {
  id            String    @id @default(uuid())
  itemId        String
  userId        String
  amount        Float
  platformFee   Float     // Our cut (5% or $0.50)
  paymentMethod String    // 'venmo' | 'zelle' | 'cash'
  status        String    @default("pending") // 'pending' | 'completed'
  completedAt   DateTime?
  createdAt     DateTime  @default(now())

  item          Item      @relation(fields: [itemId], references: [id])
  user          User      @relation(fields: [userId], references: [id])
}
```

---

## API Endpoints (REST)

### Authentication
- `POST /api/auth/register` - Email/password registration
- `POST /api/auth/login` - Email/password login
- `GET /api/auth/me` - Get current user
- `GET /api/auth/google` - Google OAuth redirect
- `GET /api/auth/google/callback` - Google OAuth callback
- `GET /api/auth/facebook` - Facebook OAuth redirect
- `GET /api/auth/facebook/callback` - Facebook OAuth callback
- `POST /api/auth/logout` - Logout

### Users
- `GET /api/users/profile` - Get user profile
- `PATCH /api/users/profile` - Update profile (address, payment info)
- `POST /api/users/calendar/connect` - Connect Google Calendar
- `GET /api/users/calendar/availability` - Get available times

### Items
- `POST /api/items/upload-image` - Upload image to S3
- `POST /api/items/analyze` - AI analyze image & suggest prices
- `POST /api/items` - Create item
- `GET /api/items` - List user's items
- `GET /api/items/:id` - Get item details
- `PATCH /api/items/:id` - Update item
- `DELETE /api/items/:id` - Delete item

### Listings
- `POST /api/listings/publish` - Publish item to all platforms
- `GET /api/listings/:itemId` - Get all listings for item
- `GET /api/listings/:itemId/:platform/status` - Check platform status

### Conversations
- `GET /api/conversations/:listingId` - Get conversation
- `POST /api/conversations/:listingId/message` - Send manual message
- `POST /api/conversations/:listingId/schedule` - Schedule pickup

### Payments
- `POST /api/payments/subscription/create` - Create $6/month subscription
- `POST /api/payments/per-post` - Charge $0.50 for single post
- `GET /api/payments/history` - Get payment history

### Transactions
- `POST /api/transactions` - Record sale
- `GET /api/transactions` - List transactions

### Webhooks
- `POST /api/webhooks/stripe` - Stripe payment webhooks
- `POST /api/webhooks/facebook` - Facebook message webhooks
- `POST /api/webhooks/craigslist` - Craigslist response webhooks

---

## Testing Strategy

### Backend (Jest + Supertest)
- **Unit Tests**: Services, utilities, validators
- **Integration Tests**: API endpoints, database operations
- **Coverage Goal**: 80%+

### Mobile (Jest + React Native Testing Library)
- **Unit Tests**: Components, hooks, utilities
- **Integration Tests**: Navigation flows, API integration
- **E2E Tests**: Detox (optional, for critical flows)
- **Coverage Goal**: 70%+

### Test Structure
```
backend/tests/
├── unit/
│   ├── services/
│   ├── utils/
│   └── validators/
├── integration/
│   ├── auth.test.ts
│   ├── items.test.ts
│   └── listings.test.ts
└── fixtures/
    └── testData.ts

mobile/__tests__/
├── components/
├── screens/
├── hooks/
└── integration/
```

---

## Security Considerations

1. **Authentication**
   - bcrypt password hashing (salt rounds: 12)
   - JWT tokens with short expiry (15 min access, 7 day refresh)
   - HTTP-only cookies for refresh tokens
   - Rate limiting on auth endpoints

2. **API Security**
   - Helmet.js security headers
   - CORS whitelist
   - Request validation (express-validator)
   - SQL injection prevention (Prisma parameterized queries)
   - File upload validation (type, size limits)

3. **Data Privacy**
   - Encrypt sensitive data at rest
   - HTTPS only
   - PII data handling (GDPR/CCPA compliance)
   - Secure payment processing (Stripe PCI compliance)

4. **Platform Automation**
   - Respect rate limits
   - User-initiated actions only
   - Legal compliance review

---

## Performance Optimization

1. **Caching Strategy**
   - Redis cache for frequent queries (user profiles, item listings)
   - CDN for images (CloudFront)
   - API response caching (15-60 sec TTL)

2. **Database**
   - Indexes on foreign keys, email, status fields
   - Connection pooling (PgBouncer)
   - Query optimization with Prisma

3. **Mobile App**
   - Image lazy loading
   - Pagination for lists
   - Optimistic UI updates
   - Background queue for uploads

4. **Background Jobs**
   - Bull queue for long-running tasks
   - Retry logic with exponential backoff
   - Job prioritization

---

## Deployment Strategy

### Staging Environment
- Auto-deploy on merge to `develop` branch
- Staging database (separate from prod)
- Test with dummy data

### Production Environment
- Manual deploy on merge to `main` branch
- Database migrations run automatically
- Zero-downtime deployment (blue-green or rolling)
- Rollback plan

### Mobile Releases
- TestFlight (iOS) for beta testing
- Google Play Internal Testing (Android)
- Phased rollout (10% → 50% → 100%)

---

## Cost Estimation (Monthly)

| Service | Usage | Cost |
|---------|-------|------|
| AWS EC2 (t3.medium) | Backend hosting | $30 |
| AWS RDS PostgreSQL (db.t3.micro) | Database | $15 |
| AWS ElastiCache (cache.t3.micro) | Redis | $12 |
| AWS S3 | 100GB storage + transfer | $5 |
| CloudFront CDN | 1TB transfer | $10 |
| OpenAI API | 50k requests/mo | $2000 |
| Stripe | 2.9% + $0.30 per transaction | Variable |
| Sentry | Error tracking | $0 (free tier) |
| **Total** | | **~$2,072/mo** |

**Revenue break-even**: ~56 subscribers or 4,144 per-post users monthly

---

## Development Timeline (Phase 1)

Week 1 (Oct 2-8):
- [x] Project setup & planning
- [ ] Monorepo structure
- [ ] Database schema
- [ ] Testing framework setup

Week 2 (Oct 9-15):
- [ ] Backend auth (email/password + OAuth)
- [ ] Mobile auth screens
- [ ] User profile management

**Phase 1 Complete**: Foundation ready for feature development
