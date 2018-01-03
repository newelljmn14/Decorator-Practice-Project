import { ListDataServiceService } from './list-data-service.service';

export class ListDataDecorator {
    public listDataService;
    public modifiedListData;

    constructor(listDataService: ListDataServiceService) {
        this.listDataService = listDataService;
        this.modifiedListData = this.listDataService.modifiedListData;
    }

}
