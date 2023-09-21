import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() sectionSelected = new EventEmitter<string>();

  selectSection(section: string) {
    this.sectionSelected.emit(section);
  }
}
