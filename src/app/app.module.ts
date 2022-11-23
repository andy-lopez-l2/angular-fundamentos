import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventThumbnailComponent } from './components/event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EventService } from './services/event.service';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { NewEventComponent } from './components/new-event/new-event.component';
import { ErrorPageComponent } from './errors/error-page/error-page.component';
import { EvetRouteActivateService } from './services/evet-route-activate.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    NewEventComponent,
    ErrorPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [EventService, ToastrService, EvetRouteActivateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
