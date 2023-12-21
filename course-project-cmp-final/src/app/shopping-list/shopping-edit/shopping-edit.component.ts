import {
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInputRef : ElementRef;
  // @ViewChild('amountInput') amountInputRef : ElementRef;

  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode: boolean;
  editItemIndex: number;
  editItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.editItem = this.shoppingListService.getIngrediant(
          this.editItemIndex
        );
        this.slForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount,
        });
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const name = value.name;
    const amount = value.amount;
    const ingrediant = new Ingredient(name, amount);
    if (this.editMode) {
      this.shoppingListService.updateIngrediant(this.editItemIndex, ingrediant);
    } else {
      this.shoppingListService.onIngrediantAdded(ingrediant);
    }
    this.editMode = false;
    form.reset();
  }

  onClear()
  {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete()
  {
    this.shoppingListService.deleteIngrediant(this.editItemIndex);
    this.onClear();

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // addShoppingItem()
  // {
  //   const name = this.nameInputRef.nativeElement.value;
  //   const amount = this.amountInputRef.nativeElement.value;
  //     const ingrediant = new Ingredient(name,amount);

  //     this.shoppingListService.onIngrediantAdded(ingrediant);

  //   }
}
