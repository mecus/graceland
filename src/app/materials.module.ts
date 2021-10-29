import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { CdkTreeModule } from '@angular/cdk/tree';

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
    MatSliderModule, MatSidenavModule, MatSlideToggleModule,
    MatBottomSheetModule, CdkTreeModule
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
    MatRippleModule, MatMenuModule, MatBadgeModule, MatTreeModule,
    MatSliderModule, MatSidenavModule, MatSlideToggleModule,
    MatBottomSheetModule, CdkTreeModule
  ],
  declarations: []
})
export class MaterialsModule { }
