import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss']
})
export class BugListComponent implements OnInit {
  public hideForm: boolean = true
  public bug_data = [
    // {
    //   name: 'Bug 1',
    //   desc: 'Data rendering error on login page'
    // },
    // {
    //   name: 'Bug tesing error',
    //   desc: 'Language change not working'
    // }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  displayForm() {
    this.hideForm = false;
  }

  addBug(e, bn, bd) {
    e.preventDefault();
    let data = {
      name: bn,
      desc: bd
    }
    this.hideForm = true;
    // console.log(this.bn, this.bd)
    this.bug_data.push(data)
  }

}
