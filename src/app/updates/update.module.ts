import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatesRoutingModule } from './updates-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { SubirArchivoComponent } from './components/subir-archivo/subir-archivo.component';
import { HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TablaUpdatesComponent } from './components/tabla-updates/tabla-updates.component';
import { SelectDatabaseComponent } from './components/select-database/select-database.component';
import { SelectFiledsComponent } from './components/select-fileds/select-fileds.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SubirArchivoComponent,
    TablaUpdatesComponent,
    SelectDatabaseComponent,
    SelectFiledsComponent
  ],
  imports: [
    CommonModule,
    UpdatesRoutingModule,
    HttpClientJsonpModule,
    FormsModule
  ]
})
export class UpdateModule { }
