import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { provideForms, disableDeprecatedForms } from '@angular/forms'

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms()
]);