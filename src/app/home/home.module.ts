import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { TaskModule } from '../task/task.module';
import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TaskModule,
    SharedModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
