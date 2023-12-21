import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http : HttpClient,private recipeService : RecipeService) { 
    
  }


  storeRecipes()
  {
    const recipes = this.recipeService.getRecipes();
   return this.http.put('https://angularcourseproject2023-default-rtdb.firebaseio.com/recipes.json',recipes).subscribe();
  }

  fetchRecipes()
  {
    this.http.get<Recipe[]>('https://angularcourseproject2023-default-rtdb.firebaseio.com/recipes.json').subscribe(
      recipes => {
        console.log(recipes);
          this.recipeService.setRecipes(recipes);
      }
    );
  }
}
