import { ListDataDecorator } from './list-data-decorator';
import { IModifyListData } from './i-modify-list-data';
import { ListDataServiceService } from './list-data-service.service';

export class ListDataOddDecorator extends ListDataDecorator implements IModifyListData {

    public getListData(): number[] {
        const modifiedListData = [];

         this.listDataService.getListData().forEach((element, index) => {
            if ((element + 1) % 2 === 0) {
                modifiedListData.push('*3*');
            } else {
                modifiedListData.push(element);
            }
        });

        return modifiedListData;
    }
}
