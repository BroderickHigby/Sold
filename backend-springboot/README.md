# Sold API - Spring Boot Backend

Spring Boot REST API for the Sold marketplace application.

## Tech Stack

- **Java 17**
- **Spring Boot 3.2.0**
- **PostgreSQL 15** (Database)
- **Maven** (Build tool)
- **JWT** (Authentication)
- **Hibernate/JPA** (ORM)
- **Lombok** (Reduces boilerplate)

## Prerequisites

- Java JDK 17+
- Maven 3.8+
- PostgreSQL 15+
- Redis 7+ (optional for caching)

## Setup

### 1. Install Java 17

```bash
# macOS
brew install openjdk@17

# Ubuntu/Debian
sudo apt install openjdk-17-jdk

# Verify
java -version
```

### 2. Set Environment Variables

Create `.env` file or export variables:

```bash
export DATABASE_URL=jdbc:postgresql://localhost:5432/sold_dev
export DB_USERNAME=postgres
export DB_PASSWORD=your_password
export JWT_SECRET=your-secret-key-change-in-production
export AWS_S3_BUCKET=sold-images-dev
export AWS_ACCESS_KEY_ID=your-access-key
export AWS_SECRET_ACCESS_KEY=your-secret-key
export OPENAI_API_KEY=sk-...
export STRIPE_SECRET_KEY=sk_test_...
```

### 3. Build & Run

```bash
# Build the project
mvn clean install

# Run the application
mvn spring-boot:run

# Or run the JAR
java -jar target/sold-api-1.0.0.jar
```

The API will start on `http://localhost:3000`

## API Endpoints

### Health Check
```
GET /health
```

### Authentication
```
POST /api/auth/register - Register new user
POST /api/auth/login - Login user
POST /api/auth/refresh - Refresh access token
GET  /api/auth/me - Get current user
```

### Items
```
POST   /api/items - Create item
GET    /api/items - Get user's items
GET    /api/items/{id} - Get item by ID
PUT    /api/items/{id} - Update item
DELETE /api/items/{id} - Delete item
```

### Listings
```
POST   /api/listings - Create listing
GET    /api/listings/item/{itemId} - Get listings by item
GET    /api/listings/{id} - Get listing by ID
PUT    /api/listings/{id}/status - Update listing status
```

## Database Schema

Entities converted from Prisma schema:
- **User** - User accounts and authentication
- **Item** - Items for sale
- **Listing** - Platform-specific listings
- **Conversation** - Buyer-seller conversations
- **Transaction** - Payment transactions

## Development

### Run Tests
```bash
mvn test
```

### Package for Production
```bash
mvn clean package -DskipTests
```

### Database Migrations

This project uses Hibernate's `ddl-auto=validate` mode. For production, use Flyway or Liquibase for migrations.

## Comparison with Express.js Backend

| Feature | Express (Node.js) | Spring Boot (Java) |
|---------|------------------|-------------------|
| Language | TypeScript | Java 17 |
| ORM | Prisma | Hibernate/JPA |
| Auth | JWT + Passport | JWT + Spring Security |
| Validation | express-validator | Jakarta Validation |
| Testing | Jest + Supertest | JUnit + MockMvc |
| Build | npm/pnpm | Maven |
| Hot Reload | tsx watch | spring-boot-devtools |

## Environment Variables

See `application.yml` for full configuration options:
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret key for JWT signing
- `AWS_*` - AWS S3 credentials
- `STRIPE_API_KEY` - Stripe payment key
- `OPENAI_API_KEY` - OpenAI API key

## API Documentation

Swagger UI available at: `http://localhost:3000/swagger-ui.html`

## Migration Notes

This Spring Boot backend is a conversion of the Express.js/TypeScript backend. Key differences:

1. **Type System**: Java's static typing vs TypeScript
2. **Dependency Injection**: Spring's @Autowired vs manual DI
3. **Database**: JPA annotations vs Prisma schema
4. **Security**: Spring Security vs custom middleware
5. **Configuration**: application.yml vs .env

## TODO

- [ ] Implement JWT refresh token logic
- [ ] Add user ID extraction from token in services
- [ ] Implement OAuth (Google, Facebook) integration
- [ ] Add OpenAI service integration
- [ ] Add AWS S3 service for image uploads
- [ ] Add Stripe payment service
- [ ] Implement comprehensive error handling
- [ ] Add integration tests
- [ ] Set up Flyway/Liquibase for migrations
- [ ] Add API rate limiting
- [ ] Implement caching with Redis

## License

This project is part of CIS553 coursework at University of Michigan - Dearborn.
