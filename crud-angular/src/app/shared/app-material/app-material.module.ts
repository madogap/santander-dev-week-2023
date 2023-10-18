import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

@NgModule({
 exports:[
        MatCardModule,
        MatTableModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatDialogModule
       ],
})
export class AppMaterialModule { }
