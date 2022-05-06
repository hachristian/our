import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeg',
  templateUrl: './meeg.page.html',
  styleUrls: ['./meeg.page.scss'],
})
export class MeegPage implements OnInit {

  names = [];
  images = [];

  constructor() {
  }

  ngOnInit() {
    this.getNamePic();
  }

  getNamePic(){
    // eslint-disable-next-line max-len
    fetch('https://campusdata.uark.edu/apiv2/people/listFS?$filter=((BudgetaryUnit+eq+%27MEEG%27)+and+(Classifications+eq+%27Faculty%27))&amp;$orderby=lastName+asc')
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
