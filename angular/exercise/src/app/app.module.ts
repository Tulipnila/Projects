import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnewayComponent } from './oneway/oneway.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { SampleComponent } from './sample/sample.component';
import { ManualComponent} from './manual/manual.component';

@NgModule({
  declarations: [
    AppComponent,
    OnewayComponent,
    FormComponent,
    ListComponent,
    ViewComponent,
    SampleComponent,
    ManualComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
