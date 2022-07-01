import { Component, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learnAngular';

  ListItem = 200;

  updateChild(){
    this.ListItem = Math.random();
  }

}
