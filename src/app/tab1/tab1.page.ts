import { Component } from '@angular/core';
// import {ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tab1Page {
  
  tags = ["Paid", "Looking"];
  icons = ["cash-outline", "search-circle-outline"];
  names = [];
  college:string;
  department:string;
  paid:boolean;
  looking:boolean;
  count:number;

  constructor() {
    // const items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
    this.count = 0;
    this.addNames()
  }

  search() {
    document.getElementById("1").innerHTML = this.college;
    document.getElementById("2").innerHTML = this.department;
  }

  remove(id: number): void {
    this.tags.splice(id, 1);
    this.icons.splice(id, 1);
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      this.addNames()
      event.target.complete();
    }, 500);
  }

  addNames() {
    for (let i = 0; i < 10; i++) {
      this.names.push("John Doe " + this.count);
      this.count += 1;
    }
  }

}
