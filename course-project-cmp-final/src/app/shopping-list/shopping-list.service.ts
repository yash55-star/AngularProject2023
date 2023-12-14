import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable()
export class ShoppingListService{
    

   ingrediantChanged = new Subject<Ingredient[]>();
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
            this.ingrediantChanged.next(this.ingredients.slice());
             }

             addIngrediantsFromRecipe(ingrediants: Ingredient[]) {
                this.ingredients.push(...ingrediants);
                this.ingrediantChanged.next(this.ingredients.slice());
            }

}