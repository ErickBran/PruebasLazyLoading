import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    ClarityModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
