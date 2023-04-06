import {
  TuiButtonModule,
  TuiDialogModule,
  TuiLoaderModule,
  TuiRootModule,
  TuiTextfieldControllerModule
} from "@taiga-ui/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TuiInputModule} from "@taiga-ui/kit";
import {TuiInputCardGroupedModule} from "@taiga-ui/addon-commerce";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TuiRootModule,
    TuiDialogModule,

    TuiButtonModule,
    TuiLoaderModule,

    TuiInputModule,
    TuiInputCardGroupedModule,
    TuiTextfieldControllerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
