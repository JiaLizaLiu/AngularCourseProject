import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() addIngredient = new EventEmitter<Ingredient>();
  @ViewChild('nameInput', {static:false}) nameInputRef:ElementRef;
  @ViewChild('amountInput', {static:false}) amountInputRef:ElementRef;
  constructor() {}

  ngOnInit(): void {}
  onAddIngredient() {
    const inputname=this.nameInputRef.nativeElement.value;
    const amountInput=this.amountInputRef.nativeElement.value;
    const newIngredient= new Ingredient(inputname, amountInput)
    this.addIngredient.emit(newIngredient);
  }
}
