import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path:"data",
    loadChildren:()=>import('./updates/update.module').then(m=>m.UpdateModule)
  },
  {
    path:"404",
    component:NotFoundComponent
  },
  {
    path:"",
    redirectTo:"data",
    pathMatch:"full"
  },
  {
    path:"**",
    redirectTo:"404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
