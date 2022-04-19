import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cs-professors',
  templateUrl: './cs-professors.page.html',
  styleUrls: ['./cs-professors.page.scss'],
})
export class CsProfessorsPage implements OnInit {

  names = [];
  images = [];

  constructor() {
  }

  ngOnInit() {
    this.getNamePic();
  }

  getNamePic(){
    fetch('https://campusdata.uark.edu/apiv2/people/listFS?$filter=((Classifications+eq+%27Faculty%27)+and+(BudgetaryUnit+eq+%27csce%27))&$orderby=firstName+asc')
    .then(result => result.json())
    .then((output) => {
        console.log('Output: ', output);
        for (let i = 0; i < output.length; i++) {
          this.names.push(output[i].firstName + " " + output[i].lastName);
          //  this.names.push(output[i].department)
          this.images.push("https://campusdata.uark.edu/resources/images/FacultyStaffProfile/"+output[i].image);
        }
    }).catch(err => console.error(err));
  }
}
