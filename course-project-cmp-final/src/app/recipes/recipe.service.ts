import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

recipeSelected  = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
        ,[

            new Ingredient('t1',100)
        ]),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
        ,[
            new Ingredient('t2',900)
        ])
      ];


    getRecipes()
    {
        return this.recipes.slice();
    }

    constructor(private shoppingService : ShoppingListService)
    {
    }

    addIngrediantsToShoppingList(ingrediants : Ingredient[])
    {

        this.shoppingService.addIngrediantsFromRecipe(ingrediants);
        
        
        }


  
        

}