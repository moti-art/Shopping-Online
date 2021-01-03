import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { LayoutComponent } from '../components/layout/layout.component';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
