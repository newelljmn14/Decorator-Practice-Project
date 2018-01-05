import { IModifyListData } from './i-modify-list-data';
import { Injectable } from '@angular/core';

@Injectable()
export class ListDataServiceService implements IModifyListData {
  private listData: number[] = [];

  constructor() {
    this.initializeListData();
  }

  private initializeListData(): void {
    for (let index = 1; index <= 100; index++) {
      this.listData.push(index);
    }
  }

  public getListData(): number[] {
    return this.listData;
  }

}
