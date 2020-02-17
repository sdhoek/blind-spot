import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapInteractionService } from './map-interaction.service';
import { SpeechService } from './speech.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    MapInteractionService,
    SpeechService
  ],
  exports: []
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [    MapInteractionService,
        SpeechService ]
    };
  }
}
