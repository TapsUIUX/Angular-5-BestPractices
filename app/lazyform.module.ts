import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Routes, RouterModule } from '@angular/router';
import {  ReactiveFormsModule  } from '@angular/forms';



const routes : Routes =[
  {path: 'lazyform' , component : ReactiveformComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [ ],
  declarations: [ReactiveformComponent]
})
export class LazyformModule { }
