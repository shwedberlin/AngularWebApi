# AngularWebApi
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/161f6a43f59b45aa907fa4226012982b)](https://www.codacy.com/app/shwed.berlin/AngularWebApi?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=shwedberlin/AngularWebApi&amp;utm_campaign=Badge_Grade)
[![codebeat badge](https://codebeat.co/badges/0df53315-004e-4adb-a4ca-4a153077ef15)](https://codebeat.co/projects/github-com-shwedberlin-angularwebapi-master)

Angular (v4) FrontEnd + .Net WebApi BackEnd
## Features
- Latest Angular version (4)
- Webpack build, 2 configurations - chunks and splitting
- Angular style guide conform
    - Core and shared modules
    - Services and pipes
    - Affirmation and Alert Service/Components
- Bootstrap (with overriden .less variables)
- Less stylesheets
- IE + IIS compatible + Windows Authentication
- Client to Server side logging

Based on: https://github.com/Burgyn/Angular2VisualStudioTemplate

Tested in IE11 (with core-js shim): no errors neither in Browser Console nor in VS2017 Console. Also tested with local IIS (Project switched back to use IISExpress)

Several Modules added: Shared, Core Module with services, pipes and components. Angular routing is configured with IIS Express Url Rewrite rules: dealing fine with browser refresh/back, 404 Page, in-app and url routing. Local IIS not tested yet - URL Rewrite module required. 

Windows Authentication added to web.config. (For IISExpress: changes in applicationhost.config needed)

Added server side logging from cleint side with RequestId (NLog + JSNLog). Adding RequestId to WebApi calls needed. 

Splitted webpack configuration to vendor (with polyfills) and app code using DllPlugin. Added watch mode to app bundle. Changed mapping tool to 'eval-cheap-module-source-map'. SpeedUp: from 22sec to 12sec + 7sec w/o need to manually build app bundle. (Former config is still there, but references in index.html were changed - polyfills are now part of vendor). Use npm run build:vendor, then npm run build:app.

Connection to WCF tested outside this repo - it works.

# Last fixes

- Alert timeouts
- Added simple "App Loader" animation (css) before Angular app loads. 
- Added new script to `package.json`: npm run profile. Generates stats.json for analysing with `webpack-bundle-analyzer`
- After this analysis: 
    - moved @angular/forms to vendor bundle
    - excluded some locales from momentjs, saves ~400kb! Webpack plugin: `webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en|de)$/)`

# Upcoming Features:

- Simple App Error page (if Angular fails)
- Alert pause
- Logger names as Enums (both server and client side)
