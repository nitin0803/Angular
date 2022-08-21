import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { loginRequestAction } from "../state/auth.actions";
import { IAuthState } from "../state/auth.state";

@Component({
    selector: 'app-login',
    templateUrl: './login.view.html'
})
export class LoginComponent {
    loginForm: FormGroup;
    constructor(private store: Store<IAuthState>) {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required])
        })
    }

    OnSubmit() {
        this.store.dispatch(loginRequestAction({
            email: this.loginForm.value.email, 
            password: this.loginForm.value.password
        }));
    }    

    showEmailError(){
        const emailFormControl = this.loginForm.get('email');

        if(emailFormControl?.touched && !emailFormControl.valid)
        {
            if(emailFormControl.errors?.['required'])
            {
                return "Email is required field!";
            }
            if(emailFormControl.errors?.['email'])
            {
                return "Email should be in correct format!";
            }
        }
        return null;
    }

    showPasswordError()
    {
        const passwordControl = this.loginForm.get('password');
        if(passwordControl?.touched && !passwordControl.valid)
        {
            if(passwordControl.errors?.['required']){
                return "Password is required field!";
            }
        }
        return null;
    }

}