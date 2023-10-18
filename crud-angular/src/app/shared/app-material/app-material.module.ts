import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  exports: [
    CommonModule,
    ToolbarModule,
    TableModule,
    CardModule
  ]
})
export class AppMaterialModule { }
