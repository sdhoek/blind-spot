import { Injectable } from '@angular/core';
import { Subject, interval, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {
  public wordsToUtter = new Subject();
  public voices: SpeechSynthesisVoice[] = [];
  public isSpeaking$: Observable<boolean> = interval(500).pipe(
    map(() => {
      return speechSynthesis.speaking;
    })
  );

  constructor() {
    this.setup();
    const utterance = new SpeechSynthesisUtterance("Listen. To the world");
    utterance.rate = 0.6;
    speechSynthesis.speak(utterance);
  }

  public setup() {
    this.wordsToUtter.pipe(
      distinctUntilChanged()
    ).subscribe(this.speak);
  }

  public speak(words: string) {
    speechSynthesis.cancel();
    this.voices = speechSynthesis.getVoices();
    const utterance = new SpeechSynthesisUtterance(words);
    utterance.rate = 1.1;
    utterance.voice = this.voices[6];
    utterance.volume = 0.5;
    speechSynthesis.speak(utterance);
  }
}
