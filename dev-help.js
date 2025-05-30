
#!/usr/bin/env node

console.log(`
=====================================================
ZappyBot Development Helper
=====================================================

If you're seeing errors about missing package.json, try these steps in order:

1. NEW! Use our NPM bypass script (recommended first solution):
   $ node npm-bypass.js

2. Run our bootstrap script to create package.json in all needed locations:
   $ node src/bootstrap.js

3. Run the app with our custom starter script:
   $ node start-app.js

4. Try our emergency direct starter that bypasses npm:
   $ node direct-start.js

5. If npm can't find package.json in /dev-server:
   $ sudo mkdir -p /dev-server
   $ sudo chmod 777 /dev-server
   $ node src/bootstrap.js
   $ node start-app.js

6. For persistent issues, try using environment variable:
   $ SKIP_PACKAGE_JSON_CHECK=true npx vite

7. Create package.json manually in /dev-server:
   $ sudo mkdir -p /dev-server
   $ sudo chmod 777 /dev-server
   $ echo '{"name":"zappybot-website","version":"1.0.0"}' > /dev-server/package.json
   $ npx vite

The app should be available at http://localhost:8080 once started.

=====================================================
`);

// Try to detect if we're running in an environment where /dev-server might need special permissions
try {
  const fs = require('fs');
  const path = require('path');
  
  if (!fs.existsSync('/dev-server')) {
    console.log(`\nIt appears /dev-server directory doesn't exist in your environment.`);
    console.log(`This could be causing your package.json errors.\n`);
    console.log(`Try running the following commands:`);
    console.log(`$ sudo mkdir -p /dev-server`);
    console.log(`$ sudo chmod 777 /dev-server`);
    console.log(`$ node src/bootstrap.js`);
    console.log(`\nOr simply run our new bypass script that handles this for you:`);
    console.log(`$ node npm-bypass.js\n`);
  }
} catch (error) {
  // Ignore errors in the detection code
}

