import { Component } from '@angular/core';
// import {ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPage {
  
  tags = ["Paid", "Looking"];
  icons = ["cash-outline", "search-circle-outline"];
  names = [];
  college:string;
  department:string;
  paid:boolean;
  looking:boolean;
  count:number;
  searched:boolean;

  constructor() {
    this.count = 0;
    this.searched = false;
    // this.addNames()
  }

  search() {
    // document.getElementById("1").innerHTML = this.college;
    // document.getElementById("2").innerHTML = this.department;
    this.addNames(this.department)
    this.searched = true
  }

  remove(id: number): void {
    this.tags.splice(id, 1);
    this.icons.splice(id, 1);
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      // this.addNames()
      event.target.complete();
    }, 500);
  }

  addNames(department: string) {
    fetch('https://campusdata.uark.edu/apiv2/people/listFS?$filter=((Classifications+eq+%27Faculty%27)+and+(BudgetaryUnit+eq+%27'+department+'%27))&$orderby=firstName+asc')
    .then(result => result.json())
    .then((output) => {
        console.log('Output: ', output);
        
        if (this.searched) {
          this.names = []
          this.searched = false;
        }
        
        for (let i = 0; i < output.length; i++) {
          this.names.push(output[i].firstName + " " + output[i].lastName);
          //  this.names.push(output[i].department)
        }
    
  }).catch(err => console.error(err));
  }
}
