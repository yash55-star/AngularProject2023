import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{


  @Output() featureSelected = new EventEmitter<string>();
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  constructor(private dataStorageService : DataStorageService)
  {

  }

  onSelect(feature:string)
  {
    this.featureSelected.emit(feature);
  }

  onSaveData()
  {
        this.dataStorageService.storeRecipes();
  }

  fetchData()
  {
    this.dataStorageService.fetchRecipes();
  }

}
