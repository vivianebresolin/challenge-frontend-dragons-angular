import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragonCreateComponent } from './components/dragon/dragon-create/dragon-create.component';
import { DragonReadByIdComponent } from './components/dragon/dragon-read-by-id/dragon-read-by-id.component';
import { DragonUpdateComponent } from './components/dragon/dragon-update/dragon-update.component';
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
},
{
  path: "dragon/:id",
  component: DragonReadByIdComponent
},
{
  path: "dragon/update/:id",
  component: DragonUpdateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
