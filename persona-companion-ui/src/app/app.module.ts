import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Components:
import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { DailyStatusComponent } from './daily-status/daily-status.component';
import { MediaListComponent } from './media-list/media-list.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { NewMediaItemComponent } from './new-media-item/new-media-item.component';
import { SocialStatsComponent } from './social-stats/social-stats.component';

//Routing:
import { ROUTING } from './app.routes';

//Services:
import { RESTApiService } from './services/rest-api/rest-api.service';
import { DailyInfoService } from './services/daily-info/daily-info.service';
import { MediaService } from './services/media/media.service';
import { WeatherService } from './services/weather/weather.service';
import { SocialStatService } from './services/social-stat/social-stat.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    DailyStatusComponent,
    MediaListComponent,
    MediaItemComponent,
    NewMediaItemComponent,
    SocialStatsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ROUTING
  ],
  providers: [
    RESTApiService,
    DailyInfoService,
    MediaService,
    WeatherService,
    SocialStatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
