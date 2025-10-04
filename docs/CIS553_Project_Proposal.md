# CIS553 Fall 2025 - Software Engineering Project
## Team Info and Project Proposal

---

**Project Title:** Sold - AI-Powered Multi-Platform Marketplace App

**Team Name:** Vibe

**Submission Date:** October 3, 2025

**Course:** CIS553 - Software Engineering
**Institution:** University of Maryland

---

## Table of Contents

1. [Team Introduction](#team-introduction)
2. [Team Member Biographies](#team-member-biographies)
3. [Team Agreement](#team-agreement)
4. [Development Tools](#development-tools)
5. [Project Domain and Proposal](#project-domain-and-proposal)
6. [Milestones and Timeline](#milestones-and-timeline)
7. [Estimated Hours per Milestone](#estimated-hours-per-milestone)
8. [Meeting Schedule](#meeting-schedule)
9. [Current Progress Screenshots](#current-progress-screenshots)

---

## 1. Team Introduction

**Team Name:** Vibe

Our team consists of 6 dedicated software engineering students working together to build an innovative AI-powered marketplace application that revolutionizes the online selling experience. We bring together expertise in full-stack development, mobile engineering, DevOps, and artificial intelligence to deliver a comprehensive solution.

---

## 2. Team Member Biographies

### Broderick Higby - Project Lead & Backend Developer
Software engineering student with 3+ years of experience in full-stack development. Proficient in Node.js, TypeScript, and PostgreSQL. Previously built scalable REST APIs for e-commerce platforms. Passionate about clean architecture and test-driven development. Strong leadership skills with experience managing distributed teams.

### Backend Developer 2 - Platform Integrations Specialist
[To be filled - 10 lines max professional biography]

### Mobile Developer 1 - Authentication & Camera Specialist
[To be filled - 10 lines max professional biography]

### Mobile Developer 2 - UI/UX & Notifications Specialist
[To be filled - 10 lines max professional biography]

### DevOps Engineer - Infrastructure & Deployment Lead
[To be filled - 10 lines max professional biography]

### AI/ML Engineer - Conversational AI & Pricing Specialist
[To be filled - 10 lines max professional biography]

---

## 3. Team Agreement

### 3.1 Methods of Communication

**Primary Channels:**
- **Slack:** Real-time team communication, daily standups, quick questions
- **Email:** Formal communications, instructor correspondence, weekly summaries
- **GitHub Discussions:** Technical discussions, code reviews, architecture decisions
- **Zoom:** Virtual meetings, pair programming sessions, sprint planning
- **Phone/Text:** Emergency communications only

### 3.2 Expected Communication Response Times

- **Slack Messages:** 4 hours during business hours (9 AM - 6 PM)
- **Email:** 24 hours
- **GitHub PR Reviews:** 12 hours for non-urgent, 4 hours for blocking issues
- **Zoom Meeting Invites:** 48 hours notice required, RSVP within 12 hours
- **Emergency (Phone/Text):** 1 hour

### 3.3 Meeting Attendance

**Regular Meetings:**
- **Sprint Planning:** Mandatory, bi-weekly on Mondays 6:00 PM - 7:30 PM
- **Daily Standups:** Asynchronous via Slack by 10:00 AM daily
- **Sprint Retrospectives:** Mandatory, bi-weekly on Fridays 5:00 PM - 6:00 PM
- **Code Review Sessions:** Optional, as needed

**Attendance Policy:**
- All sprint planning and retrospective meetings are mandatory
- If unable to attend, notify team 24 hours in advance via Slack
- Missed meetings require async update posted in Slack within 4 hours
- Two consecutive unexcused absences trigger team discussion

### 3.4 Running Meetings

**Meeting Structure:**
- **Location:** Hybrid (Zoom + In-person option at McKeldin Library Study Room)
- **Duration:** Strictly time-boxed (no meetings exceed 90 minutes)
- **Facilitator:** Rotates weekly among team members
- **Note-Taker:** Designated at meeting start, rotates each meeting
- **Agenda:** Posted 24 hours before meeting in Confluence
- **Minutes:** Published within 4 hours post-meeting in Confluence

**Meeting Format:**
1. Review action items from previous meeting (5 min)
2. Main agenda items (60-70 min)
3. Action items and assignments (10 min)
4. Blockers and questions (10 min)

### 3.5 Meeting Preparation

**Required Preparation:**
- Review meeting agenda 24 hours prior
- Complete assigned pre-work (code reviews, documentation reading)
- Prepare updates on assigned tasks
- Add discussion items to shared agenda doc 12 hours before meeting
- For sprint planning: review product backlog and estimate readiness

### 3.6 Version Control

**Git Workflow:**
- **Main Branch:** Protected, requires PR approval, always deployable
- **Feature Branches:** Naming convention `feature/JIRA-123-short-description`
- **Bug Branches:** Naming convention `bugfix/JIRA-123-short-description`
- **Commit Messages:** Follow Conventional Commits (feat:, fix:, docs:, etc.)
- **Pull Requests:** Required for all changes, minimum 1 approval
- **Code Review:** All PRs reviewed within 12 hours

**Commit Guidelines:**
- **DO commit:** Source code, configuration files, documentation, tests
- **DO NOT commit:** Secrets, .env files, node_modules, build artifacts, large binaries
- **Commit message format:** `type(scope): subject` (max 72 chars)
  - Example: `feat(auth): add Google OAuth login flow`
- **Commit frequency:** At least daily, after completing logical units of work

**Branch Protection:**
- Direct commits to main prohibited
- CI/CD must pass before merge
- Merge conflicts resolved by PR author
- Squash commits on merge to main

### 3.7 Division of Work

**Work Assignment Process:**
1. Product backlog maintained in Jira with story point estimates
2. During sprint planning, team collectively selects user stories
3. Each team member self-assigns tasks based on expertise and capacity
4. Target: Equal distribution of story points per sprint
5. If workload imbalance detected, project lead redistributes tasks

**Role-Based Responsibilities:**
- **Backend Devs:** API endpoints, database design, integrations
- **Mobile Devs:** UI/UX, React Native components, navigation
- **DevOps:** CI/CD, infrastructure, deployment, monitoring
- **AI Engineer:** OpenAI integration, prompt engineering, NLP

**Conflict Resolution:**
- If disagreement on task assignment, majority vote
- Project lead has final decision if no consensus
- Consider skill development - junior members get mentorship opportunities

### 3.8 Submitting Assignments

**Submission Process:**
- **Owner:** Project lead (Broderick Higby) submits to Canvas
- **Timeline:** Submissions made 24 hours before deadline
- **Review Process:**
  1. Draft completed 48 hours before deadline
  2. All team members review within 24 hours
  3. Incorporate feedback and finalize
  4. Final review by project lead
  5. Submit to Canvas

**Quality Checklist:**
- All required sections complete
- Formatting consistent and professional
- Screenshots included where required
- Proofread for grammar/spelling
- Exported to PDF (no .docx submissions)

### 3.9 Contingency Planning

**Team Member Drops Out:**
1. Immediate team meeting within 24 hours
2. Redistribute tasks among remaining members
3. Notify instructor within 48 hours
4. Re-evaluate sprint commitments
5. Consider scope reduction if necessary

**Team Member Misses Meetings Consistently:**
1. First occurrence: Private conversation with project lead
2. Second occurrence: Team discussion, action plan created
3. Third occurrence: Notify instructor, formal performance review
4. Document all instances in Jira/Confluence

**Academic Dishonesty Detected:**
1. Immediately halt work on affected code/deliverable
2. Team meeting to assess scope of violation
3. Report to instructor immediately (within 24 hours)
4. Remove plagiarized content from codebase
5. Cooperate fully with university investigation

**Technical Blockers:**
- Daily check-in on blockers during standup
- Escalate blockers >24 hours to entire team
- Seek instructor help if blocker persists >48 hours
- Pair programming sessions for complex blockers

**Personal Emergencies:**
- Team member notifies project lead ASAP
- No penalty for legitimate emergencies
- Tasks reassigned temporarily
- Team provides support for catch-up when member returns

---

## 4. Development Tools

### 4.1 Project Management
- **Jira:** Sprint planning, task tracking, story point estimation, burn-down charts
- **Confluence:** Documentation, meeting notes, technical specifications, ADRs

### 4.2 Version Control & Code Collaboration
- **GitHub:** Source code repository, pull requests, code reviews
- **GitHub Actions:** CI/CD pipelines, automated testing, deployment

### 4.3 Development Environment
- **IDEs:** Visual Studio Code (primary), WebStorm (optional)
- **Languages:** TypeScript (backend & mobile), SQL (database)
- **Runtime:** Node.js 20+, pnpm 8+ (package management)

### 4.4 Backend Stack
- **Framework:** Express.js
- **Database:** PostgreSQL 15 (Prisma ORM)
- **Caching/Queues:** Redis + Bull
- **File Storage:** AWS S3
- **Testing:** Jest, Supertest

### 4.5 Mobile Stack
- **Framework:** React Native (Expo)
- **State Management:** Zustand
- **Navigation:** React Navigation
- **Testing:** Jest + React Native Testing Library
- **UI Components:** Custom components + React Native Paper

### 4.6 Third-Party Integrations
- **AI Services:** OpenAI Vision API, GPT-4
- **Authentication:** Google OAuth, Facebook OAuth
- **Payments:** Stripe
- **Calendar:** Google Calendar API
- **Marketplaces:** Facebook Graph API, Craigslist automation

### 4.7 DevOps & Infrastructure
- **Cloud:** AWS (EC2, RDS, ElastiCache, S3)
- **CI/CD:** GitHub Actions
- **Monitoring:** Sentry (error tracking), AWS CloudWatch
- **Containerization:** Docker (optional for deployment)

### 4.8 Modeling & Documentation
- **UML Diagrams:** PlantUML (use cases, class diagrams, sequence diagrams)
- **API Documentation:** OpenAPI/Swagger
- **Database:** Prisma schema visualization

---

## 5. Project Domain and Proposal

### 5.1 Intended Use of the System

**Target Users:**
- **Primary:** Individual sellers looking to declutter homes and sell used items locally
- **Secondary:** Small business owners selling inventory across multiple platforms
- **Tertiary:** Casual sellers who want to maximize reach with minimal effort

**User Scenarios:**
1. **College Student Moving Out:** Needs to quickly sell furniture, textbooks, and electronics before semester ends
2. **Spring Cleaning Parent:** Wants to sell kids' outgrown toys and clothes without managing multiple marketplace accounts
3. **Small Reseller:** Flips thrift store finds and needs efficient multi-platform posting
4. **Tech Professional:** Upgrades gadgets frequently and wants automated selling process

**How System Will Be Used:**
1. User authenticates via Google/Facebook OAuth
2. Takes photo of item using mobile camera
3. AI analyzes image and suggests title, description, and price range
4. User reviews/edits suggestions and sets final price
5. One-tap publishes listing to Facebook Marketplace, Craigslist, OfferUp, 5miles
6. AI agent monitors messages from buyers across all platforms
7. AI negotiates price (within seller limits) and schedules pickup times
8. System syncs pickup appointments to Google Calendar
9. User receives notifications for important events (offers, scheduled pickups)
10. Transaction completed with Venmo/Zelle payment info shared

### 5.2 Overall Functionality

**Core Capabilities:**

**1. Intelligent Item Recognition & Pricing**
- AI-powered image analysis identifies product category and condition
- Price comparison using eBay/Amazon historical data
- Suggests three price points: high (aspirational), mid (market rate), low (quick sale)
- Generates compelling listing title and description

**2. Multi-Platform Publishing**
- Single-click posting to 4+ marketplace platforms
- Automatic account connection via OAuth where available
- Automated posting where APIs unavailable (using Puppeteer/automation)
- Real-time posting status tracking per platform

**3. AI Buyer Interaction Agent**
- GPT-4 powered conversational agent handles buyer inquiries
- Answers questions about item condition, pickup location, availability
- Negotiates price within seller-defined range (e.g., accept offers >80% of asking price)
- Schedules pickup times based on seller availability
- Escalates complex questions to seller

**4. Calendar & Scheduling Integration**
- Syncs with Google Calendar to check seller availability
- Automatically proposes pickup times to buyers
- Sends calendar invites to both parties
- Sends reminder notifications 1 hour before pickup

**5. Payment Facilitation**
- Displays seller's Venmo/Zelle handle to confirmed buyers
- (Future: In-app payment processing via Stripe)
- Transaction tracking and history

**6. User Profile & Settings**
- Manage connected marketplace accounts
- Set pickup location and availability windows
- Configure AI agent negotiation parameters
- Payment method preferences
- Notification settings

### 5.3 Main Components of the System

**Component Breakdown:**

#### **Component 1: Mobile Application (React Native)**
**Purpose:** Primary user interface for all seller interactions

**Sub-components:**
- **Authentication Module:** Login/register, OAuth flows, session management
- **Camera & Image Capture:** Native camera access, gallery picker, image optimization
- **Item Creation Wizard:** Multi-step flow for creating listings (photo → AI analysis → edit → publish)
- **Listings Dashboard:** View active/sold items, posting status per platform
- **Conversations Viewer:** Read AI agent interactions with buyers, manual intervention option
- **Calendar Sync:** View scheduled pickups, manage availability
- **Profile Settings:** User preferences, account management, payment setup

**Rationale:** Mobile-first approach allows sellers to list items on-the-go. React Native enables cross-platform development (iOS + Android) with single codebase, reducing development time by 40% compared to native development.

---

#### **Component 2: Backend API (Node.js + Express)**
**Purpose:** Core business logic, data persistence, orchestration layer

**Sub-components:**
- **Authentication Service:** JWT-based auth, OAuth provider integration, session management
- **User Service:** Profile management, preferences, subscription tracking
- **Item Service:** CRUD operations for items, image storage coordination
- **Platform Integration Service:** Abstraction layer for marketplace APIs
- **Conversation Service:** Stores buyer messages, AI agent interactions
- **Webhook Receiver:** Handles incoming messages from marketplace platforms
- **Payment Service:** Stripe integration, transaction logging

**Rationale:** Centralized backend provides single source of truth, enables future web app, handles complex integrations that mobile app cannot (e.g., webhook receivers). Express.js chosen for team familiarity and rich ecosystem.

---

#### **Component 3: AI Services Layer**
**Purpose:** Intelligent automation of listing creation and buyer communication

**Sub-components:**
- **Image Analysis Service:** OpenAI Vision API wrapper, caching layer for similar items
- **Price Suggestion Engine:** Combines AI analysis with eBay/Amazon price data
- **Conversational Agent:** GPT-4 based buyer response system with context awareness
- **NLP Service:** Extracts buyer intent (negotiation, questions, scheduling)

**Rationale:** AI is the core differentiator. Separating AI into dedicated service layer allows for model swapping, A/B testing different prompts, and cost optimization through caching.

---

#### **Component 4: Platform Integration Adapters**
**Purpose:** Unified interface to heterogeneous marketplace APIs

**Sub-components:**
- **Facebook Marketplace Adapter:** Graph API for posting, OAuth integration
- **Craigslist Adapter:** Automation-based posting (Puppeteer), email scraping for responses
- **OfferUp/5miles Adapters:** API integration where available, automation fallback
- **Adapter Factory:** Determines best posting method per platform

**Rationale:** Adapter pattern isolates platform-specific complexity. When marketplace APIs change (frequent occurrence), only adapter needs updating. Enables adding new platforms without touching core business logic.

---

#### **Component 5: Queue & Job Processing (Redis + Bull)**
**Purpose:** Asynchronous processing of time-consuming tasks

**Sub-components:**
- **Image Processing Queue:** Resize/optimize images for different platforms
- **Posting Queue:** Retry logic for failed postings, rate limiting
- **AI Response Queue:** Process buyer messages asynchronously
- **Notification Queue:** Send push notifications, emails

**Rationale:** Queue system prevents API timeouts, enables retry logic, and allows scaling workers independently. Critical for handling multiple concurrent postings and AI processing.

---

#### **Component 6: Data Persistence Layer**
**Purpose:** Reliable storage of application state and user data

**Sub-components:**
- **PostgreSQL Database:** Relational data (users, items, listings, conversations)
- **Redis Cache:** Session storage, API response caching, rate limiting
- **AWS S3:** Image and media file storage

**Rationale:** PostgreSQL provides ACID guarantees for transactional data. Redis adds performance layer for frequently accessed data. S3 offers scalable, cost-effective media storage.

---

#### **Component 7: Notification & Communication System**
**Purpose:** Real-time user engagement and alerts

**Sub-components:**
- **Push Notification Service:** Firebase Cloud Messaging (FCM) integration
- **Email Service:** SendGrid for transactional emails
- **SMS Service (Future):** Twilio for critical alerts

**Rationale:** Multi-channel notifications ensure users never miss important events (buyer offers, pickup reminders). Firebase chosen for cross-platform mobile push support.

---

#### **Component 8: DevOps & Infrastructure**
**Purpose:** Deployment, monitoring, and reliability

**Sub-components:**
- **CI/CD Pipeline:** GitHub Actions for automated testing and deployment
- **Infrastructure as Code:** Terraform scripts for AWS provisioning
- **Monitoring:** Sentry for errors, CloudWatch for metrics
- **Logging:** Centralized logging with log aggregation

**Rationale:** Automated deployment reduces human error, enables rapid iteration. Monitoring ensures quick incident response. Essential for production readiness.

---

### 5.4 System Architecture Rationale

**Microservices-Inspired Architecture:**
While this is a monolithic application initially, the component breakdown follows microservices principles. This allows future decomposition if scaling requires it.

**Layered Architecture:**
- Presentation Layer (Mobile App)
- API Layer (Express REST API)
- Business Logic Layer (Services)
- Data Layer (PostgreSQL + Redis + S3)

**Design Patterns Used:**
- **Adapter Pattern:** Platform integrations
- **Factory Pattern:** Creating platform-specific posters
- **Repository Pattern:** Data access abstraction
- **Strategy Pattern:** AI pricing algorithms

**Scalability Considerations:**
- Horizontal scaling: API servers behind load balancer
- Database replication: Read replicas for query-heavy operations
- Caching strategy: Reduce OpenAI API costs by 60% with intelligent caching
- Queue workers: Independently scalable based on job volume

---

## 6. Milestones and Timeline

### Milestone 1: Foundation & Authentication (Weeks 1-2)
**Dates:** October 2-15, 2025
**Sprint:** Sprint 1

**Deliverables:**
- Monorepo structure with backend, mobile, shared packages
- PostgreSQL database schema designed and migrated
- JWT-based authentication system (email/password)
- Google & Facebook OAuth integration
- Login/Register screens in mobile app
- CI/CD pipeline setup (GitHub Actions)
- Automated testing framework configured

**Acceptance Criteria:**
- User can register with email/password
- User can login with Google/Facebook
- JWT tokens issued and validated
- All tests passing in CI pipeline

---

### Milestone 2: User Profiles & AI Pricing (Weeks 3-4)
**Dates:** October 16-29, 2025
**Sprint:** Sprint 2

**Deliverables:**
- User profile management (CRUD operations)
- Google Calendar OAuth integration
- Camera/gallery integration in mobile app
- Image upload to AWS S3
- OpenAI Vision API integration for item identification
- Price suggestion algorithm (AI + market data)
- Profile settings screen

**Acceptance Criteria:**
- User can update profile with address, payment handles
- User can take photo and upload to S3
- AI correctly identifies items with >80% accuracy
- Price suggestions within 15% of market value

---

### Milestone 3: Item Creation & Platform Posting (Weeks 5-6)
**Dates:** October 30 - November 12, 2025
**Sprint:** Sprint 3

**Deliverables:**
- Complete item creation flow (photo → AI → edit → publish)
- Facebook Marketplace posting integration
- Craigslist posting automation (Puppeteer)
- OfferUp/5miles posting (at least 1 additional platform)
- Multi-platform posting status tracking
- Retry logic for failed posts
- Item listing dashboard

**Acceptance Criteria:**
- User can create listing end-to-end in <2 minutes
- Posting succeeds to 3+ platforms simultaneously
- Failed posts automatically retry up to 3 times
- User sees real-time posting status

---

### Milestone 4: AI Chat Agent & Scheduling (Weeks 7-8)
**Dates:** November 13-26, 2025
**Sprint:** Sprint 4

**Deliverables:**
- GPT-4 conversational agent for buyer interactions
- Webhook receivers for marketplace messages
- AI negotiation logic (within seller parameters)
- Pickup scheduling algorithm
- Google Calendar event creation
- Conversation viewer in mobile app
- Manual override for AI responses

**Acceptance Criteria:**
- AI responds to 90% of buyer questions without escalation
- AI negotiates price within seller-defined range
- Pickup times auto-synced to Google Calendar
- User can view and intervene in conversations

---

### Milestone 5: Payments & Listings Management (Weeks 9-10)
**Dates:** November 27 - December 10, 2025
**Sprint:** Sprint 5

**Deliverables:**
- Stripe integration for subscriptions
- Payment flow ($0.50/post or $6/month subscription)
- Transaction history tracking
- Active listings dashboard with filters
- Sold items archive
- Analytics dashboard (basic metrics)

**Acceptance Criteria:**
- User can subscribe via Stripe
- Payment captured for per-post users
- User can view all active/sold listings
- Transaction history displays correctly

---

### Milestone 6: Notifications & Deployment (Weeks 11-12)
**Dates:** December 11-24, 2025
**Sprint:** Sprint 6

**Deliverables:**
- Firebase Cloud Messaging integration
- Push notifications for new messages, pickup reminders
- Email notifications (transactional)
- Production deployment to AWS
- Database migrations for production
- Sentry error tracking configured
- CloudWatch monitoring dashboards

**Acceptance Criteria:**
- Push notifications delivered within 30 seconds
- 99.5% uptime on production environment
- All errors tracked in Sentry
- Zero critical bugs in production

---

### Milestone 7: App Store Launch & Polish (Weeks 13-14)
**Dates:** December 25, 2025 - January 7, 2026
**Sprint:** Sprint 7

**Deliverables:**
- iOS App Store submission (TestFlight beta)
- Google Play Store submission (internal testing)
- App store assets (screenshots, descriptions)
- Privacy policy & terms of service
- User onboarding flow improvements
- Performance optimizations
- Bug fixes from beta testing

**Acceptance Criteria:**
- App approved for TestFlight
- Android app in internal testing track
- Privacy policy complies with app store requirements
- App launch time <3 seconds

---

## 7. Estimated Hours per Milestone

| Team Member | Milestone 1 | Milestone 2 | Milestone 3 | Milestone 4 | Milestone 5 | Milestone 6 | Milestone 7 | Total |
|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------------|-------|
| **Backend Dev 1 (Broderick)** | 30 | 25 | 20 | 30 | 25 | 20 | 15 | 165 |
| **Backend Dev 2** | 30 | 20 | 30 | 30 | 25 | 20 | 15 | 170 |
| **Mobile Dev 1** | 25 | 30 | 35 | 20 | 20 | 20 | 20 | 170 |
| **Mobile Dev 2** | 20 | 25 | 30 | 25 | 30 | 25 | 20 | 175 |
| **DevOps Engineer** | 35 | 15 | 20 | 15 | 20 | 35 | 25 | 165 |
| **AI Engineer** | 20 | 35 | 25 | 40 | 20 | 15 | 15 | 170 |
| **Total per Milestone** | 160 | 150 | 160 | 160 | 140 | 135 | 110 | **1015** |

**Notes:**
- Hours represent estimated work per team member per 2-week sprint
- Includes development, testing, documentation, and meetings
- Total project: ~1015 hours across 6 team members over 14 weeks
- Average: ~170 hours per person (~12 hours/week)

---

## 8. Meeting Schedule

| Week | Date | Type | Duration | Attendees | Topics |
|------|------|------|----------|-----------|--------|
| 1 | Oct 2 | Kickoff | 2h | All | Project overview, tool setup, roles assignment |
| 1 | Oct 4 | Sprint Planning | 1.5h | All | Sprint 1 planning, task breakdown |
| 2 | Oct 9 | Mid-Sprint Check | 1h | All | Progress review, blocker discussion |
| 2 | Oct 11 | Retrospective | 1h | All | Sprint 1 retro, lessons learned |
| 3 | Oct 16 | Sprint Planning | 1.5h | All | Sprint 2 planning |
| 3 | Oct 18 | Tech Sync | 1h | Backend + AI | OpenAI API integration strategy |
| 4 | Oct 23 | Mid-Sprint Check | 1h | All | Progress review |
| 4 | Oct 25 | Retrospective | 1h | All | Sprint 2 retro |

**Standing Meetings:**
- **Daily Standup (Async):** Mon-Fri, posted by 10:00 AM in Slack
- **Code Review Sessions:** Tue/Thu, 4:00 PM - 5:00 PM (optional, as needed)
- **Office Hours:** Wed, 6:00 PM - 7:00 PM (team members available for help)

**Meeting Notes Repository:** All meeting notes stored in Confluence under `/meetings/YYYY-MM-DD-meeting-type`

---

## 9. Current Progress Screenshots

### 9.1 Project Repository Structure
```
sold/
├── backend/          # Express.js API (initialized)
├── mobile/           # React Native app (initialized)
├── shared/           # Shared TypeScript types
├── docs/             # Project documentation
└── .github/          # CI/CD workflows (in progress)
```

### 9.2 Jira Board Status
*(Screenshot to be added - Jira board with Sprint 1 tasks)*

**Current Sprint:** Sprint 1 - Foundation & Authentication
**Tasks Completed:** 3/15
**Tasks In Progress:** 5/15
**Tasks Blocked:** 0/15

### 9.3 GitHub Commit History
*(Screenshot to be added - GitHub insights showing commits)*

**Commits (Last 7 days):** 23
**Contributors Active:** 6/6
**Pull Requests (Open/Merged):** 2/5

### 9.4 Mobile App Screenshots
*(Screenshots to be added - current mobile app state)*

**Completed Screens:**
- Welcome/Splash Screen
- Login Screen
- Register Screen

**In Progress:**
- Profile Setup Screen
- Camera Integration

### 9.5 Database Schema (Prisma)
```prisma
model User {
  id            String   @id @default(uuid())
  email         String   @unique
  passwordHash  String?
  oauthProvider String?
  oauthId       String?
  createdAt     DateTime @default(now())
  items         Item[]
}

model Item {
  id          String   @id @default(uuid())
  userId      String
  title       String
  description String?
  imagesUrls  String[]
  priceHigh   Float
  priceMid    Float
  priceLow    Float
  status      String   @default("draft")
  createdAt   DateTime @default(now())
  user        User     @relation(fields: [userId], references: [id])
  listings    Listing[]
}
```

---

## Appendices

### Appendix A: Risk Assessment

**Technical Risks:**
1. **Facebook Marketplace API Limitations:** Graph API may not support all posting features. *Mitigation: Fallback to automation (Puppeteer), manual posting MVP.*
2. **OpenAI API Costs:** High usage could exceed budget. *Mitigation: Aggressive caching, prompt optimization, rate limiting.*
3. **Platform API Changes:** Marketplace APIs change frequently. *Mitigation: Adapter pattern, comprehensive error handling, quick patch releases.*

**Project Risks:**
1. **Team Member Availability:** Academic schedules may conflict. *Mitigation: Flexible sprint planning, task buffer, pair programming.*
2. **Scope Creep:** Feature requests may expand beyond MVP. *Mitigation: Strict backlog prioritization, instructor approval for scope changes.*

### Appendix B: Success Metrics

**MVP Success Criteria (End of Semester):**
- [ ] User can register, login, create profile
- [ ] AI correctly prices items with >75% accuracy
- [ ] Posting succeeds to 3+ platforms
- [ ] AI agent handles 80% of buyer questions
- [ ] 50 beta users successfully sell items
- [ ] 99% uptime over final 2 weeks
- [ ] Test coverage >80% on backend

### Appendix C: References

- OpenAI API Documentation: https://platform.openai.com/docs
- Facebook Graph API: https://developers.facebook.com/docs/graph-api
- Stripe API: https://stripe.com/docs/api
- React Native Docs: https://reactnative.dev/
- Agile/Scrum Guide: https://scrumguides.org/

---

**Document Version:** 1.0
**Last Updated:** October 3, 2025
**Next Review:** October 10, 2025 (Post Sprint 1)

---

*This document is a living document and will be updated as the project progresses. All team members are expected to review and provide feedback.*
