import { Component, Input, OnInit } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  data: Array<string> = new Array<string>();
  todo: string = "";

  constructor() {}

  ngOnInit(): void {}

  delItem(item:any){
    this.data.splice(this.data.indexOf(item.id), 1);
  }


  save(item: string) {
    this.data.push(this.todo);
    console.log(this.data);
  }



}
