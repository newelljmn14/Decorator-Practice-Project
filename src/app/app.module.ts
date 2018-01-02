import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ValuesDisplayComponent } from './values-display/values-display.component';
import { ListDataFactoryService } from './list-data-factory.service';
import { ListDataServiceService } from './list-data-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ValuesDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ListDataFactoryService, ListDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
