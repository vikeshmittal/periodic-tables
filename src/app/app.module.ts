import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbDropdownModule, DragDropModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
