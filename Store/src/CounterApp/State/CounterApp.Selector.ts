import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICounterState } from "./CounterApp.State";

export const COUNTER_STORE_STATE = 'counter';
const getCounterState = createFeatureSelector<ICounterState>('counter');

export const getCounter = createSelector(getCounterState, (state: ICounterState) => {
        return state.counter;
    });