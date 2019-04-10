import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ScreenModule } from 'src/app/models/screen-module';
import { ScreenModuleService } from 'src/app/shared/screen-module/screen-module.service';
import { MatDialogRef, MatTableDataSource, MatPaginator, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
import { ScreenMaster } from 'src/app/models/screen-master';
import { Subscription } from 'rxjs';
import { ShareDialogService } from 'src/app/shared/sh-dialog/share-dialog.service';
import { ShareNotificationService } from 'src/app/shared/sh-notication/share-notification.service';
import { Router } from '@angular/router';
import { ScreenMasterService } from 'src/app/shared/screen-master/screen-master.service';
import { ScreenMasterComponent } from 'src/app/screen-masters/screen-master/screen-master.component';

@Component({
  selector: 'app-screen-module',
  templateUrl: './screen-module.component.html',
  styleUrls: ['./screen-module.component.scss']
})
export class ScreenModuleComponent implements OnInit , OnDestroy {
  screenModule = new ScreenModule();
    screenMasterListTemp: ScreenMaster [];

  date = new Date();
//

subscription: Subscription;

screenMasterList: ScreenMaster []  = [];

filterScreenMasterList: ScreenMaster[];


dataSource:  MatTableDataSource<ScreenMaster>;
@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;

displayedColumns: string[] = ['screenMasterUid', 'screenMasterId' , 'screenName' , 'createdBy'  ,
 'screenStatus' , 'moduleUid', 'actions'];





  constructor(private screenMasterService: ScreenMasterService,
    private screenModuleService: ScreenModuleService ,
    private router: Router,
    private notificationService: ShareNotificationService,
   private dialogService: ShareDialogService,
     private dialog: MatDialog,
   private dialogRef: MatDialogRef<ScreenModuleComponent>
    ) { }

  ngOnInit() {
    this.screenModule = this.screenModuleService.getScreenModule();
   // console.log('Before  this.screenModule.createdDate: ' ,  this.screenModule.createdDate);
   //  console.log('Withou Change date: ' , this.date);
    // this.date =  this.screenModule.createdDate;
   // this.screenModule.createdDate = new Date();
    console.log('this.screenModule: ' , this.screenModule);
    this.screenMasterListTemp = this.screenModule.screenMasterList;
    console.log('this.screenMasterListTemp: ' , this.screenMasterListTemp);


    this.dataSource = new  MatTableDataSource(this.screenMasterListTemp);
    this.filterScreenMasterList = this.screenMasterList;
    this.dataSource .sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  onClear() {
    this.screenModule = new ScreenModule();
  }

  onClose() {
    console.log('You Click Close');
    this.screenModuleService.setscreenModule(new ScreenModule());
    this.dialogRef.close();

  }

  onSubmit() {
    console.log('You Click Submit');
    console.log('screenModule: ' , this.screenModule);


  }

  ngOnDestroy() {
    console.log('**** ScreenModuleComponent ngOnDestroy  *****');
    this.screenModuleService.setscreenModule(new ScreenModule());

  }



  filter(query: string) {
    // console.log(query);
    this.filterScreenMasterList = (query) ?
    this.screenMasterListTemp.filter(p => p.screenMasterId.toLowerCase().includes(query.toLowerCase())) : this.screenMasterListTemp;
    this.dataSource = new  MatTableDataSource( this.filterScreenMasterList );
    this.dataSource .sort = this.sort;
    this.dataSource.paginator = this.paginator;


    }


  onDelete(screenMasterUid: number) {


     this.dialogService.openConfirmDialog(' Are You Sure Delete This Screen Master UID: ' +
      screenMasterUid).afterClosed().subscribe(res => {
       console.log('Return Result: ' + res);
       if (res) {
        this.notificationService.warn('! SucessFully Deleted This Screen Master UID: ' + screenMasterUid);

       }


    });
}

onEdit(screenMaster: ScreenMaster) {
     console.log('ScreenMaster in Edit: ', screenMaster);
     console.log('ScreenMaster in Edit: ', screenMaster);
     this.screenMasterService.setScreenMaster(screenMaster);
     const dialogConfig = new MatDialogConfig();
     dialogConfig.disableClose = true;
     dialogConfig.autoFocus = true;
     dialogConfig.width = '60%';
     this.dialog.open(ScreenMasterComponent, dialogConfig);



}




}
