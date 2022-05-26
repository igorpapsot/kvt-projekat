import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css']
})
export class CommunitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public communities: string[] = ["1", "2", "3"];
}
