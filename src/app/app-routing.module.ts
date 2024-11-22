import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpidersComponent } from './spiders/spiders.component';
import { SignUPComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:"spiders", component:SpidersComponent},
  {path:"signup", component:SignUPComponent},
  {path:"", redirectTo:"signup", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
