#!/bin/bash

# Setup Environment File for Ask Fahmi AI Backend
# Usage: chmod +x setup-env.sh && ./setup-env.sh

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}=== Setup Environment File ===${NC}"

# Check if .env already exists
if [ -f ".env" ]; then
    echo -e "${YELLOW}.env file already exists!${NC}"
    read -p "Do you want to overwrite it? (y/n): " confirm
    if [ "$confirm" != "y" ]; then
        echo "Cancelled."
        exit 0
    fi
fi

# Prompt for API Key
echo ""
echo "Please enter your OpenAI API Key:"
echo "(Get it from: https://platform.openai.com/account/api-keys)"
read -s api_key

# Validate input
if [ -z "$api_key" ]; then
    echo "Error: API Key cannot be empty!"
    exit 1
fi

# Create .env file
echo "OPENAI_API_KEY=$api_key" > .env

# Set proper permissions (readable only by owner)
chmod 600 .env

echo -e "${GREEN}✓ .env file created successfully!${NC}"
echo -e "${GREEN}✓ File permissions set to 600 (owner only)${NC}"
echo ""
echo "Content of .env file:"
echo "====================="
cat .env | sed 's/sk-proj-.*/sk-proj-*****/'
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Run: pip install -r requirements.txt"
echo "2. Run: pm2 restart ask-fahmi-ai"
