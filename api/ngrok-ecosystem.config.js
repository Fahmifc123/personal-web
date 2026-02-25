module.exports = {
  apps: [
    {
      name: 'ngrok-tunnel',
      script: 'ngrok',
      args: 'http 8101 --log=stdout',
      interpreter: 'none',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '100M',
      env: {
        NODE_ENV: 'production'
      },
      log_file: './logs/ngrok-combined.log',
      out_file: './logs/ngrok-out.log',
      error_file: './logs/ngrok-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      // Extract ngrok URL from logs
      log_type: 'json'
    }
  ]
};
