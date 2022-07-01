import { Component, Input, OnInit } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  @Input() ListItem = 0;

  // displayedColumns: string[] = ['id', 'Task', 'Edit', 'Delete',];
  // dataSource = new MatTableDataSource();

  data: Array<string> = new Array<string>();
  todo: string = "";

  constructor() {
    // const users = Array;
    // this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {}

  save(item: string) {
    this.data.push(item);
  }



}
