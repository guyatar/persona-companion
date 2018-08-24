import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  isShowMenu: boolean = false;

  toggleMenu() {
    this.isShowMenu = !this.isShowMenu;
  }

  constructor() { }

  ngOnInit() {
  }

}
