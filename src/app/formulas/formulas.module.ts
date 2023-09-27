import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { FormulasListComponent } from './formulas-list/formulas-list.component';
import { FormulasDetailComponent } from './formulas-detail/formulas-detail.component';
import { FormulasRoutingModule } from './formulas-routing.module';
import { FormulasAgregarComponent } from './formulas-agregar/formulas-agregar.component';

@NgModule({
  imports: [
    CommonModule,
    FormulasRoutingModule
  ],
  declarations: [
    AddMedicineComponent,
    FormulasAgregarComponent,
    FormulasDetailComponent,
    FormulasListComponent,

  ],
  exports:[
    AddMedicineComponent,
    FormulasAgregarComponent,
    FormulasListComponent,
    FormulasDetailComponent
  ]
})
export class FormulasModule { }
