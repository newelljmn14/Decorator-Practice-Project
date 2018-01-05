import { IModifyListData } from './i-modify-list-data';
import { ListDataServiceService } from './list-data-service.service';

export class ListDataDecorator {
    public listDataService;
    
    constructor(listDataService: IModifyListData) {
        this.listDataService = listDataService;
    }

}
