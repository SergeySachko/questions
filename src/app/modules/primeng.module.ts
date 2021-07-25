import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import {RadioButtonModule} from 'primeng/radiobutton';

const modules = [
    TableModule, InputTextModule, ButtonModule, RippleModule, RadioButtonModule
]
@NgModule({
    imports: [...modules],
    exports: [...modules],
    declarations: [],
    providers: [],
})
export class PrimeNgModule { }
