import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { DragonCreateModule } from './dragon-create/dragon-create.module';
import { DragonListModule } from './dragon-list/dragon-list.module';
import { DragonReadByIdModule } from './dragon-read-by-id/dragon-read-by-id.module';
import { DragonUpdateModule } from './dragon-update/dragon-update.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DragonCreateModule,
    DragonListModule,
    DragonReadByIdModule,
    DragonUpdateModule,
    MatSnackBarModule
  ]
})
export class DragonModule { }
