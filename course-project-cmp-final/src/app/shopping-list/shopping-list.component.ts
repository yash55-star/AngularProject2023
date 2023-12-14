import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy{
  ingredients: Ingredient[] = [
    
  ];
  private ingrediantChangedSubscribe : Subscription;

  constructor(private shoppingListService : ShoppingListService) { 

  }

  ngOnInit() {
    
    this.ingredients = this.shoppingListService.getIngrediants();
    this.ingrediantChangedSubscribe = this.shoppingListService.ingrediantChanged.subscribe(
      
        (ingredients : Ingredient[]) => {
          console.log('ingrediantChanged');
              this.ingredients = ingredients;
        }
    );
  }

  ngOnDestroy(): void {
    this.ingrediantChangedSubscribe.unsubscribe();
  }

  // onIngrediantAdded(ingrediant:Ingredient)
  
  // {
  //   this.ingredients.push(ingrediant);
  // }

}
