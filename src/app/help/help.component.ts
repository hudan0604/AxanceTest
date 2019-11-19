import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HelpComponent>) { }
  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
