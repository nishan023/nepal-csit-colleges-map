const https = require('https');
const http = require('http');

// Replace with your actual Render URL
const RENDER_URL = 'https://nepal-csit-colleges-map.onrender.com';
const HEALTH_ENDPOINT = `${RENDER_URL}/health`;

function pingServer() {
    const url = new URL(HEALTH_ENDPOINT);
    const client = url.protocol === 'https:' ? https : http;
    
    const req = client.get(HEALTH_ENDPOINT, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            try {
                const response = JSON.parse(data);
                console.log(`✅ Ping successful - Status: ${res.statusCode} - Uptime: ${Math.round(response.uptime)}s - Time: ${new Date().toLocaleString()}`);
            } catch (e) {
                console.log(`✅ Ping successful - Status: ${res.statusCode} - Time: ${new Date().toLocaleString()}`);
            }
        });
    });
    
    req.on('error', (err) => {
        console.error(`❌ Ping failed - Error: ${err.message} - Time: ${new Date().toLocaleString()}`);
    });
    
    req.setTimeout(10000, () => {
        console.error(`⏰ Ping timeout - Time: ${new Date().toLocaleString()}`);
        req.destroy();
    });
}

// Ping every 10 minutes (600,000 milliseconds)
const PING_INTERVAL = 10 * 60 * 1000;

console.log(`🚀 Starting keep-alive service for ${RENDER_URL}`);
console.log(`⏰ Will ping every ${PING_INTERVAL / 1000 / 60} minutes`);
console.log(`📊 Health endpoint: ${HEALTH_ENDPOINT}`);

// Initial ping
pingServer();

// Set up recurring pings
setInterval(pingServer, PING_INTERVAL);

// Keep the process alive
process.on('SIGINT', () => {
    console.log('\n🛑 Keep-alive service stopped');
    process.exit(0);
});
