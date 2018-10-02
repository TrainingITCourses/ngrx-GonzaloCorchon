import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { LaunchListingComponent } from './components/launch-listing/launch-listing.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AgencyEffects } from './reducers/agency.effects';
import { MissionEffects } from './reducers/mission.effects';
import { StatusEffects } from './reducers/status.effects';
import { LaunchEffects } from './reducers/launch.effects';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LaunchListingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AgencyEffects, MissionEffects, StatusEffects, LaunchEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
