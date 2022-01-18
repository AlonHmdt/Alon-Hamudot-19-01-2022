import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  toggleControl = new FormControl(false);
  @Output() themeToggled = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe(value => {
      this.themeToggled.emit(value);
    });
  }

}
