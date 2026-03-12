import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  imports: [RouterOutlet],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {

  map: L.Map | undefined;

  ngOnInit(): void {
    this.inicializarMapa();
  }

  inicializarMapa(): void {
    // Crear mapa centrado en una ubicación
    this.map = L.map('map').setView([40.4168, -3.7038], 13); // Madrid

    // Agregar tiles de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(this.map);

    // Agregar marcador
    L.marker([40.4168, -3.7038])
      .bindPopup('¡Estoy aquí en Madrid!')
      .addTo(this.map)
      .openPopup();
  }

}
