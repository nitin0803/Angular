import { createReducer } from "@ngrx/store";
import { IAuthState, initialAuthState } from "./auth.state";

export function authReducer(state: IAuthState, action: any){
    return _authReducer(state, action);
}

const _authReducer = createReducer(initialAuthState);