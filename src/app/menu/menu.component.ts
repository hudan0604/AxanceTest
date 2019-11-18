import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  navbarCollapsed = true;

  toggleNavbar(): void {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
  constructor() {}

  ngOnInit() {}
}
