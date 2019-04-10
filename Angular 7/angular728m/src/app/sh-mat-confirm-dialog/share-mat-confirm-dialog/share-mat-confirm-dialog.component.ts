import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-share-mat-confirm-dialog',
  templateUrl: './share-mat-confirm-dialog.component.html',
  styleUrls: ['./share-mat-confirm-dialog.component.scss']
})
export class ShareMatConfirmDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ShareMatConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data ) {
      console.log('In ShareMatConfirmDialogComponent');
    }

  ngOnInit() {
  }


  onClose() {
    this.dialogRef.close(false);
  }

}
