import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import DataType from '../../interfaces/dataInterface';

@Component({
  selector: 'app-tabla-updates',
  templateUrl: './tabla-updates.component.html',

})
export class TablaUpdatesComponent implements OnInit {
  @Input() ExcelData:DataType[]=[]
  @Input() selectedFields:string[]=[]
  public objectKeys = Object.keys;
  public objectValues=Object.values;
  public dataTable:DataType[]=[]
  ngOnInit(): void {
    if(!this.ExcelData.length) return console.log('Data vacia')
  }
}
