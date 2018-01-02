import { ListDataServiceService } from './list-data-service.service';

export class ListDataDecorator {
    public listDataService;

    constructor(listDataService: ListDataServiceService) {
        this.listDataService = listDataService;
    }

}
