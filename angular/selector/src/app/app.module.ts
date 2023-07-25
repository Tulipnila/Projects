import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ViewComponent,
    ListComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
