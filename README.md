# AngularWebApi
Angular (v4) FrontEnd + .Net WebApi BackEnd

Based on: https://github.com/Burgyn/Angular2VisualStudioTemplate

Tested in IE11 (with core-js shim): no errors neither in Browser Console nor in VS2017 Console. Also tested with local IIS (Project switched back to use IISExpress)

Several Modules added: Shared, Core Module with services, pipes and components. Angular routing is configured with IIS Express Url Rewrite rules: dealing fine with browser refresh/back, 404 Page, in-app and url routing. Local IIS not tested yet - URL Rewrite module required. 

Windows Authentication added to web.config. (For IISExpress: changes in applicationhost.config needed)

Added server side logging from cleint side with RequestId (NLog + JSNLog). Adding RequestId to WebApi calls needed. 

Splitted webpack configuration to vendor (with polyfills) and app code using DllPlugin. Added watch mode to app bundle. Changed mapping tool to 'eval-cheap-module-source-map'. SpeedUp: from 22sec to 12sec + 7sec w/o need to manually build app bundle. (Former config is still there, but references in index.html were changed - polyfills are now part of vendor). Use npm run build:vendor, then npm run build:app.

# Upcoming Features:

- ~~Optimize Webpack: automate builds, speedup, AoT(?)~~
- (Connect to existing WCF)
- ~~Add angular + WebApi routing dealing fine with browser F5/Back~~
- ~~Upgrade to Angular4 (4.1.3)~~
- ~~Switched to webpack from systemjs~~
- ~~Add WebApi dummy Controller for data-fetching~~
- ~~Add Bootstrap + jQuery~~
- ~~Add angular modules, components, services, pipes~~
- ~~Server side Logging~~
- ~~Implement Windows Authentification with AD~~
- ~~Add RequestId to WebApi calls~~
- ~~Switched from css to less styles, overriding some botstrap styles~~

# Last fixes:
 
- Bootstrap assets referencing in webpack corrected
- Added shared (shared components, pipes) and core (services and singletons) modules
- Index.html base href and some RouterModule fixes. 
- Serverside logging optimized. Common.Logging used instead of NLog directly. NLog Configuration splitted as example to client and server logs. RequestId transferred to server in header.
- Switched to .less styles, splitted to app & vendor styles, overriding some bootstrap colors
