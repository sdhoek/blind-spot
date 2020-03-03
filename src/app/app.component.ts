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

    // pixels the map pans when the up or down arrow is clicked
    let deltaDistance = 100;

    // degrees the map rotates when the left or right arrow is clicked
    let deltaDegrees = 25;

    function easing(t) {
      return t * (2 - t);
    }

    event.preventDefault();
    if (event.which === 38) {
      // up
      this.map.panBy([0, -deltaDistance], {
        easing: easing
      });
    } else if (event.which === 40) {
      // down
      this.map.panBy([0, deltaDistance], {
        easing: easing
      });
    } else if (event.which === 37) {
      // left
      this.map.panBy([deltaDistance, 0], {
        easing: easing
      });
    } else if (event.which === 39) {
      // right
      this.map.panBy([-deltaDistance, 0], {
        easing: easing
      });
    }
  }
}
