
# ZappyBot Website

## Troubleshooting Package.json Errors

If you're experiencing errors related to missing package.json, particularly with `/dev-server/package.json`, try the following solutions in order:

### Solution 1: Use the NPM Bypass Script (Recommended)

```
node npm-bypass.js
```

This script attempts multiple methods to start the application without relying on npm or package.json.

### Solution 2: Run the Bootstrap Script

```
node src/bootstrap.js
```

This will create package.json files in all required locations.

### Solution 3: Use the Start App Script

```
node start-app.js
```

### Solution 4: Use the Direct Start Script

```
node direct-start.js
```

### Solution 5: Manual Directory Creation (if permissions are an issue)

```
sudo mkdir -p /dev-server
sudo chmod 777 /dev-server
node src/bootstrap.js
node start-app.js
```

### Solution 6: Use Environment Variable to Skip Checks

```
SKIP_PACKAGE_JSON_CHECK=true npx vite
```

### Solution 7: Get More Help

```
node dev-help.js
```

## Development

Once you've resolved the package.json issues, the application should be accessible at [http://localhost:8080](http://localhost:8080).

