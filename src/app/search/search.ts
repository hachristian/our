import { ChangeDetectorRef, Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService, Job } from '../services/data.service';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})
export class SearchPage {

  tags = ["Paid", "Looking"];
  icons = ["cash-outline", "search-circle-outline"];
  paid: boolean;
  looking: boolean;
  college: string;
  department: string;
  jobs: Job[] = [];

  constructor(private dataService: DataService,  private cd: ChangeDetectorRef, private alertCtrl: AlertController, private modalCtrl: ModalController) {
    this.dataService.getJobs().subscribe(res => {
      this.jobs = res;
      this.cd.detectChanges();
    });
  }

  async addJob() {
    const alert = await this.alertCtrl.create({
      header: 'Add Job',
      inputs: [
        {
          name: 'job',
          placeholder: 'Job',
          type: 'text'
        },
        {
          name: 'professor',
          placeholder: 'Professor',
          type: 'textarea'
        },
        {
          name: 'college',
          placeholder: 'College',
          type: 'textarea'
        },
        {
          name: 'department',
          placeholder: 'department',
          type: 'textarea'
        },
        {
          name: 'description',
          placeholder: 'description',
          type: 'textarea'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Add',
          handler: res => {
            this.dataService.addJob({ job: res.job, professor: res.professor, college: res.college, department: res.department, description: res.description});
          }
        }
      ]
    });
 
    await alert.present();
  }
 
  async openJob(job: Job) {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: { id: job.id },
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.8
    });
 
    await modal.present();
  }

  remove(id: number): void {
    this.tags.splice(id, 1);
    this.icons.splice(id, 1);
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
    }, 500);
  }
}