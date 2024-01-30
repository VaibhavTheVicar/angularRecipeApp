import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ManageIngredientsService} from '../ManageIngredients.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  newChildBoundProperty = 0;

  ingredients: Ingredient[];

  constructor(private manageIngredeintsService: ManageIngredientsService) {
  }

  ngOnInit() {
    this.manageIngredeintsService.ingredeintsChanged.subscribe(ingredientsArrayByValue => {
      this.ingredients = ingredientsArrayByValue;
    });
  }

}
