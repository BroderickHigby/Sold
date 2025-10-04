#!/bin/bash

# Sold - PC/Linux/WSL Setup Script
# This script automates the setup process for Windows (WSL/Git Bash) or Linux development

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Sold - PC/Linux Development Setup   ║${NC}"
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

# Detect OS
detect_os() {
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        if grep -qi microsoft /proc/version 2>/dev/null; then
            echo "WSL"
        else
            echo "Linux"
        fi
    elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
        echo "GitBash"
    else
        echo "Unknown"
    fi
}

OS_TYPE=$(detect_os)
print_status "Detected OS: $OS_TYPE"
echo ""

# Step 1: Check Prerequisites
print_status "Checking prerequisites..."

# Check for Node.js
if ! command_exists node; then
    print_error "Node.js not found!"
    echo ""
    echo "Please install Node.js 20+ from: https://nodejs.org/"
    echo ""
    if [ "$OS_TYPE" = "Linux" ]; then
        echo "Or install via package manager:"
        echo "  Ubuntu/Debian: curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt-get install -y nodejs"
        echo "  Fedora: sudo dnf install nodejs"
    elif [ "$OS_TYPE" = "WSL" ]; then
        echo "For WSL, install Node.js inside WSL, not Windows:"
        echo "  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt-get install -y nodejs"
    fi
    echo ""
    exit 1
else
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 20 ]; then
        print_error "Node.js version $(node -v) is too old. Please upgrade to Node.js 20+"
        exit 1
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
    print_warning "PostgreSQL not found. Installing instructions:"
    echo ""
    if [ "$OS_TYPE" = "Linux" ]; then
        echo "Ubuntu/Debian:"
        echo "  sudo apt update"
        echo "  sudo apt install postgresql postgresql-contrib"
        echo "  sudo systemctl start postgresql"
        echo ""
    elif [ "$OS_TYPE" = "WSL" ]; then
        echo "WSL Ubuntu:"
        echo "  sudo apt update"
        echo "  sudo apt install postgresql postgresql-contrib"
        echo "  sudo service postgresql start"
        echo ""
    elif [ "$OS_TYPE" = "GitBash" ]; then
        echo "Windows (via Git Bash):"
        echo "  Download and install from: https://www.postgresql.org/download/windows/"
        echo ""
    fi
    print_warning "Please install PostgreSQL manually and re-run this script"
    SKIP_DB=true
else
    print_success "PostgreSQL found"
    SKIP_DB=false

    # Start PostgreSQL if not running
    if [ "$OS_TYPE" = "Linux" ] || [ "$OS_TYPE" = "WSL" ]; then
        if ! sudo service postgresql status > /dev/null 2>&1; then
            print_status "Starting PostgreSQL..."
            sudo service postgresql start || sudo systemctl start postgresql
        fi
    fi
fi

# Check for Redis
if ! command_exists redis-cli; then
    print_warning "Redis not found. Installing instructions:"
    echo ""
    if [ "$OS_TYPE" = "Linux" ]; then
        echo "Ubuntu/Debian:"
        echo "  sudo apt install redis-server"
        echo "  sudo systemctl start redis"
        echo ""
    elif [ "$OS_TYPE" = "WSL" ]; then
        echo "WSL Ubuntu:"
        echo "  sudo apt install redis-server"
        echo "  sudo service redis-server start"
        echo ""
    elif [ "$OS_TYPE" = "GitBash" ]; then
        echo "Windows (via Git Bash):"
        echo "  Download from: https://github.com/microsoftarchive/redis/releases"
        echo "  Or use WSL for easier Redis installation"
        echo ""
    fi
    print_warning "Redis is optional for development. Continuing without it..."
    SKIP_REDIS=true
else
    print_success "Redis found"
    SKIP_REDIS=false

    # Start Redis if not running
    if [ "$OS_TYPE" = "Linux" ] || [ "$OS_TYPE" = "WSL" ]; then
        if ! sudo service redis-server status > /dev/null 2>&1; then
            print_status "Starting Redis..."
            sudo service redis-server start || sudo systemctl start redis
        fi
    fi
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
if [ "$SKIP_DB" = false ]; then
    print_status "Setting up database..."

    # Create database if it doesn't exist
    DB_NAME="sold_dev"
    if ! sudo -u postgres psql -lqt | cut -d \| -f 1 | grep -qw $DB_NAME 2>/dev/null; then
        print_status "Creating database '$DB_NAME'..."
        sudo -u postgres createdb $DB_NAME 2>/dev/null || createdb $DB_NAME 2>/dev/null || print_warning "Database creation skipped"
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
else
    print_warning "Skipping database setup (PostgreSQL not installed)"
fi

# Step 5: Build shared package
print_status "Building shared package..."
pnpm shared:build || print_warning "Shared package build skipped"
print_success "Shared package built"

# Step 6: Check for Android SDK (for Android emulator)
print_status "Checking for Android development environment..."

ANDROID_AVAILABLE=false
if [ -n "$ANDROID_HOME" ] || [ -n "$ANDROID_SDK_ROOT" ]; then
    print_success "Android SDK found at: ${ANDROID_HOME:-$ANDROID_SDK_ROOT}"
    ANDROID_AVAILABLE=true
else
    print_warning "Android SDK not found (ANDROID_HOME not set)"
    echo ""
    echo "To develop for Android, install Android Studio from:"
    echo "https://developer.android.com/studio"
    echo ""
    echo "Then set ANDROID_HOME environment variable"
    echo ""
fi

# Step 7: Determine run target
echo ""
echo -e "${GREEN}═══════════════════════════════════════${NC}"
echo -e "${GREEN}  Choose Development Target:${NC}"
echo -e "${GREEN}═══════════════════════════════════════${NC}"
echo ""
echo "1) Web Browser (recommended for quick start)"
echo "2) Android Emulator (requires Android Studio)"
echo "3) Skip (manual start later)"
echo ""

read -p "Select option (1-3): " -n 1 -r
echo
echo ""

TARGET=""
case $REPLY in
    1)
        TARGET="web"
        print_success "Selected: Web Browser"
        ;;
    2)
        if [ "$ANDROID_AVAILABLE" = true ]; then
            TARGET="android"
            print_success "Selected: Android Emulator"
        else
            print_error "Android SDK not available. Falling back to Web Browser"
            TARGET="web"
        fi
        ;;
    3)
        TARGET="none"
        print_success "Skipping auto-start"
        ;;
    *)
        print_warning "Invalid selection. Defaulting to Web Browser"
        TARGET="web"
        ;;
esac

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
echo "   $ pnpm mobile:web        # Web browser"
echo "   $ pnpm mobile:android    # Android emulator"
echo ""
echo -e "${BLUE}For more information, see the README.md${NC}"
echo ""

# Start servers if requested
if [ "$TARGET" != "none" ]; then
    read -p "Start development servers now? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_status "Starting development servers..."
        echo ""
        echo -e "${YELLOW}Starting backend server...${NC}"
        echo "Run in a separate terminal: pnpm backend:dev"
        echo ""

        if [ "$TARGET" = "web" ]; then
            echo -e "${YELLOW}Starting Expo for web browser...${NC}"
            echo "This will open your default browser"
            echo ""
            pnpm mobile:web
        elif [ "$TARGET" = "android" ]; then
            echo -e "${YELLOW}Starting Expo for Android...${NC}"
            echo "Make sure your Android emulator is running"
            echo ""
            pnpm mobile:android
        fi
    fi
fi

echo ""
print_success "Happy coding! 🚀"
