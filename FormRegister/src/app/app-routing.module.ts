import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterFinalComponent} from './register-final/register-final.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'register', component: RegisterFinalComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
