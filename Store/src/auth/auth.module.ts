import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { LoginComponent } from "./login/login.component";
import { AuthEffects } from "./state/auth.effects";
import { authReducer } from "./state/auth.reducer";
import { AUTH_STORE_STATE } from "./state/auth.selector";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full' 
    },
    {
        path: 'login',
        component: LoginComponent
    }
]

@NgModule({
    declarations: [LoginComponent],    
    imports: [
        ReactiveFormsModule,
        EffectsModule.forFeature([AuthEffects]),
        RouterModule.forChild(routes),
        StoreModule.forFeature(AUTH_STORE_STATE, authReducer)
    ]
})
export class AuthModule{

}