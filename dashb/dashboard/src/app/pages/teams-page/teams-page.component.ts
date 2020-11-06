import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.scss']
})
export class TeamsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  console.log("Archa")
  }

  name= "Old timde";

  tiles: Tile[] = [
    // {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'The Digital Software and Development Academy (Pty) Ltd The Digital Software and Development Academy (Pty) LtdThe Digital Software and Development Academy (Pty) Ltd ', cols: 1, rows: 1, color: 'lightgreen'}
    // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

}
