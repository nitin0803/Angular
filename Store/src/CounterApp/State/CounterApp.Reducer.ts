import { createReducer, on } from "@ngrx/store";
import { addToCounterAction, decrementAction, incrementAction, resetAction } from "./CounterApp.Actions";
import { initialCounterState } from "./CounterApp.State";


const _counterReducer = createReducer(
    initialCounterState,
    on(incrementAction, (state) => {
        return {
            ...state,
            counter: state.counter+1,
        };
    }),
    on(decrementAction, (state) => {
        return {
            ...state,
            counter: state.counter-1,
        }
    }),
    on(resetAction, (state) => {
        return {
            ...state,
            counter: 0,
        }
    }),
    on(addToCounterAction, (state, action) => {
        return {
            ...state,
            counter: state.counter + +action.inputValue
        }
    })
)


export function counterReducer(state: any, action: any){
    return _counterReducer(state, action);
}