import { Injectable } from "@angular/core";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { AuthService } from "src/services/auth.service";
import { loginRequestAction, loginSuccessAction } from "./auth.actions";

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService){        
    }

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginRequestAction),
            exhaustMap(action => {
                return this.authService.login(action.email, action.password).pipe(
                    map(data => {
                        return loginSuccessAction()
                    })
                )
            })
        )
    });
}
