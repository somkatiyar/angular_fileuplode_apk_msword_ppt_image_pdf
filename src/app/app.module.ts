import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';

import { RouterModule, Routes}  from '@angular/router';
import { DataService }  from '../service/service';
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileLode } from '../pages/filelode/filelode';
import { ShowFile } from '../pages/showfile/showfile';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';








// import { MatFormFieldModule } from '@angular/material/form-field';







const appRoutes: Routes = [
    { path : '',component : FileLode},
  { path : 'filelode',component : FileLode},
  { path : 'showfile',component : ShowFile},




];

const baseURL = 'http://localhost:9000/api/';
const file_load = 'http://localhost:9000/file/';

@NgModule({
  declarations: [
    AppComponent,


    FileLode,
    ShowFile

  ],
  imports: [

    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatSelectModule,






    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService , { provide: 'baseURL', useValue: baseURL },{ provide: "file_load", useValue: file_load }],
  bootstrap: [AppComponent]
})
export class AppModule { }
