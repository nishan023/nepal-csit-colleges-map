# Deployment Guide for Render

## Render Configuration

### 1. Create a Web Service (not Static Site)

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Configure the service:

**Build Settings:**
- **Build Command:** `npm install`
- **Start Command:** `npm start`

**Environment Variables:**
- `NODE_ENV`: `production`
- `PORT`: `10000` (Render will set this automatically)

### 2. Keep-Alive Setup

To prevent your Render instance from going to sleep, you have several options:

#### Option A: Use a Keep-Alive Service (Recommended)

1. **UptimeRobot (Free):**
   - Go to [UptimeRobot](https://uptimerobot.com)
   - Create account and add a new monitor
   - Set URL to: `https://your-app-name.onrender.com/health`
   - Set check interval to 5 minutes
   - This will ping your app every 5 minutes

2. **Cron-job.org (Free):**
   - Go to [cron-job.org](https://cron-job.org)
   - Create account and add a new cronjob
   - Set URL to: `https://your-app-name.onrender.com/health`
   - Set schedule to every 10 minutes: `*/10 * * * *`

3. **Local Keep-Alive Script:**
   ```bash
   # Run this on your local machine or another server
   npm run keep-alive
   ```

#### Option B: Render's Always-On Plan

- Upgrade to Render's paid plan for always-on instances
- No need for external ping services

### 3. Health Check Endpoint

Your app includes a health check endpoint at `/health` that returns:
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "uptime": 3600,
  "message": "CSIT Colleges Map is running"
}
```

### 4. Monitoring

- **Render Dashboard:** Monitor logs and performance
- **Health Endpoint:** Check if app is responding
- **External Services:** UptimeRobot, Pingdom, etc.

## Troubleshooting

### App Goes to Sleep
- Check if keep-alive service is running
- Verify health endpoint is accessible
- Consider upgrading to paid plan

### Build Failures
- Ensure `package.json` has correct scripts
- Check Node.js version compatibility
- Verify all dependencies are listed

### Performance Issues
- Monitor Render logs for errors
- Check memory usage
- Consider optimizing static assets
