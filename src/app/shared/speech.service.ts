import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpeechService {
  public wordsToUtter = new Subject();
  public voices: SpeechSynthesisVoice[] = [];

  constructor() {

    this.setup();
    speechSynthesis.speak(new SpeechSynthesisUtterance("Listen"));
    setTimeout(() => {
      speechSynthesis.speak(new SpeechSynthesisUtterance("to the world"));
    }, 1500)
    
  }

  public setup() {
    this.wordsToUtter.pipe(
      distinctUntilChanged()
    ).subscribe(this.speak)
  }

  public speak(words: string) {
    console.log(words);
    speechSynthesis.cancel();
    this.voices = speechSynthesis.getVoices();
    console.log(this.voices);
    const utterance = new SpeechSynthesisUtterance(words)
    utterance.voice = this.voices[38];
    speechSynthesis.speak(utterance);
  }

  


}
