import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRadioModule} from '@angular/material';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        RegistrationFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatRadioModule,
        MatCheckboxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
