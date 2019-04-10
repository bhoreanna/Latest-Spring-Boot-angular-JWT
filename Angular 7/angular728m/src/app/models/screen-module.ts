import { ScreenMaster } from './screen-master';

export class ScreenModule {
    public  moduleUid: number;
    public  moduleId: string;
    public  moduleName: string;
    public  createdBy: string ;
    public  modifiedBy: string;
    public  createdDate: Date;
    public  modifyDate: Date;
    public  moduleStatus: string;
    public  screenMasterList: ScreenMaster [];
}
