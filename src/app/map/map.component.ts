import { Component, OnInit, NgZone } from '@angular/core';
import { Map } from 'mapbox-gl';
import mapstyle from '../../assets/mapstyle.json';
import { MapInteractionService } from '../shared/map-interaction.service';
import { SpeechService } from '../shared/speech.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public map: Map;

  constructor(private mapInteractionService: MapInteractionService, private speechService: SpeechService, private zone: NgZone) {
  }

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.map = new Map({
        container: 'map',
        style: mapstyle as any,
        hash: true,
        zoom: 16,
        pitch: 0,
        bearing: -15.7,
        center: [5.24574, 51.81254],
        attributionControl: false
      });

      this.map.on('load', () => {
        this.mapInteractionService.move$.subscribe(([x, y]) => {
          this.map.panBy([x, y])
        })
      })


      this.mapInteractionService.queryCoordinates.pipe(
        filter(coords => coords !== null)
      ).subscribe(coords => {
        const features = this.map.queryRenderedFeatures([
          [coords[0] - 2, coords[1] - 2],
          [coords[0] + 2, coords[1] + 2],
        ]
        );
        if (features === undefined || features === null || features.length === 0) {
          return;
        }

        const feature = features[0];
        let words = ''
        if (feature.sourceLayer === 'roads') {
          words = `road ${feature.properties.name}`
        } else if (feature.sourceLayer === 'water' && feature.properties.type === 'water_way') {
          words = `${feature.sourceLayer}`;
        } else if (feature.sourceLayer === 'boundaries') {
          words = `you are crossing border ${feature.properties.name}`
        }
        else {
          words = `${feature.sourceLayer} ${feature.properties.type} ${feature.properties.subtype || ''}`;
        }

        this.speechService.wordsToUtter.next(words);
      })

    })




  }

}


