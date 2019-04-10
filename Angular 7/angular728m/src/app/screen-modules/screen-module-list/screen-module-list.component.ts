import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ScreenModule } from 'src/app/models/screen-module';
import { ScreenModuleService } from 'src/app/shared/screen-module/screen-module.service';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';
import { ScreenModuleComponent } from '../screen-module/screen-module.component';
import { ShareDialogService } from 'src/app/shared/sh-dialog/share-dialog.service';
import { ShareNotificationService } from 'src/app/shared/sh-notication/share-notification.service';

@Component({
  selector: 'app-screen-module-list',
  templateUrl: './screen-module-list.component.html',
  styleUrls: ['./screen-module-list.component.scss']
})
export class ScreenModuleListComponent implements OnInit , OnDestroy {
  screenModuleList: ScreenModule []  = [];

  filterScreenModuleList: ScreenModule[];

  subscription: Subscription;

  dataSource:  MatTableDataSource<ScreenModule>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['moduleUid', 'moduleId' , 'moduleName' , 'createdBy'  , 'moduleStatus' , 'actions'];



  constructor(private screenModuleService: ScreenModuleService,
    private router: Router,
    private notificationService: ShareNotificationService,
   private dialogService: ShareDialogService,
     private dialog: MatDialog
    ) { }

  ngOnInit() {

  this.subscription =  this.screenModuleService.getScreenModuleList().subscribe( res => {
      this.screenModuleList = res;


      this.dataSource = new  MatTableDataSource(this.screenModuleList);
      this.filterScreenModuleList = this.screenModuleList;
      this.dataSource .sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(ScreenModuleComponent , dialogConfig);
  }


  filter(query: string) {
    // console.log(query);
    this.filterScreenModuleList = (query) ?
    this.screenModuleList.filter(p => p.moduleId.toLowerCase().includes(query.toLowerCase())) : this.screenModuleList;
    this.dataSource = new  MatTableDataSource( this.filterScreenModuleList );
    this.dataSource .sort = this.sort;
    this.dataSource.paginator = this.paginator;


    }


  onDelete(moduleUid: number) {

     this.dialogService.openConfirmDialog(' Are You Sure Delete This Module UId : ' + moduleUid).afterClosed().subscribe(res => {
       console.log('Return Result: ' + res);
       if (res) {
           this.notificationService.warn('! SucessFully Deleted This Module UId: ' + moduleUid);
       }

     });
}

onEdit(screenModule: ScreenModule) {
     console.log('ScreenModule in Edit: ', ScreenModule);
      this.screenModuleService.setscreenModule(screenModule);
     const dialogConfig = new MatDialogConfig();
     dialogConfig.disableClose = true;
     dialogConfig.autoFocus = true;
     dialogConfig.width = '60%';
     this.dialog.open(ScreenModuleComponent, dialogConfig);



}

ngOnDestroy() {
  console.log('Destroy ScreenModuleList Component');
  this.subscription.unsubscribe();
}

}
