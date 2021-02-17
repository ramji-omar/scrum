import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuOptions = [
    {
      label: 'Scrum Board',
      path: ''
    },
    {
      label: 'Task List',
      path: 'task-list'
    },
    {
      label: 'Add Story',
      path: ''
    },
    {
      label: 'Add Task',
      path: ''
    },
    {
      label: 'Add Bugs',
      path: ''
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClick(menu) {
    this.router.navigateByUrl(`dashboard/${menu.path}`)
  }

}
