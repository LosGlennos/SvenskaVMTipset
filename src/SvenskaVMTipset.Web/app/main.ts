import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { provideForms } from '@angular/forms'

bootstrap(AppComponent, [
  provideForms()
]);