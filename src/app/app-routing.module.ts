import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragonCreateComponent } from './components/dragon/dragon-create/dragon-create.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "login",
  component: LoginComponent
},
{
  path: "dragon/create",
  component: DragonCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
