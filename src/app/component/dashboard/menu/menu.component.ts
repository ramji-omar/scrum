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
      label: 'Story',
      path: ''
    },
    {
      label: 'Task',
      path: 'task-list'
    },
    {
      label: 'Bugs',
      path: 'bug-list'
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
