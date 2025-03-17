import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskServiceService } from '../../task-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
  standalone:false,
})
export class FormularioComponent implements OnInit {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskServiceService) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      date: ['', Validators.required],
      done: [false]
    });
  }

  async submitForm() {
    if (this.taskForm.valid) {
      await this.taskService.addTask(this.taskForm.value);
      
      alert('¡Tarea guardada correctamente!');
      
      this.taskForm.reset({
        title: '',
        description: '',
        date: '',
        done: false
      });
    }
  }

  ngOnInit() {}
}
