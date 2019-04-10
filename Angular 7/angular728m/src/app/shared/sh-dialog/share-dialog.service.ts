import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShareMatConfirmDialogComponent } from 'src/app/sh-mat-confirm-dialog/share-mat-confirm-dialog/share-mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ShareDialogService {

  constructor(private matDialog: MatDialog) { }

 public  openConfirmDialog (msg: string) {
      console.log('open Confirm Dialog: ' + msg);
    //   const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.width = '390px';
    // dialogConfig.data =
    // dialogConfig.panelClass = 'confirm-dialog-container';
   return this.matDialog.open(ShareMatConfirmDialogComponent , {
      width : '390px',
      panelClass : 'confirm-dialog-container',
      disableClose : true,
      data: {
        message : msg
      }
    });

  }
}
