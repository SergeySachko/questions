import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionEditComponent } from './components/questions/edit/question-edit.component';
import { QuestionManagmentComponent } from './components/questions/managment/question-managment.component';

const routes: Routes = [
  { path: '', component: QuestionManagmentComponent},
  { path: 'management', component: QuestionManagmentComponent },
  { path: 'edit', component: QuestionEditComponent },
  { path: 'edit/:id', component: QuestionEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
