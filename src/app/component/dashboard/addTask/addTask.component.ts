import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTable, MatTableDataSource  } from '@angular/material/table';


@Component({
  selector: 'app-task',
  templateUrl: './addTask.component.html',
  styleUrls: ['./addTask.component.scss']
})
export class addTask implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayTask = false;
  public formData = {
    task: '',
    details: '',
    startDate: '',
    endDate: '',
    priority: ''
  }

  taskData = []

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  addTask() {
    this.displayTask = true;
  }

  saveData(value: any) {

    this.taskData.push(this.formData);
    this.formData = {
      task: '',
      details: '',
      startDate: '',
      endDate: '',
      priority: ''
    }
    console.log(this.taskData);
  }

  editTask(element) {
    let index = this.taskData.indexOf(element)
    this.formData = element
    this.displayTask = true;
    // this.editable = index;
  }

  deleteTask(element) {
    let index = this.taskData.indexOf(element)
    if (index > -1) {
      this.taskData.splice(index, 1);
      this.dataSource.data = this.taskData
    }
  }

  applyFilter(filterValue: string) {
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  displayedColumns: string[] = ['name', 'details', 'startDate', 'priority', 'startDate', 'endDate'];
  dataSource = new MatTableDataSource<object>(this.taskData);





}


