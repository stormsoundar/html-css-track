import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DashComponent } from './dash/dash.component';
import { IssueComponent } from './issue/issue.component';
import { IssuesComponent } from './issue/issues/issues.component';

const routes: Routes = [
  { path: '', component: DashComponent },
  { path: 'create', component: CreateComponent },
  { path: 'issue', component: IssueComponent },
  { path: 'issue/issues', component: IssuesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
