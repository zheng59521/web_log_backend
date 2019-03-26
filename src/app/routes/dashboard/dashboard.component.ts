import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
declare let L;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  map: any;
  constructor(
    private http: _HttpClient
  ) { }

  ngOnInit() {
    this.map = L.map('map').setView([36.6683, 116.9972], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([36.6683, 116.9972]).addTo(this.map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
  }

}
