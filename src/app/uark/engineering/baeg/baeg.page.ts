/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baeg',
  templateUrl: './baeg.page.html',
  styleUrls: ['./baeg.page.scss'],
})
export class BaegPage implements OnInit {

  names = [];
  pagename = [];
  images = [];
  title = [];
  department = '';

  constructor() {
  }

  ngOnInit() {
    this.getNamePic();
  }

  getNamePic(){
    fetch('https://campusdata.uark.edu/apiv2/people/listFS?$filter=((BudgetaryUnit+eq+%27BAEG%27)+and+(Classifications+eq+%27Faculty%27))&amp;$orderby=lastName+asc')
    .then(result => result.json())
    .then((output) => {
      console.log('Output: ', output);
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let i = 0; i < output.length; i++) {
        this.department = output[0].department;
        this.names.push(output[i].firstName + ' ' + output[i].lastName);
        this.pagename.push(output[i].firstName.toLowerCase() + output[i].lastName.toLowerCase());
        if (output[i].imageDirectory === false) {
          this.images.push('/assets/test.png');
        }
        else{
          this.images.push('https://campusdata.uark.edu/resources/images/FacultyStaffProfile/'+output[i].image);
        }
      }
  }).catch(err => console.error(err));
  }

}
