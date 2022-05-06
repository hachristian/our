/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cheg',
  templateUrl: './cheg.page.html',
  styleUrls: ['./cheg.page.scss'],
})
export class ChegPage implements OnInit {

  names = [];
  images = [];

  constructor() {
  }

  ngOnInit() {
    this.getNamePic();
  }

  getNamePic(){
    fetch('https://campusdata.uark.edu/apiv2/people/listFS?$filter=((BudgetaryUnit+eq+%27CHEG%27)+and+(Classifications+eq+%27Faculty%27))&amp;$orderby=lastName+asc')
    .then(result => result.json())
    .then((output) => {
        console.log('Output: ', output);
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < output.length; i++) {
          this.names.push(output[i].firstName + ' ' + output[i].lastName);
          //  this.names.push(output[i].department)
          this.images.push('https://campusdata.uark.edu/resources/images/FacultyStaffProfile/'+output[i].image);
        }
    }).catch(err => console.error(err));
  }

}
