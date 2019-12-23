import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hamburgerClose: Boolean = false;
  constructor() { }

  ngOnInit() {
  }
 // Toggle hamburger
 toggleHamburger() {
  this.hamburgerClose = !this.hamburgerClose;
}
}
