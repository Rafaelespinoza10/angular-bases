import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  MainPageComponent } from './pages/main-pages.component';
import { FigthersComponent } from './components/figthers/figthers.component';
import { FormsComponent } from './components/forms/forms.component';
// import { ComponentsComponent } from './components/components.component';

@NgModule({
  exports:[
    MainPageComponent,
    FigthersComponent,
    FormsComponent,
  ],
  declarations: [
    MainPageComponent,
    FigthersComponent,
    FormsComponent,
    // ComponentsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})

export class DbzModule { }
  