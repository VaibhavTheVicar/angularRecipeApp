import {Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ManageIngredientsService} from '../../ManageIngredients.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnChanges, DoCheck {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  // @Output() addIngredient: EventEmitter<Ingredient> = new EventEmitter();

  constructor(private manageIngredeintsService: ManageIngredientsService) {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('onInit called');
  }

  onAddIngredient() {
    console.log('onAddIngredient'+this.nameInputRef.nativeElement.value+parseInt(this.amountInputRef.nativeElement.value));
    if (this.nameInputRef.nativeElement.value && parseInt(this.amountInputRef.nativeElement.value)) {
      this.manageIngredeintsService.addIngredient(new Ingredient(this.nameInputRef.nativeElement.value,
        parseInt(this.amountInputRef.nativeElement.value)));
    }
  }

  onDeleteIngredient() {
    this.manageIngredeintsService.deleteIngredient();
  }

  onClearIngredient() {
    this.manageIngredeintsService.clearIngredient();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('On changes called');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('Do check called');
  }
}
