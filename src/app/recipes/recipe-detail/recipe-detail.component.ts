import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ManageIngredientsService} from '../../ManageIngredients.service';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  expandedRecipe: Recipe;



  constructor(private manageIngredientsService: ManageIngredientsService, private recipeService:RecipeService) {
  }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe) => {
      console.log('ebvent');
      this.expandedRecipe = recipe;
    });
  }

}
