# CIS553 Project Requirements Mapping

## ✅ Core Requirements Compliance

### 1. UI Requirement
**Requirement**: Must have a UI (Web or desktop)
**Our Solution**: React Native mobile app (iOS & Android)
- **Status**: ✅ Compliant - Mobile UI with native components

### 2. Database Requirement
**Requirement**: Save state and data to a database
**Our Solution**: PostgreSQL database with 5 core tables
- users, items, listings, conversations, transactions
- **Status**: ✅ Compliant

### 3. User Authentication
**Requirement**: Must provide user authentication
**Our Solution**:
- Email/password with bcrypt hashing + JWT tokens
- OAuth 2.0 (Google & Facebook)
- **Status**: ✅ Compliant

### 4. No ML/Data Mining
**Requirement**: NO Machine Learning (ML) or Data Mining projects allowed
**Our Solution**: Using AI APIs (OpenAI Vision & GPT-4) as third-party services, NOT building ML models
- **Status**: ✅ Compliant - API integration, not ML development
- **Note**: Will document OpenAI as external service with proper attribution

### 5. Team Size
**Requirement**: 3-5 students
**Our Solution**: 6-person team structure (can adjust to 5 if needed)
- **Status**: ⚠️ Need to confirm team size (can reduce to 5)

### 6. No External Code/AI
**Requirement**: No opensource projects, AI, and libraries unless approved
**Our Solution**:
- Will document ALL external libraries (React Native, Express, etc.)
- OpenAI API as approved third-party service
- All application code written by team
- **Status**: ✅ Compliant with documentation

---

## 📋 Deliverables Checklist

### Team Info & Proposal (Due 10/3) - TOMORROW
- [x] Team name: **"Sold Squad"** or **"VibeDev"**
- [ ] Team member biographies (< 10 lines each)
- [ ] Team agreement (communication, meetings, git workflow, etc.)
- [ ] Tools description (React Native, Node.js, PostgreSQL, Jira, GitHub)
- [ ] Intended use of system
- [ ] Overall functionality
- [ ] Main components breakdown
- **Files Created**: PROJECT_PROPOSAL.md, TEAM_TASKS.md

### System Requirements (Due 10/17)
- [ ] Use case diagram
- [ ] Functional requirements
- [ ] Non-functional requirements
- [ ] User stories (As a X, I want Y, so that Z)
- [ ] Pre/post-conditions for each story
- [ ] Glossary of terms

### Product Backlog (Due 10/24)
- [ ] Refined user stories with Fibonacci sizing
- [ ] Iteration 1 selection (~1/3 of backlog)
- [ ] UI sketches/wireframes
- [ ] Jira board screenshots
- [ ] Git commit history screenshots

### Checkpoints (Due 11/11, 11/21, 12/8)
- [ ] Iteration functionality summary
- [ ] Implemented user stories
- [ ] Changes/lessons learned
- [ ] Next iteration planning

### Final Demonstration (Due 12/12)
- [ ] 20-45 min recorded presentation
- [ ] Slide deck (25 pts)
- [ ] Running application demo (45 pts)
- [ ] Deployment documentation (10 pts)
- [ ] User walkthrough with screenshots (10 pts)
- [ ] Additional scenarios (5 pts)

---

## 🛠️ Required Tools & Processes

### Project Management
- **Tool**: Jira (recommended) or GitHub Projects
- **Usage**: Task tracking, sprint planning, burndown charts
- **Compliance**: ✅ Will use Jira

### Source Control
- **Tool**: GitHub (or GitLab/Bitbucket)
- **Process**: Trunk-based development
- **Requirements**:
  - Frequent commits
  - Pull request reviews
  - Commit history will be graded
- **Compliance**: ✅ GitHub with PR reviews

### Documentation
- **Tool**: Confluence (recommended) or Markdown
- **Usage**: All deliverable documents
- **Compliance**: ✅ Using Markdown (can migrate to Confluence)

### Modeling
- **Tool**: PlantUML or Mermaid
- **Usage**: UML diagrams, use case diagrams
- **Compliance**: ✅ Will use Mermaid for diagrams

### Collaboration
- **Process**: Agile/Scrum with 2-week sprints
- **Roles**: Elect project manager
- **Meetings**: Weekly meetings (documented)
- **Compliance**: ✅ Following Agile methodology

---

## 🎯 How Our App Meets Academic Goals

### Software Engineering Principles Demonstrated

1. **Requirements Engineering**
   - User stories from stakeholder perspective
   - Functional & non-functional requirements
   - Use case modeling

2. **Agile Methodology**
   - 3 iterations (sprints)
   - Incremental delivery
   - Continuous feedback & adaptation

3. **Architecture & Design**
   - Monorepo structure (backend/mobile/shared)
   - REST API design
   - Database normalization
   - Component-based UI

4. **Testing & Quality**
   - Test-Driven Development (TDD)
   - Unit tests (Jest)
   - Integration tests (Supertest)
   - 80%+ code coverage

5. **Version Control & Collaboration**
   - Git workflow with feature branches
   - Pull request reviews
   - Trunk-based development
   - Commit message standards

6. **DevOps & Deployment**
   - CI/CD pipeline (GitHub Actions)
   - Cloud deployment (AWS/Heroku)
   - Automated testing in CI
   - Database migrations

7. **Third-Party Integrations**
   - OAuth 2.0 (Google, Facebook)
   - Payment processing (Stripe)
   - AI services (OpenAI)
   - Calendar API (Google)
   - Marketplace APIs

---

## ⚠️ Potential Issues & Mitigations

### Issue 1: AI/ML Restriction
**Problem**: Project uses OpenAI AI services, document says "NO AI"
**Mitigation**:
- OpenAI is a third-party API, not ML development
- Will document as external service with instructor approval
- Team is not training models or doing data mining
- **Action**: Confirm with instructor that API usage is acceptable

### Issue 2: Team Size (6 vs 3-5)
**Problem**: Proposed 6-person team, requirement is 3-5
**Mitigation**:
- Can adjust to 5 people
- Or get instructor approval for 6
- **Action**: Confirm team size with instructor

### Issue 3: External Libraries
**Problem**: Using React Native, Express, many npm packages
**Mitigation**:
- Document ALL external dependencies
- Only use standard, approved libraries
- All business logic written by team
- **Action**: Maintain dependencies.md file

### Issue 4: Platform API Automation
**Problem**: Automating posts to Facebook/Craigslist may violate ToS
**Mitigation**:
- Legal review of platform policies
- Implement manual fallback options
- User-initiated actions only
- **Action**: Research each platform's developer policies

---

## 📊 Timeline Alignment

| Course Checkpoint | Our Sprint | Deliverable |
|------------------|------------|-------------|
| 10/3 - Proposal | Setup | Team info, proposal ✅ |
| 10/17 - Requirements | Sprint 1 | Use cases, user stories |
| 10/24 - Backlog | Sprint 2 | Sized stories, Iteration 1 plan |
| 11/11 - Checkpoint 1 | Sprint 3 | Iteration 1 complete (auth, profiles) |
| 11/21 - Checkpoint 2 | Sprint 4-5 | Iteration 2 complete (AI, posting) |
| 12/8 - Checkpoint 3 | Sprint 6 | Iteration 3 complete (full MVP) |
| 12/12 - Final Demo | Sprint 7 | Presentation & demo |

**Alignment**: ✅ 14-week dev schedule matches course timeline

---

## 🎓 Key Takeaways for Instructor Approval

1. **Compliant with core requirements**: UI ✅, Database ✅, Auth ✅
2. **No ML development**: Using third-party AI APIs only
3. **Proper documentation**: All external code will be referenced
4. **Agile process**: Sprints, user stories, iterative delivery
5. **Team collaboration**: Jira, GitHub, regular meetings
6. **Real-world application**: Solves actual user problem, monetizable
7. **Technical depth**: OAuth, REST APIs, mobile dev, cloud deployment

**Ready for instructor review!**
