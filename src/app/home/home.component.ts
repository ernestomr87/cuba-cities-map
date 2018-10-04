import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	showMenu = true;
	item: string = null;

	constructor() {}

	ngOnInit() {}

	selectMenu(item: string) {
		this.showMenu = false;
		this.item = item;
	}

	MainMenu() {
		return {
			'scale-transition': true,
			'scale-out': !this.showMenu,
			'scale-in': this.showMenu,
			visibility: 'hidden',
		};
	}

	ButtonsMenu() {
		return {
			'scale-transition': true,
			'scale-out': this.showMenu,
			'scale-in': !this.showMenu,
			visibility: 'visible'
		};
	}

	selectBack() {
		this.showMenu = true;
		this.item = null;
	}
}
