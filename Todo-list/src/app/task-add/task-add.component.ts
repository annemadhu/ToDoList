import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, OnInit,Input,Output,EventEmitter  } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';


@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  
  
  @Output() addTaskEventEmitter=new EventEmitter();

  taskForm: FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.taskForm=this.formBuilder.group({
      taskTitle:["",[Validators.required]]
    })
  }
  onkeyPress($event: any){
    console.log('event is',$event);
    if(this.taskForm.valid){
     this.addTaskEventEmitter.emit(this.taskForm.value);
     }else{
      alert("No value Entered");
    }

  }
}
