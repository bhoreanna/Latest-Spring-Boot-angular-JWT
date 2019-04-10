import { Component, OnInit } from '@angular/core';
import { ScreenMasterService } from 'src/app/shared/screen-master/screen-master.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/oshope/share/notification.service';
import { DialogService } from 'src/app/oshope/share/dialog.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ScreenMaster } from 'src/app/models/screen-master';

@Component({
  selector: 'app-screen-master',
  templateUrl: './screen-master.component.html',
  styleUrls: ['./screen-master.component.scss']
})
export class ScreenMasterComponent implements OnInit {
  screenMaster =  new ScreenMaster();

  constructor(private screenMasterService: ScreenMasterService,
    private router: Router,
    private notificationService: NotificationService,
   private dialogService: DialogService,
     private dialog: MatDialog ,
     private dialogRef: MatDialogRef<ScreenMasterComponent>
     ) { }

  ngOnInit() {
      this.screenMaster = this.screenMasterService.getScreenMaster();
      console.log(' this.screenMaster in ScreenMasterComponent ', this.screenMaster);
  }



  onClear() {
    this.screenMaster =  new ScreenMaster();
  }

  onClose() {
    console.log('You Click Close');
   this.screenMasterService.setScreenMaster(new ScreenMaster());
   this.dialogRef.close();

  }

  onSubmit() {
    console.log('You Click Submit');
    console.log('screenModule: ' , this.screenMaster);


  }

}
