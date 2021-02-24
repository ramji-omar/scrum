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
      label: 'SCRUM BOARD',
      path: ''
    },
    {
      label: 'TASK LIST',
      path: ''
    },
    {
      label: 'ADD STORY',
      path: ''
    },
    {
      label: 'ADD TASK',
      path: 'addTask'
    },
    {
      label: 'ADD BUGS',
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
