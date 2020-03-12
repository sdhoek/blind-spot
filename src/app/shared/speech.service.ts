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

    const englishVoice = this.voices.filter(voice => voice.lang === 'en-US')[0];
    const defaultVoice = this.voices.filter(voice => voice.default === true)[0];

    const utterance = new SpeechSynthesisUtterance(words);
    utterance.rate = 1.1;
    utterance.volume = 0.5;
    if (englishVoice) {
      utterance.voice = englishVoice
    } else {
      utterance.voice = defaultVoice
    }
    speechSynthesis.speak(utterance);
  }
}
