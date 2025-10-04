#!/bin/bash

# Sold - macOS Setup Script
# This script automates the setup process for macOS development environment

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Sold - macOS Development Setup      ║${NC}"
echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo ""

# Function to print status messages
print_status() {
    echo -e "${BLUE}[*]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[✓]${NC} $1"
}

print_error() {
    echo -e "${RED}[✗]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[!]${NC} $1"
}

# Check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Step 1: Check Prerequisites
print_status "Checking prerequisites..."

# Check for Homebrew
if ! command_exists brew; then
    print_warning "Homebrew not found. Installing Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    print_success "Homebrew installed"
else
    print_success "Homebrew found"
fi

# Check for Node.js
if ! command_exists node; then
    print_warning "Node.js not found. Installing Node.js 20..."
    brew install node@20
    brew link node@20
    print_success "Node.js installed"
else
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 20 ]; then
        print_warning "Node.js version is below 20. Upgrading..."
        brew install node@20
        brew link --overwrite node@20
    fi
    print_success "Node.js $(node -v) found"
fi

# Check for pnpm
if ! command_exists pnpm; then
    print_warning "pnpm not found. Installing pnpm..."
    npm install -g pnpm
    print_success "pnpm installed"
else
    print_success "pnpm $(pnpm -v) found"
fi

# Check for PostgreSQL
if ! command_exists psql; then
    print_warning "PostgreSQL not found. Installing PostgreSQL..."
    brew install postgresql@15
    brew services start postgresql@15
    print_success "PostgreSQL installed and started"
else
    print_success "PostgreSQL found"
    # Ensure PostgreSQL is running
    if ! brew services list | grep postgresql | grep started > /dev/null; then
        print_status "Starting PostgreSQL..."
        brew services start postgresql@15 || brew services start postgresql
    fi
fi

# Check for Redis
if ! command_exists redis-cli; then
    print_warning "Redis not found. Installing Redis..."
    brew install redis
    brew services start redis
    print_success "Redis installed and started"
else
    print_success "Redis found"
    # Ensure Redis is running
    if ! brew services list | grep redis | grep started > /dev/null; then
        print_status "Starting Redis..."
        brew services start redis
    fi
fi

# Check for Watchman (recommended for React Native)
if ! command_exists watchman; then
    print_warning "Watchman not found. Installing Watchman (recommended for React Native)..."
    brew install watchman
    print_success "Watchman installed"
else
    print_success "Watchman found"
fi

# Step 2: Install project dependencies
print_status "Installing project dependencies..."
pnpm install
print_success "Dependencies installed"

# Step 3: Set up environment variables
print_status "Setting up environment variables..."

# Backend .env
if [ ! -f "backend/.env" ]; then
    if [ -f "backend/.env.example" ]; then
        cp backend/.env.example backend/.env
        print_success "Created backend/.env from example"
        print_warning "Please edit backend/.env with your API keys and credentials"
    else
        print_warning "backend/.env.example not found. Skipping .env creation"
    fi
else
    print_success "backend/.env already exists"
fi

# Mobile .env (if needed)
if [ -f "mobile/.env.example" ] && [ ! -f "mobile/.env" ]; then
    cp mobile/.env.example mobile/.env
    print_success "Created mobile/.env from example"
fi

# Step 4: Set up database
print_status "Setting up database..."

# Create database if it doesn't exist (using default postgres user)
DB_NAME="sold_dev"
if ! psql postgres -lqt | cut -d \| -f 1 | grep -qw $DB_NAME; then
    print_status "Creating database '$DB_NAME'..."
    createdb $DB_NAME || print_warning "Database creation skipped (may already exist)"
    print_success "Database created"
else
    print_success "Database '$DB_NAME' already exists"
fi

# Run Prisma migrations
if [ -f "backend/prisma/schema.prisma" ]; then
    print_status "Running database migrations..."
    cd backend
    pnpm prisma generate
    pnpm prisma migrate dev --name init || print_warning "Migration skipped (may already be applied)"
    cd ..
    print_success "Database migrations completed"
else
    print_warning "Prisma schema not found. Skipping migrations"
fi

# Step 5: Build shared package
print_status "Building shared package..."
pnpm shared:build || print_warning "Shared package build skipped"
print_success "Shared package built"

# Step 6: Check for Xcode (for iOS simulator)
print_status "Checking for Xcode..."
if ! command_exists xcodebuild; then
    print_warning "Xcode not found. You'll need to install Xcode from the App Store to run the iOS simulator"
    print_warning "After installing Xcode, run: sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer"
    RUN_IOS=false
else
    print_success "Xcode found"
    # Accept Xcode license if needed
    sudo xcodebuild -license accept 2>/dev/null || true
    RUN_IOS=true
fi

# Step 7: Install iOS simulator (CocoaPods)
if [ "$RUN_IOS" = true ]; then
    if ! command_exists pod; then
        print_warning "CocoaPods not found. Installing CocoaPods..."
        sudo gem install cocoapods
        print_success "CocoaPods installed"
    else
        print_success "CocoaPods found"
    fi
fi

echo ""
print_success "Setup complete!"
echo ""
echo -e "${GREEN}═══════════════════════════════════════${NC}"
echo -e "${GREEN}  Next Steps:${NC}"
echo -e "${GREEN}═══════════════════════════════════════${NC}"
echo ""
echo "1. Edit backend/.env with your API keys:"
echo "   - OPENAI_API_KEY"
echo "   - AWS credentials (S3)"
echo "   - Google/Facebook OAuth credentials"
echo "   - Stripe keys"
echo ""
echo "2. Start the development servers:"
echo ""
echo "   Terminal 1 (Backend):"
echo "   $ pnpm backend:dev"
echo ""
echo "   Terminal 2 (Mobile):"
echo "   $ pnpm mobile:ios    # iOS simulator"
echo "   $ pnpm mobile:web    # Web browser"
echo ""
echo "3. Or start everything at once:"
echo "   $ pnpm backend:dev & pnpm mobile:ios"
echo ""
echo -e "${BLUE}For more information, see the README.md${NC}"
echo ""

# Ask if user wants to start the app now
read -p "Do you want to start the development servers now? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    print_status "Starting development servers..."

    # Open new terminal tabs and run commands
    # Note: This uses AppleScript to open new Terminal tabs
    osascript -e 'tell application "Terminal" to activate' \
              -e 'tell application "Terminal" to do script "cd '"$(pwd)"' && pnpm backend:dev"' &

    sleep 2

    if [ "$RUN_IOS" = true ]; then
        osascript -e 'tell application "Terminal" to do script "cd '"$(pwd)"' && pnpm mobile:ios"' &
        print_success "Backend and iOS simulator starting in new terminal tabs..."
    else
        osascript -e 'tell application "Terminal" to do script "cd '"$(pwd)"' && pnpm mobile:web"' &
        print_success "Backend and web browser starting in new terminal tabs..."
    fi

    echo ""
    print_success "Development environment is starting!"
    echo -e "${YELLOW}Check the new terminal tabs for logs${NC}"
fi

echo ""
print_success "Happy coding! 🚀"
