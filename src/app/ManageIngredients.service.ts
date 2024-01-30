import {Ingredient} from './shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ManageIngredientsService {

  private ingredients: Ingredient[] = [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)];

  ingredeintsChanged = new EventEmitter<Ingredient[]>();

  constructor() {
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredeintsChanged.emit(this.ingredients.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredeintsChanged.emit(this.ingredients.slice());
  }

  deleteIngredient() {
    this.ingredients.pop();
    this.ingredeintsChanged.emit(this.ingredients.slice());
  }

  clearIngredient() {
    while (this.ingredients.length !== 0) {
      this.ingredients.pop();
    }
    this.ingredeintsChanged.emit(this.ingredients.slice());
  }

  getIngredientsByValue() {
    return this.ingredients.slice();
  }
}
