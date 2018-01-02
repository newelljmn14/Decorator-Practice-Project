import { Injectable } from '@angular/core';

@Injectable()
export class ListDataServiceService {
  public listData: number[] = [];
  public modifiedListData: any[];

  constructor() {
    this.initializeListData();
    this.modifiedListData = this.listData;
  }

  private initializeListData(): void {
    for (let index = 1; index <= 100; index++) {
      this.listData.push(index);
    }
  }

}
