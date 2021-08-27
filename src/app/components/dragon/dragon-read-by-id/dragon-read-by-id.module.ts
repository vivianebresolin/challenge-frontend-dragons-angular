import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { DragonReadByIdComponent } from './dragon-read-by-id.component';

@NgModule({
  declarations: [DragonReadByIdComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    RouterModule
  ],
  exports: [DragonReadByIdComponent]
})
export class DragonReadByIdModule { }
