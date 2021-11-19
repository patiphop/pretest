import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'question2';

  constructor(
    private httpService : HttpClient
  ) {
    this.httpService.get('https://api.publicapis.org/categories').subscribe((res : any) => {
      let arr: any[] = [];
      res.forEach((textData: string) => {
        arr.push({name : textData});
      });
      this.dataSource = new MatTableDataSource(arr);
    });

  }

  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource([{}]);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
