import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { WallstreetComponent } from './wallstreet/wallstreet.component';


const routes: Routes = [

{ path: 'topheading', component:TopheadingComponent }, //home
{ path: 'wallstreet', component:WallstreetComponent }, //wall street
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
