import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HelpComponent } from '../help/help.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  navbarCollapsed = true;
  toggle = false;

  constructor(private dialog: MatDialog) {}

  toggleNavbar(): void {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
  openDialog(): void {
    this.dialog.open(HelpComponent, {
      width: '900px'
    });
  }
  openDialogForMobile(): void {
    this.dialog.open(HelpComponent, {
      width: '300px'
    });
  }
  toggleMenu(): boolean {
    return this.toggle = !this.toggle;
  }

  ngOnInit() {}
}
