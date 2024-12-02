import { Component, EventEmitter, Input, Output } from '@angular/core';
import DataType from '../../interfaces/dataInterface';

@Component({
  selector: 'app-select-fileds',
  templateUrl: './select-fileds.component.html',
})
export class SelectFiledsComponent {
  public objectKeys = Object.keys;
  public selectedFields: string[] = []
  @Input()
  Exceldata: DataType[] = []
  @Output() selecteFields: EventEmitter<Array<string>> = new EventEmitter
  toggleFieldSelection(field: string) {
    if (this.selectedFields.includes(field)) {
      this.selectedFields = this.selectedFields.filter(f => f !== field);
    } else {
      this.selectedFields.push(field);
    }
  }
  emitSelected() {
    this.selecteFields.emit(this.selectedFields)
  }
}
