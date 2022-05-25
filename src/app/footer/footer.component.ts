import { Component, OnInit } from '@angular/core';
import {
  faCopyright
} from '@fortawesome/free-regular-svg-icons';
import {
  faTrademark
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faCopyright = faCopyright;
  faTradeMark = faTrademark;

  constructor() { }

  ngOnInit(): void {
  }

}
