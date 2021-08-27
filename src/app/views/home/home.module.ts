import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './home.component';
import { DragonListModule } from 'src/app/components/dragon/dragon-list/dragon-list.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    DragonListModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
