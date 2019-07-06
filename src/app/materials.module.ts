import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { 
  MatButtonModule, 
  MatCheckboxModule, 
  MatInputModule, 
  MatExpansionModule,
  MatFormFieldModule, 
  MatCardModule, 
  MatToolbarModule, 
  MatStepperModule,
  MatIconModule, 
  MatTableModule, 
  MatSelectModule, 
  MatNativeDateModule,
  MatDividerModule, 
  MatListModule, 
  MatTabsModule, 
  MatGridListModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatChipsModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatButtonToggleModule,
  MatRippleModule,
  MatMenuModule,
  MatBadgeModule,
  MatTreeModule
} from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  imports: [
    CommonModule, DragDropModule,
    MatButtonModule, MatCheckboxModule, MatInputModule,
    MatFormFieldModule, MatCardModule, MatToolbarModule,
    MatIconModule, MatTableModule, MatSelectModule, 
    MatDatepickerModule, MatNativeDateModule, 
    MatAutocompleteModule, MatStepperModule,
    MatExpansionModule, MatDividerModule, MatListModule,
    MatTabsModule, MatGridListModule, MatPaginatorModule,
    MatSortModule, MatDialogModule, MatSnackBarModule,
    MatTooltipModule, MatChipsModule, MatProgressBarModule,
    MatProgressSpinnerModule, MatButtonToggleModule, MatRadioModule,
    MatRippleModule, MatMenuModule, MatBadgeModule, MatTreeModule,
  ],
  exports: [ 
    DragDropModule,
    MatButtonModule, MatCheckboxModule, MatInputModule,
    MatFormFieldModule, MatCardModule, MatToolbarModule,
    MatIconModule, MatTableModule, MatSelectModule,
    MatDatepickerModule, MatNativeDateModule, 
    MatAutocompleteModule, MatStepperModule,
    MatExpansionModule, MatDividerModule, MatListModule,
    MatTabsModule, MatGridListModule, MatPaginatorModule,
    MatSortModule, MatDialogModule, MatSnackBarModule,
    MatTooltipModule, MatChipsModule, MatProgressSpinnerModule,
    MatProgressBarModule, MatButtonToggleModule, MatRadioModule,
    MatRippleModule, MatMenuModule, MatBadgeModule, MatTreeModule
  ],
  declarations: []
})
export class MaterialsModule { }
