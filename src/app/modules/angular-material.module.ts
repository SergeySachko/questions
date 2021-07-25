import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

const modules = [
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule
]
@NgModule({
    imports: [...modules],
    exports: [...modules],
    declarations: [],
    providers: [],
})
export class AngularMaterialModule { }
