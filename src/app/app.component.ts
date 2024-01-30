import {Component} from '@angular/core';
import {ManageIngredientsService} from './ManageIngredients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ManageIngredientsService]
})
export class AppComponent {
  showRecipes = true;
}
