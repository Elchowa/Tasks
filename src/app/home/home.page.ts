import { Component } from '@angular/core';
import { TaskServiceService } from '../task/task-service.service';
import { Task } from '../task/interface/task.interface';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  tasks:Task[]=[];

  constructor(private taskService:TaskServiceService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe( tasks => {
      this.tasks = tasks;
      console.log(this.tasks);
    })
  }
}
