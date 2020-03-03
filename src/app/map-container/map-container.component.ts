import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { MapInteractionService } from '../shared/map-interaction.service';
import { select, drag, selectAll, mouse, event } from 'd3';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})
export class MapContainerComponent implements OnInit, AfterViewInit {

  constructor(private mapInteractionService: MapInteractionService, private zone: NgZone) {

  }
  ngOnInit() {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let activeClassName = 'active-d3-item';
      let circleradius = 30;
      let svg = select('body').select('#frontcover').attr('class', 'fullsize');

      let dragslistner = drag()
        .on('start', dragstarted)
        .on('drag', () => {
          selectAll("circle")
            .style('left', (event.x - circleradius) + 'px')
            .style('top', (event.y - circleradius) + 'px');

          let screencoordinates = [event.x, event.y] as [number, number];
          this.mapInteractionService.queryCoordinates.next(screencoordinates)
        })
        .on('end', dragended);

      svg.call(dragslistner);

      function dragstarted() {
        let coords = mouse(this);
        svg.append("circle")
          .attr("class", 'circle-follow active-d3-item')
          .style('left', (coords[0] - circleradius) + 'px')
          .style('top', (coords[1] - circleradius) + 'px');
        
      }

      function dragended() {
        selectAll('circle').classed(activeClassName, false);
        selectAll('circle').remove()
      }
    })


  }

}


