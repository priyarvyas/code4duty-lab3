import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TASKSA, TASKSB } from '../mock-tasks';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  newTask: Task = {
    id: null,
    name: '',
    completed: false
  };
  tasks = TASKSA;
  doneTasks = TASKSB;

  constructor() { }

  ngOnInit() {
  }

  addTask(): void {
    var task = new Task();
    task.id = this.tasks.length + 1;
    task.name = this.newTask.name;
    task.completed = this.newTask.completed;
    this.tasks.push(task);
    this.newTask.name = '';
  }

  taskComplete(task: Task): void {
    task.completed = true;
    this.tasks = this.tasks.filter(obj => obj !== task);
    this.doneTasks.push(task);
  }

  taskUndo(task: Task): void {
    task.completed = false;
    this.doneTasks = this.doneTasks.filter(obj => obj !== task);
    this.tasks.push(task);
  }

  deleteTask(task: Task): void {
   this.doneTasks = this.doneTasks.filter(obj => obj !== task);
  }
}
