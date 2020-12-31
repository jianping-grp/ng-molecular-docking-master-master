import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineDockingComponent } from './online-docking/online-docking.component';
import {SharedModule} from '../../../shared/shared.module';
import { DockingDocumentComponent } from './docking-document/docking-document.component';
import { DockingIntroductionComponent } from './docking-introduction/docking-introduction.component';
import {DockingRoutingModule} from './docking-routing.module';
import { DockingLibraryIntroductionComponent } from './docking-library-introduction/docking-library-introduction.component';
import { DockingPlatformIntroductionComponent } from './docking-platform-introduction/docking-platform-introduction.component';
import {DockingHomeComponent} from './docking-home/docking-home.component';
import {OnlineDocking2Component} from './online-docking2/online-docking2.component';
import{OnlineScreeningComponent} from '../screening/online-screening/online-screening.component';
import{OnlineScreening2Component} from '../screening/online-screening2/online-screening2.component'
import { JsmeModule} from '../../../jsme/jsme.module';
import { OnlineDocking3Component } from './online-docking3/online-docking3.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DockingRoutingModule,
    JsmeModule
  ],
  declarations: [
    OnlineDockingComponent,
    DockingDocumentComponent,
    DockingHomeComponent,
    DockingIntroductionComponent,
    DockingLibraryIntroductionComponent,
    DockingPlatformIntroductionComponent,
    OnlineDocking2Component,
    OnlineScreeningComponent,
    OnlineScreening2Component,
    OnlineDocking3Component
  ]
})
export class DockingModule {

}
