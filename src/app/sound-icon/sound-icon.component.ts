import { Component, OnInit } from '@angular/core';
import { SpeechService } from '../shared/speech.service';

@Component({
  selector: 'app-sound-icon',
  templateUrl: './sound-icon.component.html',
  styleUrls: ['./sound-icon.component.scss']
})
export class SoundIconComponent implements OnInit {
  public showIcon$ = this.speechService.isSpeaking$;
  constructor(private speechService: SpeechService) { }

  ngOnInit(): void {

  }

}
