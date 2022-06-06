import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunitiesComponent } from './communities/communities.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'communities', component: CommunitiesComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
