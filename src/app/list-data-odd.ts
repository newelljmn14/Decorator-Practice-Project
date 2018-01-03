import { ListDataDecorator } from './list-data-decorator';
import { IModifyListData } from './i-modify-list-data';
import { ListDataServiceService } from './list-data-service.service';

export class ListDataOddDecorator extends ListDataDecorator implements IModifyListData {

    constructor(listDataServiceService: ListDataServiceService) {
        super(listDataServiceService);
        this.modifyListData();
    }

    public modifyListData(): void {
        this.listDataService.listData.forEach((element, index) => {
            if ((element + 1) % 2 === 0) {
                this.listDataService.modifiedListData[index] = '*3*';
            }
        });
    }
}