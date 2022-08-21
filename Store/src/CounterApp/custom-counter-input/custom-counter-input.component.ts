import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCounterAction } from '../State/CounterApp.Actions';
import { ICounterState } from '../State/CounterApp.State';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html'
})
export class CustomCounterInputComponent implements OnInit {

  value: number = 0;
  constructor(private store: Store<{data: ICounterState}>) { 
    
  }

  ngOnInit(): void {
  }

  AddToCounter(): void {
    this.store.dispatch(addToCounterAction({inputValue: this.value}));
  }
}
