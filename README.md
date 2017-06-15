# AngularWebApi
Angular (v4) FrontEnd + .Net WebApi BackEnd

Based on: https://github.com/Burgyn/Angular2VisualStudioTemplate

Tested in IE11 (with core-js shim): no errors neither in Browser Console nor in VS2017 Console. Also tested with local IIS (Project switched back to use IISExpress)

Several Modules added: Shared, Core Module with services, pipes and components. Angular routing is configured with IIS Express Url Rewrite rules: dealing fine with browser refresh/back, 404 Page, in-app and url routing. Local IIS not tested yet - URL Rewrite module required. 

Windows Authentication added to web.config. (For IISExpress: changes in applicationhost.config needed)

Server side Logging with RequestId added (NLog + JSNLog). Adding RequestId to WebApi calls needed. 

# Upcoming Features:

- Optimize Webpack: automate builds, speedup, AoT
- Add RequestId to WebApi calls
- (Connect to existing WCF)
- ~~Add angular + WebApi routing dealing fine with browser F5/Back~~
- ~~Upgrade to Angular4 (4.1.3)~~
- ~~Switched to webpack from systemjs~~
- ~~Add WebApi dummy Controller for data-fetching~~
- ~~Add Bootstrap + jQuery~~
- ~~Add angular modules, components, services, pipes~~
- ~~Server side Logging~~
- ~~Implement Windows Authentification with AD~~

# Last fixes:
 
- Bootstrap assets referencing in webpack corrected
- Added shared (shared components, pipes) and core (services and singletons) modules
- Index.html base href and some RouterModule fixes. 
