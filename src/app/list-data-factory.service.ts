import { IModifyListData } from './i-modify-list-data';
import { Injectable } from '@angular/core';
import { ListDataServiceService } from './list-data-service.service';
import { ListDataDivisibleBy3Decorator } from './list-data-divisible-by-3-decorator';
import { ListDataDecorator } from './list-data-decorator';
import { ListDataDivisibleBy5Decorator } from './list-data-divisible-by-5-decorator';
import { ListDataDivisibleBy15Decorator } from './list-data-divisible-by-15-decorator';
import { ListDataEvenDecorator } from './list-data-even';
import { ListDataOddDecorator } from './list-data-odd';

@Injectable()
export class ListDataFactoryService {
  private typesOfMapping: string[];

  constructor(private listDataService: ListDataServiceService) {
  }

  private getModifiedListData(mappingType: string, startingModifiedListData: IModifyListData) {
    let listDataDecorator;

    if (!mappingType) {
      return startingModifiedListData;
    }

    switch (mappingType) {
      case 'fizz':
        listDataDecorator = new ListDataDivisibleBy3Decorator(startingModifiedListData);
        break;
      case 'buzz':
        listDataDecorator = new ListDataDivisibleBy5Decorator(startingModifiedListData);
        break;
      case 'fizzbuzz':
        listDataDecorator = new ListDataDivisibleBy15Decorator(startingModifiedListData);
        break;
      case 'even':
        listDataDecorator = new ListDataEvenDecorator(startingModifiedListData);
        break;
      case 'odd':
        listDataDecorator = new ListDataOddDecorator(startingModifiedListData);
        break;
      default:
        listDataDecorator = startingModifiedListData;
        break;
    }

    return listDataDecorator;
  }

  public getDecoratedListDataSevice(mappingType: string, secondMappingType: string): IModifyListData {
    const initialModifiedListDataService = this.getModifiedListData(mappingType, this.listDataService);

    return this.getModifiedListData(secondMappingType, initialModifiedListDataService);
  }



}
