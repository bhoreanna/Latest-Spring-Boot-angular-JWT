import { Component, OnInit, ViewChild, OnDestroy, Input } from '@angular/core';
import { ScreenMasterService } from 'src/app/shared/screen-master/screen-master.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/oshope/share/notification.service';
import { DialogService } from 'src/app/oshope/share/dialog.service';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort, MatDialogConfig } from '@angular/material';
import { ScreenMaster } from 'src/app/models/screen-master';
import { ScreenMasterComponent } from '../screen-master/screen-master.component';
import { ShareNotificationService } from 'src/app/shared/sh-notication/share-notification.service';
import { ShareDialogService } from 'src/app/shared/sh-dialog/share-dialog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-screen-master-list',
  templateUrl: './screen-master-list.component.html',
  styleUrls: ['./screen-master-list.component.scss']
})
export class ScreenMasterListComponent implements OnInit , OnDestroy {
  subscription: Subscription;

  screenMasterList: ScreenMaster []  = [];

  filterScreenMasterList: ScreenMaster[];
fromModule = false;
@Input()
screenMasterListTemp: ScreenMaster [];
  dataSource:  MatTableDataSource<ScreenMaster>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['screenMasterUid', 'screenMasterId' , 'screenName' , 'createdBy'  ,
   'screenStatus' , 'moduleUid', 'actions'];




  constructor(private screenMasterService: ScreenMasterService,
    private router: Router,
    private notificationService: ShareNotificationService,
   private dialogService: ShareDialogService,
     private dialog: MatDialog) { }

  ngOnInit() {
// console.log('screenMasterListTemp: ', this.screenMasterListTemp.length);
// if ( this.screenMasterListTemp.length > 0) {
//   console.log('In IF part');
//   this.fromModule = true;
//   this.dataSource = new  MatTableDataSource(this.screenMasterListTemp);
//   this.filterScreenMasterList = this.screenMasterListTemp;
//   this.dataSource .sort = this.sort;
//   this.dataSource.paginator = this.paginator;
// } else {
  this.subscription =   this.screenMasterService.getScreenMasterList().subscribe( res => {
    this.screenMasterList = res;


    this.dataSource = new  MatTableDataSource(this.screenMasterList);
    this.filterScreenMasterList = this.screenMasterList;
    this.dataSource .sort = this.sort;
    this.dataSource.paginator = this.paginator;

  });
}
 // }



  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(ScreenMasterComponent , dialogConfig);
  }


  filter(query: string) {
    // console.log(query);
    // if (this.fromModule) {
    //   this.filterScreenMasterList = (query) ?
    //   this.screenMasterListTemp.filter(p => p.screenMasterId.toLowerCase().includes(query.toLowerCase())) : this.screenMasterListTemp;
    //   this.dataSource = new  MatTableDataSource( this.filterScreenMasterList );
    //   this.dataSource .sort = this.sort;
    //   this.dataSource.paginator = this.paginator;
    // } else {
      this.filterScreenMasterList = (query) ?
      this.screenMasterList.filter(p => p.screenMasterId.toLowerCase().includes(query.toLowerCase())) : this.screenMasterList;
      this.dataSource = new  MatTableDataSource( this.filterScreenMasterList );
      this.dataSource .sort = this.sort;
      this.dataSource.paginator = this.paginator;
   // }



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
     this.screenMasterService.setScreenMaster(screenMaster);
     const dialogConfig = new MatDialogConfig();
     dialogConfig.disableClose = true;
     dialogConfig.autoFocus = true;
     dialogConfig.width = '60%';
     this.dialog.open(ScreenMasterComponent, dialogConfig);



}

ngOnDestroy() {
  console.log('Destroy ScreenModuleList Component');
  this.subscription.unsubscribe();
}

}
