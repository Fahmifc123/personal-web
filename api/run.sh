#!/bin/bash

# Ask Fahmi AI Backend - PM2 Startup Script
# Usage: chmod +x run.sh && ./run.sh

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}=== Ask Fahmi AI Backend Setup ===${NC}"

# Check if venv exists, if not create it
if [ ! -d "venv" ]; then
    echo -e "${YELLOW}Creating virtual environment...${NC}"
    python3 -m venv venv
fi

# Activate virtual environment
echo -e "${YELLOW}Activating virtual environment...${NC}"
source venv/bin/activate

# Upgrade pip
echo -e "${YELLOW}Upgrading pip...${NC}"
pip install --upgrade pip

# Install requirements
echo -e "${YELLOW}Installing requirements...${NC}"
pip install -r requirements.txt

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo -e "${RED}PM2 not found! Installing PM2...${NC}"
    npm install -g pm2
fi

# Start/Restart with PM2
echo -e "${GREEN}Starting Ask Fahmi AI Backend with PM2...${NC}"
pm2 restart ask-fahmi-ai || pm2 start main.py --name ask-fahmi-ai --interpreter venv/bin/python -- --port 8101

# Save PM2 config
echo -e "${YELLOW}Saving PM2 config...${NC}"
pm2 save

echo -e "${GREEN}=== Setup Complete ===${NC}"
echo -e "${GREEN}Backend running at: http://localhost:8101${NC}"
echo -e "${YELLOW}PM2 Commands:${NC}"
echo "  pm2 status          - Check status"
echo "  pm2 logs ask-fahmi-ai  - View logs"
echo "  pm2 stop ask-fahmi-ai  - Stop service"
echo "  pm2 restart ask-fahmi-ai - Restart service"
