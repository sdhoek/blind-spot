import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  'providedIn': 'root'
})
export class MapInteractionService {
  public queryCoordinates: BehaviorSubject<[number, number]> = new BehaviorSubject(null);
  public move$: Subject<[number, number]> = new Subject();
  public moveDelta = 300; // pixels;
  public isDragging$ = new BehaviorSubject(false);
  constructor() { 
  }



  public moveUp() {
    this.move$.next([0, -this.moveDelta]);
  }

  public moveDown() {
    this.move$.next([0, this.moveDelta]);

  }

  public moveLeft() {
    this.move$.next([-this.moveDelta, 0]);

  }

  public moveRight() {
    this.move$.next([this.moveDelta, 0]);

  }
 
  

}
