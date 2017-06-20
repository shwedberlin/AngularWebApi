import 'zone.js'; //only neede here if using webpack.DllPlugin
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'bootstrap';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
