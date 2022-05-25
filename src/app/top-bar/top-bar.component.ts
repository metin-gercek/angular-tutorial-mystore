import { Component, OnInit } from '@angular/core';
import { faMobileAlt, faTrademark } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {


  faMobileAlt = faMobileAlt;
  faTrademark = faTrademark;

  constructor() { }

  ngOnInit(): void {
  }

}
