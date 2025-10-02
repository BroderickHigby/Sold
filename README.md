# Sold - AI-Powered Multi-Platform Marketplace App

**CIS553 Fall 2025 - Software Engineering Project**

Sell anything instantly by taking a photo. Our AI handles pricing, multi-platform posting, buyer communication, and pickup scheduling automatically.

## 🎯 Project Overview

Sold revolutionizes online selling by automating the entire process:
1. 📸 Take a photo of your item
2. 🤖 AI analyzes and suggests optimal pricing
3. 🚀 One-click post to Facebook Marketplace, Craigslist, OfferUp, 5miles
4. 💬 AI agent chats with buyers to negotiate and schedule pickup
5. 💰 Get paid via Venmo/Zelle

## 📚 Documentation

- [Project Proposal](./PROJECT_PROPOSAL.md) - Full project specification
- [Team Tasks](./TEAM_TASKS.md) - Sprint planning & assignments
- [Tech Stack](./TECH_STACK.md) - Architecture & technology decisions
- [Requirements Mapping](./REQUIREMENTS_MAPPING.md) - CIS553 compliance

## 🏗️ Architecture

```
sold/
├── backend/          # Express.js REST API (TypeScript)
├── mobile/           # React Native app (iOS & Android)
├── shared/           # Shared TypeScript types & validators
├── docs/             # Documentation
└── .github/          # CI/CD workflows
```

### Tech Stack

**Backend**
- Node.js 20 + Express.js + TypeScript
- PostgreSQL 15 (Prisma ORM)
- Redis (Bull queue for jobs)
- AWS S3 (image storage)

**Mobile**
- React Native 0.72+
- TypeScript
- Zustand (state management)
- React Navigation

**AI/ML Services** (Third-party APIs)
- OpenAI Vision API (image analysis)
- OpenAI GPT-4 (conversational agent)

**Integrations**
- Google/Facebook OAuth
- Stripe (payments)
- Google Calendar
- Marketplace APIs (Facebook, Craigslist, etc.)

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- pnpm 8+
- PostgreSQL 15
- Redis 7
- AWS account (for S3)
- OpenAI API key

### Installation

```bash
# Install pnpm globally
npm install -g pnpm

# Install dependencies
pnpm install

# Set up environment variables
cp backend/.env.example backend/.env
# Edit backend/.env with your credentials

# Run database migrations
pnpm --filter backend prisma:migrate

# Start backend dev server
pnpm backend:dev

# Start mobile app (in another terminal)
pnpm mobile:dev
```

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run backend tests with coverage
pnpm backend:test

# Run mobile tests
pnpm mobile:test

# Run linter
pnpm lint

# Format code
pnpm format
```

## 📦 Monorepo Structure

### Backend (`/backend`)
- `src/routes/` - API endpoints
- `src/controllers/` - Business logic
- `src/services/` - External integrations (OpenAI, Stripe, etc.)
- `src/middleware/` - Auth, validation, error handling
- `prisma/` - Database schema & migrations
- `tests/` - Unit & integration tests

### Mobile (`/mobile`)
- `src/screens/` - App screens (Auth, Camera, Listings, etc.)
- `src/components/` - Reusable UI components
- `src/navigation/` - React Navigation setup
- `src/store/` - Zustand state management
- `src/services/` - API client

### Shared (`/shared`)
- `src/types/` - TypeScript interfaces
- `src/constants/` - Shared constants
- `src/validators/` - Zod validation schemas

## 🔄 Development Workflow

1. **Create feature branch**: `git checkout -b feature/task-name`
2. **Write tests first** (TDD approach)
3. **Implement feature**
4. **Run tests**: `pnpm test`
5. **Commit**: `git commit -m "feat: add feature description"`
6. **Push & create PR**: GitHub Actions runs CI
7. **Code review** (1 approval required)
8. **Merge to main** (auto-deploy to staging)

## 📅 Timeline

**14-week development schedule** (7 sprints)

| Sprint | Dates | Deliverable |
|--------|-------|-------------|
| 1 | Oct 2-15 | Foundation + Auth |
| 2 | Oct 16-29 | Profiles + AI Pricing |
| 3 | Oct 30-Nov 12 | Item Creation + Platform Posting |
| 4 | Nov 13-26 | AI Chat + Scheduling |
| 5 | Nov 27-Dec 10 | Payments + Listings |
| 6 | Dec 11-24 | Notifications + Deployment |
| 7 | Dec 25-Jan 7 | App Stores + Launch |

## 👥 Team

**6-Person Development Team**

- Backend Dev 1: Authentication, User Management, Images
- Backend Dev 2: Platform Integrations, AI Services, Payments
- Mobile Dev 1: Auth, Camera, Item Creation
- Mobile Dev 2: Listings, Conversations, Notifications
- DevOps Engineer: Infrastructure, CI/CD, Deployment
- AI Engineer: Price Detection, Chat Agent, NLP

## 📊 Project Management

- **Jira**: Sprint planning, task tracking
- **GitHub**: Source control, PR reviews
- **Confluence**: Documentation (optional)

## 🔐 Security

- Bcrypt password hashing (12 rounds)
- JWT tokens (15min access, 7day refresh)
- HTTPS only
- Input validation (Zod schemas)
- SQL injection prevention (Prisma)
- File upload validation
- Rate limiting

## 💰 Monetization

**Revenue Models** (A/B testing):
- Per-post: $0.50/post
- Subscription: $6/month unlimited
- Transaction fee: 5% of sale

## 📝 License

This project is part of CIS553 coursework at UMD.

## 🤝 Contributing

1. Follow the coding standards (ESLint + Prettier)
2. Write tests for new features
3. Update documentation
4. Create meaningful commit messages (Conventional Commits)
5. Request code review before merging

## 🐛 Known Issues / TODO

- [ ] Facebook Marketplace API research (may need manual posting)
- [ ] Legal review for platform automation
- [ ] Instructor approval for OpenAI API usage
- [ ] Team size confirmation (6 vs 5 members)

## 📞 Contact

**Project Lead**: Broderick Higby
**Course**: CIS553 Fall 2025
**Institution**: University of Maryland

---

**Phase 1 Status**: ✅ Complete
- [x] Requirements reviewed
- [x] Tech stack defined
- [x] Database schema designed
- [x] Monorepo structure created
- [x] Testing framework configured
- [ ] Backend auth implementation (next)
