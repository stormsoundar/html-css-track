import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { DashComponent } from './dash/dash.component';
import { IssueComponent } from './issue/issue.component';
import { IssuesComponent } from './issue/issues/issues.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    DashComponent,
    IssueComponent,
    IssuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
