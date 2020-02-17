import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpeechService {
  public wordsToUtter = new Subject();
  public voices: SpeechSynthesisVoice[] = [];


  constructor() {

    this.setup();
    // speechSynthesis.speak(new SpeechSynthesisUtterance("Listen"));
    // setTimeout(() => {
    //   speechSynthesis.speak(new SpeechSynthesisUtterance("to the world"));
    // }, 1500)

  }

  public setup() {
    this.wordsToUtter.pipe(
      distinctUntilChanged()
    ).subscribe(this.speak)
  }

  public speak(words: string) {
    speechSynthesis.cancel();
    this.voices = speechSynthesis.getVoices();
    const utterance = new SpeechSynthesisUtterance(words);
    utterance.rate = 1.4;
    utterance.voice = this.voices[5];
    utterance.volume = 0.5;
    speechSynthesis.speak(utterance);

  }




}
