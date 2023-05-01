import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ITask } from '../models/task';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    // todoForm !: FormGroup;
    task!:string;
    tasks:ITask[]=[];
    inProgress:ITask[]=[];
    done:ITask[]=[];
    updateId!:any;
    isEditUnabled!:Boolean;
  constructor() { }

  ngOnInit(): void {
    // this.todoForm= this.fb.group({
    //   item: ['',Validators.required]
    // })
  }
addtask(){
  console.log(this.task);
  this.tasks.push({
    description:this.task,
    done:false
  })
}
onEdit(item:ITask,i:number){ 
}

deleteTask(i:number){
this.tasks.splice(i,1);
}



deleteInProgrss(i:number){
this.inProgress.splice(i,1);
}
deleteTaskDone(i:number){
this.done.splice(i,1);
}
  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
