import { Component, OnInit } from '@angular/core';
import { ListDataFactoryService } from '../list-data-factory.service';

@Component({
  selector: 'app-values-display',
  templateUrl: './values-display.component.html',
  styleUrls: ['./values-display.component.css']
})
export class ValuesDisplayComponent implements OnInit {
  private typesOfMapping: string[] = [];
  public viewListData: any[] = [];

  constructor(private listDataFactoryService: ListDataFactoryService) { }

  ngOnInit() {
    this.viewListData = this.listDataFactoryService.getDecoratedListDataSevice()
      .listDataService.modifiedListData;

    console.log(this.viewListData);
  }

  public updateTypesOfMapping(typeOfMapping: string) {
    this.typesOfMapping.push(typeOfMapping);

    this.listDataFactoryService.setTypesOfMapping(this.typesOfMapping);

    this.viewListData = this.listDataFactoryService.getDecoratedListDataSevice()
      .listDataService.modifiedListData;
  }

}
