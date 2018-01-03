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
  private listDataDecorator: ListDataDecorator;

  constructor(private listDataService: ListDataServiceService) {
  }

  public getDecoratedListDataSevice(mappingType: string): ListDataDecorator {
    if (!mappingType) {
      return new ListDataDecorator(this.listDataService);
    }

    switch (mappingType) {
      case 'fizz':
        this.listDataDecorator = new ListDataDivisibleBy3Decorator(this.listDataService);
        break;
      case 'buzz':
        this.listDataDecorator = new ListDataDivisibleBy5Decorator(this.listDataService);
        break;
      case 'fizzbuzz':
        this.listDataDecorator = new ListDataDivisibleBy15Decorator(this.listDataService);
        break;
      case 'even':
        this.listDataDecorator = new ListDataEvenDecorator(this.listDataService);
        break;
      case 'odd':
        this.listDataDecorator = new ListDataOddDecorator(this.listDataService);
        break;
      default:
        this.listDataDecorator = new ListDataDecorator(this.listDataService);
        break;
    }

    return this.listDataDecorator;
  }

}
