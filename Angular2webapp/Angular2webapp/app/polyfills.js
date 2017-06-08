// referenced directly in index.html
// works w/o any exceptions in IE11+ 
// neither in browser.console nor in VS Console
//import 'core-js/client/shim.js';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone");
if (process.env.ENV === 'production') {
    // Production
}
else {
    // Development and test, uncomment after zone.js new version arrives (0.8.12+) --> 0.8.12 seems still not working
    //Error['stackTraceLimit'] = Infinity;  either
    Error.stackTraceLimit = Infinity; //or
    require('zone.js/dist/long-stack-trace-zone');
}
//# sourceMappingURL=polyfills.js.map