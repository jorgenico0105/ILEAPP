import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-database',
  templateUrl: './select-database.component.html',
})
export class SelectDatabaseComponent {
  @Output() selectData: EventEmitter<string> = new EventEmitter();
    public selecteddatabase: string = ''
  public options = [
    { value: 'empresa', label: 'Empresa' },
    { value: 'nicolas', label: 'Nicolas' },
    { value: 'prueba', label: 'Prueba' },
  ];
  emitData(){
    this.selectData.emit(this.selecteddatabase)
  }

}
