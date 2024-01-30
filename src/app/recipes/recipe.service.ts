import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ManageIngredientsService} from '../ManageIngredients.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] =
    [new Recipe(
      'Spaghetti Bolognese',
      'Classic Italian spaghetti with a rich and flavorful meat sauce.',
      'data:image/jpeg;base64,/9j/4AAQ' +
      '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' +
      'AdAUKFA0KWl0KFAB0KFCmB//Z',
      [new Ingredient('ground lamb', 250), new Ingredient('onion', 1), new Ingredient('garlic cloves', 2)]),
      new Recipe(
        'Chicken Alfredo',
        'Creamy Alfredo sauce with grilled chicken served over fettuccine pasta.',
        'data:image/jpeg;base64,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',
        [new Ingredient('chicken breasts', 2), new Ingredient('fettuccine pasta', 200), new Ingredient('heavy cream', 1)]),
      new Recipe(
        'Vegetarian Stir Fry',
        'A quick and healthy stir-fry with a variety of colorful vegetables.',
        'data:image/jpeg;base64,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' +
        'GYzGY9NT//2Q==',
        [new Ingredient('broccoli', 1), new Ingredient('bell pepper', 1), new Ingredient('carrot', 1)])
    ];

  getRecipe() {
    return this.recipes.slice();
  }

  constructor(private manageIngredientsService: ManageIngredientsService) {
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.manageIngredientsService.addIngredientsToShoppingList(ingredients);
  }


}
