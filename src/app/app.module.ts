import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { HousesComponent } from './houses/houses.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		BooksComponent,
		CharactersComponent,
		HousesComponent,
		HomeComponent
	],
	imports: [ BrowserModule, BrowserAnimationsModule, AppRoutingModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
