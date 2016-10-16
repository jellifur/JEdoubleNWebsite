import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { DropdownModule } from 'ng2-bootstrap';

import { AppComponent }   from './app.component';

@NgModule({
  imports: [ 
    BrowserModule,
    DropdownModule,

    /*RouterModule.forRoot([
      { path: '', component: AppComponent }
    ])*/

  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }