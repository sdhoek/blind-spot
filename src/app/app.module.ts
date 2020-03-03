import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MapContainerComponent } from './map-container/map-container.component';
import { SharedModule } from './shared/shared.module';
import { SoundIconComponent } from './sound-icon/sound-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapContainerComponent,
    SoundIconComponent
  ],
  imports: [
    SharedModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
