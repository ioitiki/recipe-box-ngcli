import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  recipes: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.recipes = af.database.list('/recipes');
  }

  selectedRecipe = null;

  displayDetails(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  hideDetails() {
    this.selectedRecipe = null;
  }
}

export class Recipe {
  constructor(public title: string, public author: string, public description: string, public ingredients: string[], public instructions: string[]) {}
}
