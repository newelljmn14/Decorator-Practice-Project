import { ListDataDecorator } from './list-data-decorator';
import { IModifyListData } from './i-modify-list-data';
import { ListDataServiceService } from './list-data-service.service';

export class ListDataDivisibleBy15Decorator extends ListDataDecorator implements IModifyListData {

    public getListData(): number[] {
        const modifiedListData = [];

         this.listDataService.getListData().forEach((element, index) => {
            if (element % 15 === 0) {
                modifiedListData.push('fizzbuzz');
            } else {
                modifiedListData.push(element);
            }
        });

        return modifiedListData;
    }
}
