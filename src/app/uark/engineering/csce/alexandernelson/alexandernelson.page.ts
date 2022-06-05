import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alexandernelson',
  templateUrl: './alexandernelson.page.html',
  styleUrls: ['./alexandernelson.page.scss'],
})
export class AlexandernelsonPage implements OnInit {

  department = '';
  depShort = '';
  email = '';
  pic = '';
  name = '';
  phone = '';

  constructor() {
  }

  ngOnInit() {
    this.getNamePic();
  }

  getNamePic(){
    fetch('https://campusdata.uark.edu/apiv2/people/listFS?$filter=((Uid+eq+%27ahnelson%27))&amp;$orderby=firstName+asc')
    .then(result => result.json())
    .then((output) => {
        this.department = output[0].department;
        this.depShort = this.department.split('-')[0];
        this.email = output[0].email;
        this.phone = output[0].phoneNumber;
        this.pic = 'https://campusdata.uark.edu/resources/images/FacultyStaffProfile/'+output[0].image;
        this.name = output[0].firstName + ' ' + output[0].lastName;
    }).catch(err => console.error(err));
  }
}
