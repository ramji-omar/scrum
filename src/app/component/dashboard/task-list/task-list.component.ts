import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  displayTask = false;
  public formData = {
    task: '',
    details: ''
  }

  taskData = []

  constructor() { }
  
  ngOnInit(): void {
  }
  
  addTask(){
    this.displayTask = true;
  }

  saveData(value:any) {
    // console.log(value);
    this.taskData.push(this.formData);
    this.formData = {
      task: '',
      details: ''
    }
    console.log(this.taskData);
  }

}
