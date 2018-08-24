import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Components:
import { DailyStatusComponent } from "./daily-status/daily-status.component";
import { MediaListComponent } from "./media-list/media-list.component";
import { NewMediaItemComponent } from "./new-media-item/new-media-item.component";
import { SocialStatsComponent } from "./social-stats/social-stats.component";

const APP_ROUTES: Routes = [
    { path: '', component: DailyStatusComponent },
    { path: 'daily-status', component: DailyStatusComponent },
    { path: 'media', component: MediaListComponent },
    { path: 'media/new', component: NewMediaItemComponent },
    { path: 'social-stats', component: SocialStatsComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);