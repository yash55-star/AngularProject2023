import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService{
    

   ingrediantChanged = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

      getIngrediants()
      {
          return this.ingredients.slice();
      }
      onIngrediantAdded(ingrediant:Ingredient)
  
             {
            this.ingredients.push(ingrediant);
            this.ingrediantChanged.emit(this.ingredients.slice());
             }

             addIngrediantsFromRecipe(ingrediants: Ingredient[]) {
                this.ingredients.push(...ingrediants);
                this.ingrediantChanged.emit(this.ingredients.slice());
            }

}