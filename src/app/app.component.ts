import { Component, DoCheck, HostListener } from '@angular/core';


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
  
  @HostListener('document:click', ['$event'])
  public documentClick(event: Event): void {
    console.log("click")

    //doSomething () --> Your logic when there is a document click
  }
  @HostListener('document:keydown', ['$event']) 
  public documentKeydown(event: Event): void {
    console.log(event)

    //doSomething () --> Your logic when there is a document click
  }
}
