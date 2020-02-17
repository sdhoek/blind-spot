import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blind-spot';

  public test() {
    console.log(speechSynthesis.getVoices());
    speechSynthesis.speak(new SpeechSynthesisUtterance("Hello, this is your browser speaking."));
  }
}
