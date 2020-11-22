import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentService } from './department.service';
import { DepertmentComponent } from './depertment/depertment.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/depertments', pathMatch: 'full'},
  { path: 'depertments', component: DepertmentComponent},
  { 
    path: 'depertments/:id', 
    component: DepartmentDetailsComponent,
    children: [
      {path: 'overview',component:DepartmentOverviewComponent},
      {path: 'contact',component:DepartmentContactComponent}
    ]
  },
  { path: 'employees', component: EmployeeListComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=
[
  DepertmentComponent, 
  EmployeeListComponent,
  DepartmentContactComponent,
  DepartmentOverviewComponent
]
