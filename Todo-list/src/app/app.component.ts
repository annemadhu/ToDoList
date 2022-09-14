import { Component } from '@angular/core';
import { Task } from './model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-list';

  tasks:Task[];
  constructor(){
    this.tasks=[];
  }
  addTaskEventEmitter($event: any){
    this.tasks.push(new Task($event.taskTitle));
    console.log(this.tasks)
  }
}
