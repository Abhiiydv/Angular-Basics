import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserformComponent } from './Component/userform/userform.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path:'userForm',component:UserformComponent},{path:'aboutUs',component:AboutUsComponent}
         ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
