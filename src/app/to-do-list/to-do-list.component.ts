import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})

export class ToDoListComponent implements OnInit {

  data: Array<string> = new Array<string>();
  todo: string = "";
  isEditable: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  save(item: string) {
    this.data.push(item);
  }

  edit(item: string) {
    this.isEditable = !this.isEditable;
    this.data.includes(item);
  }

  update(item: string) {
    this.isEditable = !this.isEditable;
    this.data[this.data.indexOf(item)] = this.todo;
  }

  deletedata(item: string) {
    this.data.splice(this.data.indexOf(item), 1);
  }


}
