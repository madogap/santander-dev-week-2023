import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
 exports:[
        MatCardModule,
        MatTableModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule
       ],
})
export class AppMaterialModule { }