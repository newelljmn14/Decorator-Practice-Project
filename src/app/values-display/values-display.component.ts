import { Component, OnInit } from '@angular/core';
import { ListDataFactoryService } from '../list-data-factory.service';

@Component({
  selector: 'app-values-display',
  templateUrl: './values-display.component.html',
  styleUrls: ['./values-display.component.css']
})
export class ValuesDisplayComponent implements OnInit {
  public viewListData: any[] = [];
  public firstMappingType: string;
  public secondMappingType: string;

  constructor(private listDataFactoryService: ListDataFactoryService) { }

  ngOnInit() {
    this.viewListData = this.listDataFactoryService.getDecoratedListDataSevice(this.firstMappingType, this.secondMappingType)
      .getListData();
  }

  public updateTypesOfMapping() {
    this.viewListData = this.listDataFactoryService.getDecoratedListDataSevice(this.firstMappingType, this.secondMappingType)
      .getListData();
  }

}
