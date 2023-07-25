import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
//import { InputComponent } from './input/input.component';
//import { DropdownComponent } from './dropdown/dropdown.component';
import { FilterPipe } from './list/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    //InputComponent,
    //DropdownComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
