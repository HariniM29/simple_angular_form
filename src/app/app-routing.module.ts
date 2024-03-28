import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

const routes: Routes = [{ path: 'form', component: FormComponent },
// Add more routes as needed
{ path: '', redirectTo: '/form', pathMatch: 'full' } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
