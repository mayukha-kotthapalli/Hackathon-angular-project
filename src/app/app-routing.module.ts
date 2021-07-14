import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubComponent } from './sub/sub.component';
import { Sub3Component } from './sub3/sub3.component';
import { Sub4Component } from './sub4/sub4.component';
import { Sub5Component } from './sub5/sub5.component';

const routes: Routes = [{path:'',component:SubComponent},{path:'sub3',component:Sub3Component},
{path:'sub4',component:Sub4Component},{path:'sub5',component:Sub5Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
