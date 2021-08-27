import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { DragonListComponent } from './dragon-list.component';

@NgModule({
  declarations: [DragonListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    RouterModule
  ],
  exports: [DragonListComponent]
})
export class DragonListModule { }
