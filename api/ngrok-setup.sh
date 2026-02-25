#!/bin/bash

# Setup ngrok untuk tunnel ke Python backend
# Usage: chmod +x ngrok-setup.sh && ./ngrok-setup.sh

echo "=== Setting up ngrok ==="

# Install ngrok jika belum ada
if ! command -v ngrok &> /dev/null; then
    echo "Installing ngrok..."
    cd ~
    wget -q https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz
    tar xzf ngrok-v3-stable-linux-amd64.tgz
    sudo mv ngrok /usr/local/bin/
    rm ngrok-v3-stable-linux-amd64.tgz
    echo "ngrok installed"
fi

# Setup authtoken
echo "Configuring ngrok authtoken..."
ngrok config add-authtoken 22pEQb6dspfF8zk79g66UIBx7Sa_4ZsVh5H2p8d56o2zbuYPo

echo "=== Setup complete ==="
echo "Run 'pm2 start ngrok-ecosystem.config.js' to start ngrok tunnel"
