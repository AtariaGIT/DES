import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ataria Web';

  selectedSection: string = 'inicio';

  onSectionSelected(section: string) {
    this.selectedSection = section;
  }
}