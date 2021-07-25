import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisplayEnumPipe } from './pipes/display-type.pipe';
import { QuestionManagmentComponent } from './components/questions/managment/question-managment.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material.module';
import { LeftMenuComponent } from './components/shared/left-menu/left-menu.component';
import { AnswerDialogComponent } from './components/dialogs/answer/answer-dialog.component';
import { QuestionEditComponent } from './components/questions/edit/question-edit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrimeNgModule } from './modules/primeng.module';


const componets = [AppComponent, QuestionManagmentComponent, LeftMenuComponent, AnswerDialogComponent, QuestionEditComponent]
const pipes = [DisplayEnumPipe]
const modules = [ BrowserModule, FormsModule, BrowserAnimationsModule, AppRoutingModule,  AngularMaterialModule, FontAwesomeModule, PrimeNgModule, NgbModule]
@NgModule({
  declarations: [
    ...componets,
    ...pipes
  ],
  imports: [
    ...modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
