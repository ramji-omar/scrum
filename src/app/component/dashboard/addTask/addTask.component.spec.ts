import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { addTask } from './addTask.component';

describe('taskComponent', () => {
  let component: addTask;
  let fixture: ComponentFixture<addTask>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ addTask ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(addTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
