import { Component, OnInit, Input } from '@angular/core';
import { TaskServiceService } from '../../task-service.service';
import { Task } from '../../interface/task.interface';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss'],
  standalone: false,
})
export class TareaComponent implements OnInit {
  @Input() task!: Task;
  isEditing = false; // Variable para controlar la edición

  constructor(private taskService: TaskServiceService) {}

  ngOnInit() {}

  toggleTaskCompletion(event: any) {
    this.task.done = event.detail.checked;
    this.updateDoneTask(this.task);
  }

  async deleteTask(task: Task) {
    await this.taskService.deleteTask(task);
  }

  async updateTask(task: Task) {
    try {
      await this.taskService.editTaskContent(task);
      alert('Tarea actualizada correctamente');
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
    }
  }

  async updateDoneTask(task: Task) {
      await this.taskService.updateTask(task);
      alert('Tarea actualizada correctamente');

  }

  toggleEditMode() {
    this.isEditing = !this.isEditing;
  }

}
