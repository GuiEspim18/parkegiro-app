import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';

const materialModules: Array<any> = [
  CommonModule,
  MatButtonModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatMenuModule,
  MatChipsModule,
  MatDialogModule,
  MatRippleModule,
  MatTooltipModule,
  MatSidenavModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatProgressBarModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatBadgeModule,
  MatListModule,
  MatTabsModule,
  MatTableModule
]

@NgModule({
  declarations: [],
  imports: [
    ...materialModules
  ],
  exports: [
    ...materialModules
  ]
})
export class AngularMaterialModule { }