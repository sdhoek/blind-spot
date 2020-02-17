import { Component, DoCheck } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  title = 'blind-spot';

  ngDoCheck() {
    console.log('do check');
  }

}
