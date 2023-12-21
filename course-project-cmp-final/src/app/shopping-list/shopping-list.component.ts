import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    
  ];

  constructor(private shoppingListService : ShoppingListService) { 

  }

  ngOnInit() {
    
    this.ingredients = this.shoppingListService.getIngrediants();
    this.shoppingListService.ingrediantChanged.subscribe(
      
        (ingredients : Ingredient[]) => {
          console.log('ingrediantChanged');
              this.ingredients = ingredients;
        }
    );
  }

  // onIngrediantAdded(ingrediant:Ingredient)
  
  // {
  //   this.ingredients.push(ingrediant);
  // }

  onEditListItem(index:number)
  {

    this.shoppingListService.startedEditing.next(index);
    }

}
