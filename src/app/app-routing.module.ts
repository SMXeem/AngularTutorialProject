import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepertmentComponent } from './depertment/depertment.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/depertments', pathMatch: 'full'},
  { path: 'depertments', component: DepertmentComponent},
  { path: 'employees', component: EmployeeListComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DepertmentComponent, EmployeeListComponent]
