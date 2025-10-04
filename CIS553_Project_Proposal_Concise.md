# Sold - AI-Powered Multi-Platform Marketplace System

**CIS 553: Software Engineering - Fall 2025**

This project focuses on designing and implementing an AI-powered marketplace automation system that revolutionizes online selling. The system will provide users with a mobile platform to automate listing creation, multi-platform posting, and buyer communication through AI agents. The project aligns with course requirements by including a mobile UI, authentication, database integration, and agile-based collaborative development. Machine learning APIs (OpenAI) are used as third-party services only, not custom ML development.

---

## Problem Statement

Selling items online is fragmented and time-consuming. Sellers must manually create listings on multiple platforms (Facebook Marketplace, Craigslist, OfferUp), manage separate accounts, respond to repetitive buyer inquiries, and coordinate pickups through back-and-forth messaging. There is a need for a centralized mobile system that automates the entire selling workflow from photo capture to final transaction.

---

## Objectives

- Develop a secure, cross-platform mobile application (iOS & Android) for online sellers
- Implement user authentication with OAuth 2.0 (Google, Facebook) and JWT-based sessions
- Integrate AI-powered image recognition and pricing using OpenAI Vision API
- Provide one-click multi-platform posting to 4+ marketplace platforms
- Deploy GPT-4 conversational agent to automate buyer communication and negotiation
- Enable automatic pickup scheduling with Google Calendar integration
- Implement payment processing via Stripe for subscription/per-post monetization
- Ensure the system is developed using software engineering best practices (Agile, TDD, version control)

---

## Scope

The system will be implemented as a React Native mobile application with a Node.js backend API. It will have a mobile interface for sellers, a backend server to handle AI integration and platform posting, and a PostgreSQL database for persistent storage. The system will include authentication, item creation with AI assistance, multi-platform publishing, AI buyer agent, calendar sync, and payment processing. Deployment will be done on AWS cloud infrastructure.

---

## Tools & Technologies

**Frontend (Mobile):**
- React Native (Expo) for cross-platform iOS/Android development
- TypeScript for type safety
- Zustand for state management
- React Navigation for routing

**Backend:**
- Node.js 20 + Express.js for REST API
- TypeScript
- PostgreSQL 15 with Prisma ORM
- Redis + Bull for job queues

**Third-Party Integrations:**
- OpenAI Vision API & GPT-4 (image analysis, conversational AI)
- Google OAuth & Calendar API
- Facebook OAuth & Graph API (Marketplace posting)
- Stripe (payments & subscriptions)
- AWS S3 (image storage)

**Development Tools:**
- GitHub for version control
- GitHub Actions for CI/CD
- Jira for project management
- PlantUML for UML diagrams
- Jest + Supertest for testing (TDD approach)

**Infrastructure:**
- AWS EC2/RDS/ElastiCache for hosting
- Sentry for error tracking
- CloudWatch for monitoring

---

## Deliverables

- Team agreement and project proposal document
- System requirements with use case diagrams and user stories
- Product backlog with story point estimates
- UML diagrams (Use Case, Class, Sequence, Component)
- Working mobile application with UI, authentication, AI integration, and multi-platform posting
- Screenshots and Jira board progress at each checkpoint
- 3 iteration checkpoints with implemented user stories
- Final recorded demo presentation (20-45 minutes)
- Final project documentation with deployment instructions and walkthroughs

---

## Project Roadmap

The project will follow Agile methodology with 5 two-week sprints over 10 weeks (ending December 7th):

**Sprint 1 (Oct 3-16):** Foundation - Project setup, database design, authentication (email/password, OAuth)

**Sprint 2 (Oct 17-30):** User profiles, Google Calendar integration, camera/image upload, OpenAI Vision API integration, AI pricing

**Sprint 3 (Oct 31-Nov 13):** Item creation flow, multi-platform posting (Facebook, Craigslist, OfferUp), retry logic

**Sprint 4 (Nov 14-27):** GPT-4 buyer agent, webhook receivers, automated negotiation, pickup scheduling, Stripe payment integration

**Sprint 5 (Nov 28-Dec 7):** Push notifications (Firebase), listings dashboard, production deployment to AWS, final testing and documentation

---

## Team Composition

**Team Name:** Vibe

**Team Size:** 6 members

1. **Broderick Higby** - Project Lead & Backend Developer (Authentication, User Management, Image Processing)
2. **Backend Developer 2** - Platform Integrations, AI Services, Payment Systems
3. **Mobile Developer 1** - Authentication, Camera, Item Creation Flow
4. **Mobile Developer 2** - Listings, Conversations, Notifications
5. **DevOps Engineer** - Infrastructure, CI/CD, Deployment, Monitoring
6. **AI/ML Engineer** - Price Detection, Chat Agent, NLP Processing

---

## Key Features

**MVP Features:**
1. User authentication (OAuth + email/password)
2. AI-powered item identification and pricing
3. Multi-platform posting (one-click publish)
4. AI buyer communication agent
5. Google Calendar pickup scheduling
6. Payment processing (Stripe)
7. Push notifications
8. Transaction history

**System Architecture:**
- Mobile app communicates with REST API
- Backend orchestrates AI services, platform APIs, and database
- Queue system handles asynchronous jobs (posting, AI processing)
- Webhook receivers capture marketplace messages
- AI agent processes buyer inquiries and responds automatically

---

## Success Metrics

**Technical:**
- 99.5% API uptime
- <2 second AI response time
- Test coverage >80%
- Successful posting to 3+ platforms

**Functional:**
- User can create listing end-to-end in <2 minutes
- AI handles 80% of buyer questions without human intervention
- AI pricing accuracy within 15% of market value
- Calendar sync with <1 minute latency

---

## Academic Alignment (CIS 553 Requirements)

✓ **UI Requirement:** Cross-platform mobile app (React Native)
✓ **Database:** PostgreSQL with normalized schema
✓ **Authentication:** JWT + OAuth 2.0 (Google, Facebook)
✓ **No Custom ML:** Using OpenAI APIs as third-party services
✓ **Team Size:** 6 members (within 3-5 guideline, instructor approval requested)
✓ **Agile Process:** Scrum with 2-week sprints
✓ **Version Control:** Git with trunk-based development
✓ **Testing:** TDD approach with Jest
✓ **Deployment:** AWS cloud infrastructure

---

**Submission Date:** October 3, 2025
**Course:** CIS 553 - Software Engineering
**Institution:** University of Michigan - Dearborn
**Project Lead:** Broderick Higby
