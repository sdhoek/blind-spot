import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpeechService {
  public wordsToUtter = new Subject();
  public voices: [] = [];

  constructor() {

    this.setup();
    speechSynthesis.speak(new SpeechSynthesisUtterance("Welcome to our invisible map"));
  }

  public setup() {
    this.wordsToUtter.pipe(
      distinctUntilChanged()
    ).subscribe(this.speak)
  }

  public speak(words: string) {
    console.log(words);
    speechSynthesis.cancel();
    speechSynthesis.speak(new SpeechSynthesisUtterance(words));
  }

  


}
