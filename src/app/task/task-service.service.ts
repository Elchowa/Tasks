import { Injectable } from '@angular/core';
import { collection, Firestore, addDoc, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Task } from './interface/task.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private fireStore: Firestore) { }

  addTask(task: Task) {
    const taskRef = collection(this.fireStore, 'tarea');
    return addDoc(taskRef, task);
  }
  
  deleteTask(task: Task){
    const taskRef = doc(this.fireStore, `tarea/${task.id}`);
    return deleteDoc(taskRef);
  }

  updateTask(task: Task){
    const taskRef = doc(this.fireStore, `tarea/${task.id}`);
    return updateDoc(taskRef, { done: task.done });
  }

  getTasks():Observable<Task[]>{
    const taskRef = collection(this.fireStore, 'tarea');
    return collectionData(taskRef, {idField: 'id'}) as Observable<Task[]>;
  }

  editTaskContent(task: Task){
    const taskRef = doc(this.fireStore, `tarea/${task.id}`);
    return updateDoc(taskRef, { ...task });
  }
  

}
