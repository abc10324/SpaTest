import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [
    NavComponent,
    MainContentComponent
  ]
})
export class AppComponent {

}
