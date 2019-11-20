import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

/**
 * the help component
 */
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
/**
 * Help Component
 */
export class HelpComponent implements OnInit {
  /**
   * @param {any} dialogRef angular material dialog, the help component
   */
  constructor(public dialogRef: MatDialogRef<HelpComponent>) {}
  /**
   * click on the x icon closes the help modal
   */
  closeDialog() {
    this.dialogRef.close();
  }
  /**
   * @ignore
   */
  ngOnInit() {}
}
