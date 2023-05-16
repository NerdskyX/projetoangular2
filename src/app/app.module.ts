import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';



import { AngularFireModule } from '@angular/fire/compat';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { environment } from '../environment';
import { ListContatoComponent } from './contato/list-contato/list-contato.component';
import { EditContatoComponent } from './contato/edit-contato/edit-contato.component';
import { AddContatoComponent } from './contato/add-contato/add-contato.component';
import { AppRoutingModule } from 'src/app-routing.module';



@NgModule({

  declarations: [

    AppComponent,
      ListContatoComponent,
      EditContatoComponent,
      AddContatoComponent

  ],

  imports: [

    BrowserModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),

    AngularFireDatabaseModule,

    AppRoutingModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }

