import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {
  public selected = 'movie';
  constructor() { }

 // ngOnInit() {
  //}

  update(tab: string) {
    this.selected = tab;
  }
}
