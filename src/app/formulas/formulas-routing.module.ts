import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulasListComponent } from './formulas-list/formulas-list.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { FormulasAgregarComponent } from './formulas-agregar/formulas-agregar.component';

const routes: Routes = [
  {path:'formulas-lista', component:FormulasListComponent},
  {path:'formulas-agregar', component:FormulasAgregarComponent},
  {path:'agregar-medicina', component:AddMedicineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class FormulasRoutingModule { }
