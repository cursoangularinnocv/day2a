import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestEventsComponent } from './test-events/test-events.component';
import { TestBracketsComponent } from './test-brackets/test-brackets.component';
import { TestFormComponent } from './test-form/test-form.component';
import { SliderComponent } from './slider/slider.component';
import { PipesComponent } from './pipes/pipes.component';
import { AlternatecasesPipe } from './alternatecases.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestEventsComponent,
    TestBracketsComponent,
    TestFormComponent,
    SliderComponent,
    PipesComponent,
    AlternatecasesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
