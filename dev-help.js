
#!/usr/bin/env node

console.log(`
=====================================================
ZappyBot Development Helper
=====================================================

If you're seeing errors about missing package.json, try these steps:

1. Run the app with our custom starter script:
   $ node start-app.js

2. If that doesn't work, you can manually create a package.json:
   $ node src/bootstrap.js

3. For persistent issues, try using environment variable:
   $ SKIP_PACKAGE_JSON_CHECK=true npx vite

The app should be available at http://localhost:8080 once started.

=====================================================
`);
