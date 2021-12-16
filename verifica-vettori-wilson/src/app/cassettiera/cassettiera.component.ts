import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cassettiera',
  templateUrl: './cassettiera.component.html',
  styleUrls: ['./cassettiera.component.css']
})
export class CassettieraComponent implements OnInit {
names : string[];

  constructor() { 
    this.names = ["rino", "pino", "mino", "ugo"]
  }

  ngOnInit(): void {
  }

}
