import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  displayStory = false;
  public formData = {
    story: '',
    details: ''
  }

  storyData = []

  constructor() { }
  
  ngOnInit(): void {
  }
  
  addStory(){
    this.displayStory = true;
  }

  saveData(value:any) {
    // console.log(value);
    this.storyData.push(this.formData);
    this.formData = {
      story: '',
      details: ''
    }
    console.log(this.storyData);
  }
}
