
#!/usr/bin/env node

console.log(`
=====================================================
ZappyBot Development Helper
=====================================================

If you're seeing errors about missing package.json, try these steps in order:

1. Run our bootstrap script to create package.json in all needed locations:
   $ node src/bootstrap.js

2. Run the app with our custom starter script:
   $ node start-app.js

3. Try our emergency direct starter that bypasses npm:
   $ node direct-start.js

4. If npm can't find package.json in /dev-server:
   $ sudo mkdir -p /dev-server
   $ sudo chmod 777 /dev-server
   $ node src/bootstrap.js
   $ node start-app.js

5. For persistent issues, try using environment variable:
   $ SKIP_PACKAGE_JSON_CHECK=true npx vite

6. Create package.json manually in /dev-server:
   $ sudo mkdir -p /dev-server
   $ sudo chmod 777 /dev-server
   $ echo '{"name":"zappybot-website","version":"1.0.0"}' > /dev-server/package.json
   $ npx vite

The app should be available at http://localhost:8080 once started.

=====================================================
`);
