import { createAction, props } from "@ngrx/store";

export const incrementAction = createAction('increment');
export const decrementAction = createAction('decrement');
export const resetAction = createAction('reset');
export const addToCounterAction = createAction('customerIncrement',
props<{inputValue: number}>());