import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './component/formulario/formulario.component';
import { TareaComponent } from './component/tarea/tarea.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [FormularioComponent, TareaComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [FormularioComponent, TareaComponent]
})
export class TaskModule { }
