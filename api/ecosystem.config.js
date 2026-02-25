module.exports = {
  apps: [
    {
      name: 'ask-fahmi-ai',
      script: 'main.py',
      interpreter: './venv/bin/python',
      args: '--port 8101',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PYTHONUNBUFFERED: '1'
      },
      log_file: './logs/combined.log',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true
    }
  ]
};
