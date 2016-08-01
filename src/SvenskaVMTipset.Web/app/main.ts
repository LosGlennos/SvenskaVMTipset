import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { provideForms, disableDeprecatedForms } from '@angular/forms';
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    appRouterProviders
])
.catch(err => console.log(err));