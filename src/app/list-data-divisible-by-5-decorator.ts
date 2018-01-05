import { ListDataDecorator } from './list-data-decorator';
import { IModifyListData } from './i-modify-list-data';
import { ListDataServiceService } from './list-data-service.service';

export class ListDataDivisibleBy5Decorator extends ListDataDecorator implements IModifyListData {

    public getListData(): number[] {
        const modifiedListData = [];

       this.listDataService.getListData().forEach((element, index) => {
            if (element % 5 === 0) {
                modifiedListData.push('buzz');
            } else {
                modifiedListData.push(element);
            }
        });

        return modifiedListData;
    }
}
