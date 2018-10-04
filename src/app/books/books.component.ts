import { Component, OnInit } from '@angular/core';

import { BooksService } from './books.service';

@Component({
	selector: 'app-books',
	templateUrl: './books.component.html',
	styleUrls: [ './books.component.css' ]
})
export class BooksComponent implements OnInit {
	books: any[];
	fetching: false;

	constructor(private booksService: BooksService) {}

	ngOnInit() {
		this.fetching = true;
		this.getBooks();
	}

	getBooks(): void {
		this.booksService.getBooks().subscribe((books) => ((this.books = books), (this.fetching = false)));
	}
}
