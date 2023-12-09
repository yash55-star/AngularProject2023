import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  public id : string;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingrediants : Ingredient[];

  constructor(id : string,name: string, desc: string, imagePath: string,ingrediants : Ingredient[]) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingrediants = ingrediants;
  }
}
