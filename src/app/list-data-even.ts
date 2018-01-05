import { ListDataDecorator } from './list-data-decorator';
import { IModifyListData } from './i-modify-list-data';
import { ListDataServiceService } from './list-data-service.service';

export class ListDataEvenDecorator extends ListDataDecorator implements IModifyListData {

    public getListData(): number[] {
        const modifiedListData = [];

         this.listDataService.getListData().forEach((element, index) => {
            if (element % 2 === 0) {
                modifiedListData.push('*2*');
            } else {
                modifiedListData.push(element);
            }
        });

        return modifiedListData;
    }
}
