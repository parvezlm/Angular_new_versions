import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { TitleStrategy, provideRouter } from '@angular/router';
import { APP_ROUTES } from './app/app.route';
import { TitleUpdateStrategyService } from './app/services/titleUpdateStrategy.service';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTES),
    provideHttpClient(),
    { provide: TitleStrategy, useClass: TitleUpdateStrategyService }
  ],
});
