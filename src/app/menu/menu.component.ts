import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HelpComponent } from '../help/help.component';

/**
 * the menu component
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
/**
 * the menu component
 */
export class MenuComponent implements OnInit {
  /**
   * boolean for hiding/not hiding the menu
   */
  toggle = false;

  /**
   * @param dialog @ignore
   */
  constructor(private dialog: MatDialog) {}
  /**
   * open the help modal
   */
  openDialog(): void {
    this.dialog.open(HelpComponent, {
      width: '900px'
    });
  }
  /**
   * open the help modal for mobile screens
   */
  openDialogForMobile(): void {
    this.dialog.open(HelpComponent, {
      width: '300px'
    });
  }
  /**
   * switch the value of the toggle boolean at click
   * @returns true or false at each click
   */
  toggleMenu(): boolean {
    return (this.toggle = !this.toggle);
  }

  /**
   * @ignore
   */
  ngOnInit() {}
}
