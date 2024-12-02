
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import DataType from '../../interfaces/dataInterface';
import { catchError, finalize, of } from 'rxjs';
import { readExcelFile } from '../../utils/ReadExcel';
import { dataArraySchema } from '../../interfaces/Schema';

@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
})
export class SubirArchivoComponent {
  // todo:Validar archivo que ingresa
  public Exceldata: DataType[] = [];
  public selectedFields: string[] = []
  public message: string = ''
  public objectKeys = Object.keys;
  public database: string = ''
  constructor(private dataservice: DataService) { }
  dataManager(database:string){
    this.database=database
  }
  fieldsManager(fields:string[]){
    this.selectedFields=fields
  }
  // ller documentos XLX
  async ReadExcel(event: any) {
    try {

      const dataRaw= await readExcelFile(event);
      dataArraySchema.parse(dataRaw)
      this.Exceldata=dataRaw
      console.log(this.Exceldata);
      this.message = 'Archivo cargado correctamente.';
    } catch (error) {
      this.message = 'Error al leer el archivo. Por favor, inténtalo de nuevo.';
      setTimeout(() => (this.message = ''), 3000);
    }
  }
  // Enviar datos seleccionados al backend
  sendSelectedData() {
    const filteredData = this.Exceldata.map(entry =>
      Object.keys(entry)
        .filter(key => key === 'Codigo' || this.selectedFields.includes(key))
        .reduce((obj: Partial<DataType>, key: string) => {
          obj[key as keyof DataType] = entry[key as keyof DataType];
          return obj;
        }, {})
    );
    this.dataservice.updateData(this.database, filteredData)
      .pipe(
        finalize(()=>{
          this.Exceldata = [];
          this.selectedFields = [];
          this.database = '';
        }),
        catchError(error => {
          console.error('Error al actualizar los datos:', error);
          this.message = 'Error al actualizar los datos.';
          setTimeout(() => {
            this.message = '';
          }, 5000);
          return of(null);
        }))
      .subscribe(response => {
        if (response) {
          this.message = 'Datos correctamente actulizados'
          setTimeout(() => {
            this.message = '';
          }, 5000);
        }}
      )}
}
