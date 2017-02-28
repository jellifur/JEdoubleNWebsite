import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { DropdownModule } from 'ng2-bootstrap';

import { AppComponent }   from './app.component';
import { AboutMeComponent }   from './aboutme.component';
import { PetOwnerComponent }   from './petowner.component';

@NgModule({
  imports: [ 
    BrowserModule,
    DropdownModule,

    RouterModule.forRoot([
      { path: 'pet-owner', component: PetOwnerComponent },
      { path: '', component: AboutMeComponent }
    ])

  ],

  declarations: [ 
    AppComponent,
    AboutMeComponent,
    PetOwnerComponent
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }