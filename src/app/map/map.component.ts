import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import mapstyle from '../../assets/mapstyle.json';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  let map = new mapboxgl.Map({
    container: 'map',
    style: mapstyle,
    hash: true,
    zoom: 14.5,
    pitch: 0,
    bearing: -15.7,
    center: [5.24574, 51.81254],
    attributionControl:false
  });

  }

}


