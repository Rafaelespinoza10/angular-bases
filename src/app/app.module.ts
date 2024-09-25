import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { CounterModule } from './counter/counter.module';
import { AppRoutingModule } from './app-routing.module';
import { DbzModule } from './dbz/dbz.module';
// import { ComponentsModule } from './dbz/components/components.module';
// import { HeroModules } from './heroes/hero.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CounterModule,
    // HeroModules,
    DbzModule,
    // ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
