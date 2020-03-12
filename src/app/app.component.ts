import { Component, DoCheck, HostListener } from '@angular/core';
import { MapInteractionService } from './shared/map-interaction.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
  title = 'blind-spot';
  constructor(private mapInteractionService: MapInteractionService) {

  }
  ngDoCheck() {
    console.log('do check');
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: Event): void {
    console.log("click")

    //doSomething () --> Your logic when there is a document click
  }
  @HostListener('document:keydown', ['$event'])
  public documentKeydown(event: KeyboardEvent): void {
    if (event.which === 38) {
      event.preventDefault();
      this.mapInteractionService.moveUp();
    } else if (event.which === 40) {
      event.preventDefault();
      this.mapInteractionService.moveDown();
    } else if (event.which === 37) {
      event.preventDefault();
      this.mapInteractionService.moveLeft();
    } else if ( event.which === 39) {
      event.preventDefault();
      this.mapInteractionService.moveRight();
    }
  }
}
