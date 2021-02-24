import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FindMissingNumberComponent } from './find-missing-number/find-missing-number.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SystemCommunicationComponent } from './system-communication/system-communication.component';
import { ComponentOneComponent } from './system-communication/component-one/component-one.component';
import { ComponentTwoComponent } from './system-communication/component-two/component-two.component';
import { ComponentThreeComponent } from './system-communication/component-three/component-three.component';
import { ComponentFourComponent } from './system-communication/component-four/component-four.component';
import { ComponentFiveComponent } from './system-communication/component-five/component-five.component';
import { NestedComponentsComponent } from './nested-components/nested-components.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'Question-1', component: FindMissingNumberComponent },
  { path: 'Question-3', component: DynamicFormComponent },
  { path: 'Question-4', component: SystemCommunicationComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FindMissingNumberComponent,
    DynamicFormComponent,
    SystemCommunicationComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    ComponentFourComponent,
    ComponentFiveComponent,
    NestedComponentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
