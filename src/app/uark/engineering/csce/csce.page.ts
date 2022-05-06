/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csce',
  templateUrl: './csce.page.html',
  styleUrls: ['./csce.page.scss'],
})
export class CscePage implements OnInit {

  names = [];
  pagename = [];
  images = [];
  title = [];

  constructor() {

  }

  ngOnInit() {
    this.getNamePic();
  }

  getNamePic(){
    fetch('https://campusdata.uark.edu/apiv2/people/listFS?$filter=((BudgetaryUnit+eq+%27CSCE%27)+and+(Classifications+eq+%27Faculty%27))&amp;$orderby=lastName+asc')
    .then(result => result.json())
    .then((output) => {
        console.log('Output: ', output);
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < output.length; i++) {
          // let lowercaseFirstName: output[i].firstName.charAt(0).toLowerCase();
          this.names.push(output[i].firstName + ' ' + output[i].lastName);
          this.pagename.push(output[i].firstName.toLowerCase() + output[i].lastName.toLowerCase());
          this.title.push(output[i].title);
          this.images.push('https://campusdata.uark.edu/resources/images/FacultyStaffProfile/'+output[i].image);
        }
    }).catch(err => console.error(err));
  }
}
