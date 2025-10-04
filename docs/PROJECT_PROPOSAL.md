# Project Proposal: Sold - AI-Powered Marketplace App
## CIS553 Fall 2025 - Team Submission (Due 10/3/2025)

---

## Team Information

**Team Name**: Sold Squad

**Project Manager**: Broderick Higby (point of contact)

### Team Members & Roles

1. **Broderick Higby** - Full-Stack Lead & Project Manager
2. **Backend Developer** - API Development & Database Design
3. **Mobile Developer** - React Native UI/UX Implementation
4. **DevOps Engineer** - Infrastructure & Deployment
5. **Integration Specialist** - Third-Party APIs & Services

*Note: We are a 5-person team, which satisfies the 3-5 student requirement.*

---

## Executive Summary

**Sold** is a mobile application that streamlines online selling by using AI to create optimized listings and post to multiple marketplace platforms. Users take a photo, and our AI analyzes the item, suggests pricing, and generates professional listings ready to publish across eBay, Mercari, and our built-in marketplace.

### Problem Statement
Selling items online is time-consuming and fragmented:
- Sellers must manually create listings on multiple platforms
- Writing descriptions and pricing items takes significant time
- Each platform has different requirements and formats
- Managing sales across platforms is challenging

### Solution (Revised Realistic Scope)
Sold automates listing creation and multi-platform distribution:
1. **Photo → AI Analysis**: Take a photo, AI identifies item and suggests competitive prices
2. **Smart Publishing**: One-tap posting to eBay, Mercari, and our marketplace
3. **Listing Export**: Generate optimized descriptions for Facebook Marketplace (manual paste)
4. **Centralized Management**: Track all sales in one app
5. **AI Assistance**: Get AI-generated responses for buyer questions

---

## Important Scope Update: Facebook Marketplace

### Reality Check
After technical research, we discovered:
- **Facebook does NOT provide a public API for Marketplace posting**
- Automated posting violates Facebook's Terms of Service
- No legitimate way to auto-post items programmatically

### Our Adaptation
Instead of promising impossible features, we're being realistic:

**What We're Building:**
- ✅ Full integration with **eBay API** (official developer API)
- ✅ Full integration with **Mercari API** (official OAuth + posting)
- ✅ Our own **built-in marketplace** with AI chat
- ✅ **Export feature** for Facebook Marketplace (optimized copy/paste)
- ✅ **AI-generated listings** that work anywhere

**What This Means:**
- Users get AI-created, market-optimized listings
- Auto-post to platforms with official APIs (eBay, Mercari)
- "Export to Facebook" generates perfect listing text to copy/paste
- Still saves massive time vs. manual listing creation

This pivot maintains our core value proposition while being technically and legally sound.

---

## Team Composition & Responsibilities

### Team Members (5 People)

#### 1. Full-Stack Lead & PM (Broderick Higby)
**Biography**: Computer Science senior with 3 years of full-stack development experience. Previously built e-commerce platforms and mobile apps. Passionate about creating tools that solve real problems. Skilled in React, Node.js, and cloud infrastructure.

**Responsibilities**:
- Project management & coordination
- Architecture decisions
- Backend + Mobile development
- Code reviews
- Stakeholder communication

#### 2. Backend Developer
**Responsibilities**:
- Express.js REST API development
- PostgreSQL database design & optimization
- Third-party API integrations (eBay, Mercari)
- Authentication & security (JWT, OAuth)
- Image upload to AWS S3

#### 3. Mobile Developer
**Responsibilities**:
- React Native UI/UX implementation
- Camera & image picker integration
- State management (Zustand)
- API client integration
- Form validation & error handling

#### 4. DevOps Engineer
**Responsibilities**:
- AWS infrastructure setup (EC2, RDS, S3)
- CI/CD pipelines (GitHub Actions)
- Database migrations & backups
- Monitoring & logging (Sentry)
- App Store deployment preparation

#### 5. Integration Specialist
**Responsibilities**:
- OpenAI API integration (Vision + GPT-4)
- eBay API integration & testing
- Mercari API integration
- Stripe payment processing
- API documentation

---

## Team Agreement

### Communication Methods
- **Primary**: Slack workspace (response within 6 hours)
- **Secondary**: Email (response within 24 hours)
- **Emergency**: Text message (response within 2 hours)
- **Code**: GitHub pull requests & comments

### Meeting Schedule
- **Weekly Standup**: Mondays 6:00 PM EST (30 min, mandatory)
- **Sprint Planning**: Every other Friday 7:00 PM EST (1 hour)
- **Additional**: As needed via Slack call

### Meeting Format
- **Location**: Zoom (online) with recording
- **Preparation**: Review Jira board before meeting
- **Minutes**: Rotating scribe, posted to Confluence
- **Attendance**: All meetings mandatory unless pre-approved absence

### Version Control Guidelines
- **Branching**: `feature/task-name`, `bugfix/issue-name`
- **Commits**: Conventional Commits format (`feat:`, `fix:`, `docs:`)
- **Pull Requests**: Required for all changes to `main`
- **Reviews**: 1 approval required, PM reviews all PRs
- **Testing**: All tests must pass in CI before merge

### Division of Work
- **Assignment**: PM assigns based on sprint planning & expertise
- **Rotation**: Rotate challenging tasks for learning
- **Pairing**: Pair programming for complex features
- **Autonomy**: Team members can claim unassigned tickets

### Submission Process
- **Who Submits**: PM (Broderick Higby)
- **Who Reviews**: All team members review before submission
- **Timeline**: Submit 24 hours before deadline
- **Documentation**: Exported from Confluence to PDF

### Contingency Planning
- **Member Drops**: Redistribute work to remaining team members
- **Missed Meetings**: 2 strikes = escalation to instructor
- **Academic Dishonesty**: Immediate removal + instructor notification
- **Conflict**: PM mediates, escalate to instructor if unresolved
- **Scope Change**: Team vote, PM consults instructor

---

## Tools & Technologies

### Development Tools
- **IDE**: VS Code with ESLint, Prettier
- **Version Control**: GitHub (private repository)
- **Project Management**: Jira for task tracking
- **Documentation**: Markdown files + Confluence (optional)
- **Communication**: Slack workspace

### Technology Stack

**Mobile App**:
- React Native 0.81 with Expo
- TypeScript for type safety
- Zustand for state management
- React Navigation for routing
- Axios for API calls

**Backend**:
- Node.js 20 + Express.js
- TypeScript
- PostgreSQL 15 with Prisma ORM
- Redis for job queues
- AWS S3 for image storage

**AI Services** (Third-Party APIs):
- OpenAI Vision API for image analysis
- OpenAI GPT-4 for listing generation
- *Note: Using APIs, NOT building ML models (complies with "no ML" restriction)*

**Third-Party Integrations**:
- eBay Developer API
- Mercari API
- Google/Facebook OAuth
- Stripe for payments
- AWS S3 for storage

**Infrastructure**:
- AWS EC2 (backend hosting)
- AWS RDS (PostgreSQL database)
- AWS S3 (image storage)
- GitHub Actions (CI/CD)

---

## Project Domain & Proposal

### Intended Use of the System

**Primary Users**: Individual sellers (casual to power sellers)

**Use Cases**:
1. **Casual Seller** - Decluttering home, sell 1-5 items/month
2. **Reseller** - Thrift/garage sale flippers, 10-50 items/month
3. **Small Business** - Handmade goods, vintage items, regular posting

**How The System Will Be Used**:
1. User opens app → takes photo of item
2. AI analyzes photo → suggests title, description, prices (high/mid/low)
3. User reviews/edits AI-generated listing
4. Taps "Publish" → posts to eBay, Mercari, our marketplace
5. Copies Facebook export text → pastes into Facebook Marketplace manually
6. Manages all sales from app dashboard
7. AI suggests responses to buyer questions
8. Schedules pickup times
9. Marks items as sold

### Overall Functionality

**What the System Will Do**:

1. **AI-Powered Listing Creation**
   - Analyze item photos with OpenAI Vision
   - Generate optimized titles (SEO-friendly)
   - Write compelling descriptions
   - Suggest competitive prices based on market data
   - Categorize items automatically

2. **Multi-Platform Distribution**
   - One-tap posting to eBay (API integration)
   - One-tap posting to Mercari (API integration)
   - Publish to our built-in marketplace
   - Generate export templates for Facebook Marketplace
   - Track posting status per platform

3. **Sales Management**
   - Dashboard showing all active listings
   - Status tracking (posted, sold, pending)
   - Buyer message aggregation
   - AI-suggested responses
   - Sales analytics & history

4. **User Management**
   - Email/password registration
   - Google & Facebook OAuth login
   - Profile with payment info (Venmo/Zelle)
   - Address & location
   - Subscription management

5. **Payment & Monetization**
   - $0.50 per post (one-time)
   - $6/month unlimited posting
   - Stripe payment processing
   - Transaction history

**How The System Helps Users**:
- **Saves Time**: 30-second listing vs. 10-minute manual process
- **Better Listings**: AI-optimized for search & conversion
- **Wider Reach**: Multiple platforms from one post
- **Centralized**: Manage everything in one app
- **Smarter**: AI pricing prevents under/over-pricing

### Main Components of the System

#### Component 1: Mobile Application (React Native)
**Purpose**: User interface for photo capture, listing creation, and sales management

**Sub-Components**:
- Authentication module (login, register, OAuth)
- Camera & image picker module
- Item creation flow (photo → AI → edit → publish)
- Listings dashboard
- Profile & settings
- Payment & subscription management

**Rationale**: Mobile-first design because users take photos with phones. Cross-platform (iOS/Android) using React Native for maximum reach with single codebase.

#### Component 2: Backend API (Express.js)
**Purpose**: Business logic, data persistence, third-party integrations

**Sub-Components**:
- Authentication service (JWT, OAuth, sessions)
- User management service
- Image processing service (upload, resize, S3 storage)
- AI integration service (OpenAI API calls)
- Marketplace integration service (eBay, Mercari APIs)
- Payment service (Stripe)
- Database access layer (Prisma ORM)

**Rationale**: RESTful API allows mobile app to be thin client. Separation of concerns makes system maintainable and testable.

#### Component 3: Database (PostgreSQL)
**Purpose**: Persistent storage of users, items, listings, transactions

**Schema**:
- `users` - Account information, OAuth tokens, addresses
- `items` - Item details, images, AI-suggested prices
- `listings` - Platform-specific posting records
- `conversations` - Buyer messages & AI responses
- `transactions` - Sales records & fees

**Rationale**: Relational database for structured data with ACID guarantees. Prisma ORM provides type-safe queries and migrations.

#### Component 4: AI Processing Layer (OpenAI APIs)
**Purpose**: Image analysis and intelligent listing generation

**Features**:
- Image classification (what is this item?)
- Title generation (SEO-optimized)
- Description writing (compelling copy)
- Price estimation (based on category + condition)
- Buyer question responses

**Rationale**: Leverages cutting-edge AI without building/training models. OpenAI's pre-trained models handle complex vision and language tasks.

#### Component 5: Marketplace Integration Layer
**Purpose**: Communicate with external marketplace APIs

**Integrations**:
- **eBay API**: OAuth authentication, listing creation, inventory management
- **Mercari API**: OAuth, product posting, status tracking
- **Built-in Marketplace**: Our own platform for AI chat features

**Rationale**: Each platform has unique API requirements. Abstraction layer handles differences and provides unified interface to application.

#### Component 6: Storage & Media (AWS S3)
**Purpose**: Scalable image storage and delivery

**Features**:
- Upload original images
- Resize/optimize for different platforms
- Generate thumbnails
- CDN delivery for fast loading

**Rationale**: S3 provides cheap, scalable storage. Storing images separately from database improves performance.

#### Component 7: Payment Processing (Stripe)
**Purpose**: Monetization through subscriptions and per-post charges

**Features**:
- One-time charges ($0.50/post)
- Recurring subscriptions ($6/month)
- Payment method management
- Webhook handling for payment events

**Rationale**: Stripe handles PCI compliance and payment complexity. Webhooks ensure reliable payment tracking.

---

## Functional Requirements

### Use Case Diagram
```
                    [Casual Seller]     [Power Seller]
                           |                   |
                           +-------------------+
                                     |
        +------------------------------------------------------------+
        |                            |                               |
    [Register/Login]          [Create Listing]              [Manage Sales]
        |                            |                               |
        |                            |                               |
    - Email/Password           - Take Photo                  - View Listings
    - Google OAuth             - AI Analysis                 - Check Messages
    - Facebook OAuth           - Edit Details                - Mark Sold
                              - Publish                      - Export History
                                     |
                                     |
                    +----------------+----------------+
                    |                |                |
              [Post to eBay]  [Post to Mercari]  [Export FB]
```

### Functional Requirements List

1. **User Authentication**
   - FR1.1: System shall allow email/password registration
   - FR1.2: System shall validate email format and password strength (8+ chars)
   - FR1.3: System shall support Google OAuth login
   - FR1.4: System shall support Facebook OAuth login
   - FR1.5: System shall issue JWT tokens for authenticated sessions

2. **Photo Management**
   - FR2.1: System shall allow camera photo capture
   - FR2.2: System shall allow gallery photo selection
   - FR2.3: System shall upload photos to AWS S3
   - FR2.4: System shall support up to 10 images per item

3. **AI Analysis**
   - FR3.1: System shall analyze photos with OpenAI Vision API
   - FR3.2: System shall generate item title (max 80 characters)
   - FR3.3: System shall generate item description (100-500 characters)
   - FR3.4: System shall suggest three price points (high, mid, low)
   - FR3.5: System shall categorize items automatically

4. **Listing Creation**
   - FR4.1: System shall display AI-generated details for user review
   - FR4.2: System shall allow editing of all fields before posting
   - FR4.3: System shall validate required fields (title, price, category)
   - FR4.4: System shall save listings as drafts

5. **Multi-Platform Publishing**
   - FR5.1: System shall post to eBay via official API
   - FR5.2: System shall post to Mercari via official API
   - FR5.3: System shall post to built-in marketplace
   - FR5.4: System shall generate Facebook Marketplace export text
   - FR5.5: System shall track posting status per platform
   - FR5.6: System shall handle API errors gracefully

6. **Sales Management**
   - FR6.1: System shall display all user listings in dashboard
   - FR6.2: System shall filter by status (active, sold, pending)
   - FR6.3: System shall show platform-specific listing URLs
   - FR6.4: System shall aggregate buyer messages
   - FR6.5: System shall allow marking items as sold

7. **Payment & Subscription**
   - FR7.1: System shall charge $0.50 per post for non-subscribers
   - FR7.2: System shall offer $6/month unlimited subscription
   - FR7.3: System shall process payments via Stripe
   - FR7.4: System shall prevent posting if payment fails
   - FR7.5: System shall track transaction history

### Non-Functional Requirements

1. **Performance**
   - NFR1.1: AI analysis shall complete within 10 seconds
   - NFR1.2: Image upload shall support files up to 10MB
   - NFR1.3: API response time shall be < 500ms for 95% of requests

2. **Security**
   - NFR2.1: Passwords shall be hashed with bcrypt (12 rounds)
   - NFR2.2: JWT tokens shall expire after 15 minutes (refresh after 7 days)
   - NFR2.3: API keys shall be stored in environment variables
   - NFR2.4: HTTPS shall be enforced for all traffic

3. **Usability**
   - NFR3.1: Listing creation shall be completable in < 60 seconds
   - NFR3.2: UI shall follow iOS/Android design guidelines
   - NFR3.3: Error messages shall be user-friendly and actionable

4. **Reliability**
   - NFR4.1: System shall have 99% uptime (excluding maintenance)
   - NFR4.2: Failed API calls shall retry with exponential backoff
   - NFR4.3: Database backups shall occur daily

5. **Scalability**
   - NFR5.1: System shall support 10,000 concurrent users
   - NFR5.2: Image storage shall scale horizontally (S3)
   - NFR5.3: Database shall use connection pooling

---

## User Stories

### Epic 1: User Authentication

**US1.1**: As a new user, I want to register with my email and password so that I can create an account.
- **Pre-condition**: User is on registration screen
- **Post-condition**: User account created, JWT token issued, redirected to home

**US1.2**: As a returning user, I want to log in with my email and password so that I can access my account.
- **Pre-condition**: User has existing account
- **Post-condition**: User authenticated, JWT token issued, redirected to home

**US1.3**: As a user, I want to sign in with Google so that I don't have to create a password.
- **Pre-condition**: User on login screen
- **Post-condition**: OAuth flow complete, account created/linked, JWT issued

### Epic 2: Photo & AI Analysis

**US2.1**: As a seller, I want to take a photo of my item so that I can create a listing.
- **Pre-condition**: User authenticated, camera permissions granted
- **Post-condition**: Photo captured, stored locally, ready for analysis
- **Breakdown**: May need to split into camera permission + capture

**US2.2**: As a seller, I want AI to analyze my photo and suggest a title, description, and prices so that I save time creating listings.
- **Pre-condition**: Photo uploaded
- **Post-condition**: AI analysis complete, results displayed
- **Breakdown**: Large story - split into: upload, analyze, display results

### Epic 3: Multi-Platform Posting

**US3.1**: As a seller, I want to post my item to eBay with one tap so that I can reach eBay buyers.
- **Pre-condition**: Listing details complete, eBay account connected
- **Post-condition**: Item posted to eBay, listing ID stored, status "posted"

**US3.2**: As a seller, I want to post my item to Mercari with one tap so that I can reach Mercari buyers.
- **Pre-condition**: Listing details complete, Mercari account connected
- **Post-condition**: Item posted to Mercari, listing ID stored, status "posted"

**US3.3**: As a seller, I want to export my listing for Facebook Marketplace so that I can paste it manually.
- **Pre-condition**: Listing details complete
- **Post-condition**: Optimized text copied to clipboard, success message shown

### Epic 4: Sales Management

**US4.1**: As a seller, I want to see all my active listings in one place so that I can manage my sales.
- **Pre-condition**: User authenticated, has posted items
- **Post-condition**: Dashboard displays all listings with status

**US4.2**: As a seller, I want to mark an item as sold so that it stops showing as available.
- **Pre-condition**: Item is posted
- **Post-condition**: Item status changed to "sold", removed from active listings

### Epic 5: Payment

**US5.1**: As a seller, I want to pay $0.50 to post a single item so that I can try the service.
- **Pre-condition**: User authenticated, Stripe setup complete
- **Post-condition**: Payment processed, item posted, transaction recorded

**US5.2**: As a power seller, I want to subscribe for $6/month so that I can post unlimited items.
- **Pre-condition**: User authenticated
- **Post-condition**: Subscription active, unlimited posting enabled

---

## Glossary

**AI Analysis**: Process of using OpenAI Vision API to identify item, generate title, description, and suggest prices

**eBay API**: Official developer API provided by eBay for posting listings programmatically

**Expo**: Framework for building React Native apps with simplified configuration

**Export**: Process of generating formatted listing text for manual copy/paste to platforms without APIs

**JWT (JSON Web Token)**: Token-based authentication method for API security

**Listing**: A posted item for sale, may exist on multiple platforms

**Mercari API**: Official developer API provided by Mercari for creating product listings

**Multi-Platform**: Posting the same item to multiple marketplaces simultaneously

**OAuth**: Authentication protocol for logging in with third-party services (Google, Facebook)

**Prisma**: TypeScript ORM for database access with type safety

**Publishing**: The act of posting a listing to one or more marketplaces

**S3 (Simple Storage Service)**: AWS cloud storage for images and files

**Stripe**: Payment processing service for handling credit cards and subscriptions

**Zustand**: Lightweight state management library for React

---

## Timeline & Milestones

**Total Duration**: 14 weeks (October 2 - January 7)

### Week 1-2 (Oct 2-15): Foundation ✅ COMPLETE
- ✅ Project setup & monorepo structure
- ✅ Mobile app UI (Welcome, Login, Register screens)
- ✅ Design system & component library
- ✅ Database schema design
- ✅ Git repository & CI/CD pipeline

**Milestone**: Beautiful mobile app running locally with auth UI

### Week 3-4 (Oct 16-29): Backend & Integration
- [ ] Express API with authentication
- [ ] PostgreSQL database setup
- [ ] JWT + OAuth implementation
- [ ] Mobile app connected to backend
- [ ] User can register & login (end-to-end)

**Milestone**: Working authentication flow (mobile → backend → database)

### Week 5-6 (Oct 30-Nov 12): Photo & AI
- [ ] Camera screen implementation
- [ ] Image upload to S3
- [ ] OpenAI Vision API integration
- [ ] AI price detection logic
- [ ] Item creation UI with AI results

**Milestone**: Users can take photo, get AI analysis, create listing

### Week 7-8 (Nov 13-26): Marketplace Integration
- [ ] eBay API integration (OAuth + posting)
- [ ] Mercari API integration (OAuth + posting)
- [ ] Built-in marketplace posting
- [ ] Facebook export template generation
- [ ] Multi-platform publishing flow

**Milestone**: Users can post to eBay, Mercari, and export to Facebook

### Week 9-10 (Nov 27-Dec 10): Sales Management & Payments
- [ ] Listings dashboard
- [ ] Mark as sold functionality
- [ ] Stripe integration
- [ ] Subscription & per-post payments
- [ ] Transaction history

**Milestone**: Complete MVP with all core features working

### Week 11-12 (Dec 11-24): Polish & Testing
- [ ] Bug fixes
- [ ] UI/UX improvements
- [ ] Performance optimization
- [ ] Comprehensive testing
- [ ] Documentation completion

**Milestone**: Production-ready app

### Week 13-14 (Dec 25-Jan 7): Deployment & Presentation
- [ ] App Store submission preparation
- [ ] Beta testing with real users
- [ ] Final presentation & demo video
- [ ] Project documentation export

**Milestone**: Submitted to App Stores, ready to present

---

## Monetization & Business Model

### Revenue Streams

1. **Per-Post Fee**: $0.50 per item posted
   - Target: Casual sellers (1-5 items/month)
   - Revenue: $0.50 × 5,000 posts/month = $2,500/month

2. **Subscription**: $6/month unlimited posting
   - Target: Power sellers (10+ items/month)
   - Revenue: $6 × 1,000 subscribers = $6,000/month

**Projected Revenue (Year 1)**: ~$8,500/month = $102,000/year

### Cost Structure (Monthly)
- OpenAI API: $1,500 (50k API calls)
- AWS Infrastructure: $300 (EC2, RDS, S3)
- Stripe fees: $200 (2.9% + $0.30 per transaction)
- Domain & services: $50

**Total Costs**: ~$2,050/month

**Net Profit**: $6,450/month = $77,400/year

### Unit Economics
- Average revenue per user (ARPU): $3.50/month
- Customer acquisition cost (CAC): $5 (organic + ads)
- Lifetime value (LTV): $42 (12 months × $3.50)
- LTV:CAC ratio: 8.4:1 (healthy > 3:1)

---

## Risk Analysis

### Technical Risks

**Risk**: eBay/Mercari API changes
- **Likelihood**: Medium
- **Impact**: High
- **Mitigation**: Monitor API changelogs, maintain abstraction layer, build fallback options

**Risk**: OpenAI API cost spikes
- **Likelihood**: Medium
- **Impact**: Medium
- **Mitigation**: Implement caching, optimize prompts, set budget alerts

**Risk**: AWS S3 storage costs
- **Likelihood**: Low
- **Impact**: Medium
- **Mitigation**: Image compression, lifecycle policies (delete after 90 days), CDN caching

### Business Risks

**Risk**: Low user adoption
- **Likelihood**: Medium
- **Impact**: High
- **Mitigation**: Beta testing with real users, referral program, target niche communities

**Risk**: Competition (existing platforms)
- **Likelihood**: High
- **Impact**: Medium
- **Mitigation**: Focus on AI differentiation, superior UX, faster listing creation

### Legal Risks

**Risk**: Marketplace terms of service violations
- **Likelihood**: Low (using official APIs)
- **Impact**: High
- **Mitigation**: Use only official APIs, include disclaimers, require user accounts

**Risk**: Data privacy regulations (GDPR, CCPA)
- **Likelihood**: High
- **Impact**: Medium
- **Mitigation**: Clear privacy policy, data deletion on request, minimal data collection

---

## Success Criteria

### Technical Success
- ✅ Mobile app running on iOS & Android
- ✅ Backend API with 99% uptime
- ✅ AI analysis < 10 seconds
- ✅ Successful eBay + Mercari posting
- ✅ 80%+ test coverage

### User Success
- ✅ 100 beta users testing app
- ✅ Average listing creation time < 60 seconds
- ✅ 70%+ user satisfaction rating
- ✅ 50%+ conversion (signup → first post)

### Academic Success
- ✅ All CIS553 requirements met
- ✅ Weekly progress documented
- ✅ Code in Git with commit history
- ✅ Jira board showing task progression
- ✅ Final presentation & demo
- ✅ Comprehensive documentation

---

## Conclusion

**Sold** addresses a real market need: simplifying online selling through AI automation. By focusing on platforms with official APIs (eBay, Mercari) and being transparent about limitations (Facebook Marketplace), we deliver a realistic, working product.

**Why This Project Succeeds**:
1. **Real Problem**: Selling online IS tedious and time-consuming
2. **AI Differentiation**: OpenAI provides genuine value (better listings faster)
3. **Technical Feasibility**: Using official APIs = reliable, legal integration
4. **Strong Foundation**: Beautiful UI already built, clear architecture
5. **Honest Scope**: We pivoted when hitting Facebook API wall
6. **Team Skills**: Right mix of backend, mobile, DevOps, AI expertise

**Academic Value**:
- Full-stack development (mobile + backend + database)
- Third-party API integration (eBay, Mercari, OpenAI, Stripe)
- Modern tech stack (React Native, TypeScript, PostgreSQL)
- Agile methodology (sprints, user stories, testing)
- Cloud deployment (AWS)
- Security best practices (OAuth, JWT, encryption)

**Market Potential**:
- Addressable market: 50M+ online sellers in US
- Clear monetization ($0.50/post or $6/month)
- Profitable unit economics (LTV:CAC = 8.4:1)
- Scalable infrastructure

We're ready to build and ship a product that makes online selling effortless.

---

**Submitted by**: Broderick Higby (Project Manager)
**Team**: Sold Squad
**Course**: CIS553 Fall 2025
**Date**: October 3, 2025
