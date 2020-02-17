import { Component, OnInit } from '@angular/core';

import {select, drag, selectAll, mouse, event} from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blind-spot';
  
  ngOnInit() {
    let activeClassName = 'active-d3-item';
    let circleradius = 50;
    let svg = select('body').select('#frontcover').attr('class','fullsize');

    let dragslistner = drag()
      .on('start', dragstarted)  
      .on('drag', dragging)
      .on('end', dragended);

    svg.call(dragslistner);

    function dragstarted() {
      let coords = mouse(this);
      svg.append("circle")
        .attr("class",'circle-follow active-d3-item')
        .style('left', (coords[0]-circleradius) + 'px')
        .style('top', (coords[1] -circleradius)+ 'px');
    }

    function dragended() {
      selectAll('circle').classed(activeClassName, false);
      selectAll('circle').remove()
    }

    function dragging(){
      selectAll("circle")
        .style('left', (event.x -circleradius) + 'px')
        .style('top', (event.y -circleradius )+ 'px');

        let screencoordinates = [ event.x, event.y];
        // console.log(screencoordinates)

    }


  }

  public test() {
    
    console.log(speechSynthesis.getVoices());
    speechSynthesis.speak(new SpeechSynthesisUtterance("Hello, this is your browser speaking."));
  }
}
