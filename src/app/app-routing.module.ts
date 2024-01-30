import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';

const appRoutes: Routes = [{
  path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent}
  ]
},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: '', redirectTo: 'recipes', pathMatch: 'full'}];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
