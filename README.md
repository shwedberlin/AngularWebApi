# AngularWebApi
Angular (v4) FrontEnd + .Net WebApi BackEnd

Based on: https://github.com/Burgyn/Angular2VisualStudioTemplate

Tested in IE11 (with core-js shim): no errors neither in Browser Console nor in VS2017 Console. Also tested with local IIS (Project switched back to use IISExpress)

Several Modules added: Shared, Core Module with services, pipes and components. Angular (= client side) routing is configured, server side routing (after F5/refresh) is corrupt. IIS rewrite rules wrong?

# Upcoming Features:

- Optimize Webpack: automate builds, speedup, AoT
- Add angular + WebApi routing dealing fine with browser F5/Back
- (Implement Windows Authentification with AD)
- (Connect to existing WCF)
- ~~Upgrade to Angular4 (4.1.3)~~
- ~~Switched to webpack from systemjs~~
- ~~Add WebApi dummy Controller for data-fetching~~
- ~~Add Bootstrap + jQuery~~
- ~~Add angular modules, components, services, pipes~~

# Last fixes:
 
- Bootstrap assets referencing in webpack corrected
- Added shared (shared components, pipes) and core (services and singletons) modules 
