import { Injectable } from '@angular/core';
import {MatSort, MatTableDataSource, MatPaginator, MatDialogConfig, MatDialog} from '@angular/material';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog: MatDialog) { }

 public  openConfirmDialog (msg: string) {
      console.log('open Confirm Dialog: ' + msg);
    //   const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.width = '390px';
    // dialogConfig.data =
    // dialogConfig.panelClass = 'confirm-dialog-container';
   return this.matDialog.open(MatConfirmDialogComponent , {
      width : '390px',
      panelClass : 'confirm-dialog-container',
      disableClose : true,
      data: {
        message : msg
      }
    });

  }
}
