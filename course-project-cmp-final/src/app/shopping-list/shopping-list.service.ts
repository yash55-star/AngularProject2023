
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService {
  ingrediantChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  //  ingrediantChanged = new EventEmitter<Ingredient[]>();
  //   ingredients: Ingredient[] = [
  //       new Ingredient('Apples', 5),
  //       new Ingredient('Tomatoes', 10),
  //     ];

      // getIngrediants()
      // {
      //     return this.ingredients.slice();
      // }
      // onIngrediantAdded(ingrediant:Ingredient)
  
      //        {
      //       this.ingredients.push(ingrediant);
      //       this.ingrediantChanged.emit(this.ingredients.slice());
      //        }

      //        addIngrediantsFromRecipe(ingrediants: Ingredient[]) {
      //           this.ingredients.push(...ingrediants);
      //           this.ingrediantChanged.emit(this.ingredients.slice());
      //       }
  getIngrediants() {
    return this.ingredients.slice();
  }

  getIngrediant(index: number) {
    return this.ingredients[index];
  }

  updateIngrediant(index: number, newIngrediant: Ingredient) {
    this.ingredients[index] = newIngrediant;
    this.ingrediantChanged.next(this.ingredients.slice());
  }
  onIngrediantAdded(ingrediant: Ingredient) {
    this.ingredients.push(ingrediant);
    this.ingrediantChanged.next(this.ingredients.slice());
  }

  addIngrediantsFromRecipe(ingrediants: Ingredient[]) {
    this.ingredients.push(...ingrediants);
    this.ingrediantChanged.next(this.ingredients.slice());
  }

  deleteIngrediant(index:number)
  {
    this.ingredients.splice(index,1);
    this.ingrediantChanged.next(this.ingredients.slice());
  }
}
