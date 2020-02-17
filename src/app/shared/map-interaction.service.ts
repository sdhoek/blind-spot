import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  'providedIn': 'root'
})
export class MapInteractionService {
  public queryCoordinates: BehaviorSubject<[number, number]> = new BehaviorSubject(null);

  constructor() { 
  }

}
