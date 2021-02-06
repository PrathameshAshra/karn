import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardComponent implements OnInit {
  ListOfProjects = [1,2,3,4,5,6]
  constructor() { }

  ngOnInit(): void {
  }

}
