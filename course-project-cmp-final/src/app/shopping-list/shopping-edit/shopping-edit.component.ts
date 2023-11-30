import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
  @Output() ingrediantAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addShoppingItem()
  {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
      const ingrediant = new Ingredient(name,amount);
      this.ingrediantAdded.emit(ingrediant);
  
    }

}
