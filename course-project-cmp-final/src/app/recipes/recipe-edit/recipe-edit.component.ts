import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css',
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router:Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      console.log(this.editMode);
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let imagePath = '';
    let recipeIngrediants = new FormArray([]);
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      imagePath=recipe.imagePath;
      if(recipe['ingrediants']) 
      {
        for(let ingridiant of recipe.ingrediants)
        {
          console.log(ingridiant);
          recipeIngrediants.push(new FormGroup(
            {
              'name' : new FormControl(ingridiant.name),
              'amount' : new FormControl(ingridiant.amount)
            }
          ));
        }
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imagePath: new FormControl(imagePath),
      ingredients :  recipeIngrediants
    });
  }

  onSubmit()
  {
    console.log(this.recipeForm);
    const recipe = new Recipe('3',this.recipeForm.value['name'],"",
    this.recipeForm.value['imagePath'],
    this.recipeForm.value['ingredients'])
    if(this.editMode)
    {
      this.recipeService.updateRecipe(this.id,this.recipeForm.value);
    }
    else{
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngrediant()
  {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup(
        {
          'name' : new FormControl(),
          'amount' : new FormControl()
        }
      )
    );
  }

  onDeleteIngrediant(index:number)
  {
    console.log(index);
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel()
  {
      this.router.navigate(['../'],{relativeTo:this.route});
  }
}
