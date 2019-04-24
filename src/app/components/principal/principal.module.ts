import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { ClarityModule } from '@clr/angular';
import { HomeModule } from '../home/home.module';
import { PrincipalComponent } from './principal.component';

@NgModule({
  declarations: [PrincipalComponent],
  imports: [
    CommonModule,
    ClarityModule,
    PrincipalRoutingModule
  ],
  exports: [PrincipalComponent]
})
export class PrincipalModule { }
