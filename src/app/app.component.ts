import { Component, OnInit } from '@angular/core';
import { icon, latLng, tileLayer, marker, popup } from 'leaflet';
import { CITIES } from './mock-city';

import { CityService } from './city.service';

const baseLayer = [ tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png') ];
const center = latLng(21.5167872, -79.5891141);
const zoom = 6;

const template = (item) => {
	return `
  <div class="ant-card  ant-card-hoverable">
    <div class="ant-card-cover ng-star-inserted">
      <img style="border-radius: 11px;" alt=" ${item.full_name}" src="${item.imageUrl}" class="ng-star-inserted">
    </div>
    <div  class="ant-card-body">
      <div class="ant-card-meta ng-star-inserted">
        <div class="ant-card-meta-detail ng-star-inserted">
          <div class="ant-card-meta-title ng-star-inserted">
            <div class="ant-card-meta-description ng-star-inserted">
            ${item.full_name}
            </div>
          </div>
        </div>
    </div>
  </div>
  `;
};

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
	cities: any[] = CITIES;
	markers: any[] = [];

	isVisible = false;

	options = {
		layers: baseLayer,
		zoom: zoom,
		center: center
	};

	constructor(private cityService: CityService) {}

	ngOnInit(): void {
		this.createMarkers();
	}

	createMarkers = () => {
		this.cities.map((item) => {
			this.cityService.getCity(item.geonameId).subscribe((city) => {
				item['location'] = city.location;
				item['full_name'] = city.full_name;
				const mark = marker([ item.location.latlon.latitude, item.location.latlon.longitude ], {
					icon: icon({
						iconSize: [ 25, 41 ],
						iconAnchor: [ 13, 41 ],
						iconUrl: './assets/images/pin.svg'
						// shadowUrl: 'leaflet/marker-shadow.png'
					}),
					title: item.name
				}).bindPopup(() => {
					return template(item);
				});
				this.markers.push(mark);
			});
		});
	};

	showPopup(item): void {
		console.log(item);
	}
}
