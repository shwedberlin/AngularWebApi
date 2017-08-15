import { Component, Inject, AfterViewInit, ViewChild } from '@angular/core';

import { ApiService } from '../core/api.service'; // BIG Q: Why importing Service explicit if it is already imported and provided by CoreModule? 
import { RemoteApiService } from '../core/remoteapi.service';
import { UserService, User } from '../core/user.service';
import { LoggerService } from '../core/logger.service';
import { AlertProviderService, AlertType } from '../core/alert.provider.service';
import { BreadCrumbsComponent } from '../shared/breadcrumbs/bread-crumbs.component';

import * as models from '../model/models';

@Component({
    templateUrl: './home-site.component.html'
})
export class HomeSiteComponent {
    private loggerName: string = "NG_Home";

    title = "I'm home-site component with WebApi data fetching";
    timestamp = (new Date()).toString();
    public currUser: User = new User('undef', 'undef');

    /* BreadCrumbs */
    @ViewChild(BreadCrumbsComponent)
    private breadCrumbsElement: BreadCrumbsComponent;

    /* DataTable props */
    public currPath: string;
    public loadingIndicator: boolean = false;
    public sortExpression: string = "name";
    public page: models.Page = new models.Page();
    public rows: Array<models.ADResource> = new Array<models.ADResource>();
    public selectedrow: Array<models.ADResource> = new Array<models.ADResource>();
    columns = [
        { prop: 'Type' },
        { prop: 'ObjectType' },
        { prop: 'Name' },
        { prop: 'ChildrenCount' },
        { prop: 'Path' }
    ];

    ngOnInit() {
        this.page.PageNumber = 0;
        this.sortExpression = null;
        this.loadData();
    }

    ngAfterViewInit() {
        this.breadCrumbsElement.addNewCrumb(new models.BreadCrumb<string>("Root", null));
    }

    constructor(apiService: ApiService, private remoteapi: RemoteApiService, private userService: UserService, private logger: LoggerService, private alerProvider: AlertProviderService) {
        this.page.PageNumber = 0;
        this.page.PageSize = 6;       

        userService.getUser().subscribe(result => {
            this.currUser = result as User;
        });        

        this.logger.GetLogger(this.loggerName).info("HomeSiteComponent");
    }

    /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
    loadData() {
        this.loadingIndicator = true;
        this.remoteapi.aDGetPage(this.page, this.currPath, this.sortExpression).subscribe(pagedData => {
            this.rows = pagedData.data;
            this.page = pagedData.page;
            this.loadingIndicator = false;
        });
    }

    onPaging(pageInfo: any) {
        this.page.PageNumber = pageInfo.offset;
        this.loadData();
    }

    onSelect(selectedRow: any) {
        if (selectedRow.selected[0].ObjectType != "computer" && selectedRow.selected[0].ObjectType != "user") {
            this.currPath = selectedRow.selected[0].Path;
            this.page.PageNumber = 0;
            this.sortExpression = null;
            this.loadData();
            this.breadCrumbsElement.addNewCrumb(new models.BreadCrumb<string>(selectedRow.selected[0].ObjectType, selectedRow.selected[0].Path));
        }
    }

    onSort(sortEvent: any) {
        let sort = sortEvent.sorts[0];
        this.sortExpression = sort.prop;
        if (sort.dir === "desc") {
            this.sortExpression = "-" + this.sortExpression;
        }
        this.loadData();
    }

    breadCrumbNavigate(crumb: models.BreadCrumb<string>) {
        this.currPath = crumb.value;
        this.page.PageNumber = 0;
        this.sortExpression = null;
        this.loadData();
    }

    alertSuccess(message: string) {
        this.alertBase(AlertType.Success, message);
    }

    alertInfo(message: string) {
        this.alertBase(AlertType.Information, message);
    }

    alertWarning(message: string) {
        this.alertBase(AlertType.Warning, message);
    }

    alertError(message: string) {
        this.alertBase(AlertType.Error, message);
    }

    private alertBase(type: AlertType, message: string) {
        this.alerProvider.alert(type, message);
    }

    fileChange(event: any) {
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            this.remoteapi.uploadFile(file).subscribe(response => {
                alert(response);
            });        
        }
    }
}

interface DummyData {
    clientData: string;
    serverData: string;
}