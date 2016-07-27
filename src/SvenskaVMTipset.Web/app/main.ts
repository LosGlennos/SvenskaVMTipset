import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { provideForms, disableDeprecatedForms } from '@angular/forms';
import { appRouterProviders } from './app.routes';
import { ApiService } from './shared/api.service';

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    appRouterProviders,
    ApiService
])
.catch(err => console.log(err));