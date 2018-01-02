import { ListDataDecorator } from './list-data-decorator';
import { IModifyListData } from './i-modify-list-data';
import { ListDataServiceService } from './list-data-service.service';

export class ListDataDivisibleBy5Decorator extends ListDataDecorator implements IModifyListData {

    constructor(listDataServiceService: ListDataServiceService) {
        super(listDataServiceService);
        this.modifyListData();
    }

    public modifyListData(): void {
        this.listDataService.modifiedListData = this.listDataService.modifiedListData.map(value => {
            if (value % 5 === 0) {
                return 'buzz';
            }

            return value;
        });
    }
}
