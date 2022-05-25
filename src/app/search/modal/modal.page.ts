import { Component, Input, OnInit } from '@angular/core';
import { Job, DataService } from '../services/data.service';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() id: string;
  job: Job = null;

  constructor(private dataService: DataService, private modalCtrl: ModalController, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.dataService.getJobById(this.id).subscribe(res => {
      this.job = res;
    });
  }

  async deleteJob() {
    await this.dataService.deleteJob(this.job);
    this.modalCtrl.dismiss();
  }

  async updateJob() {
    await this.dataService.updateJob(this.job);
    const toast = await this.toastCtrl.create({
      message: 'Note updated!.',
      duration: 2000
    });
    toast.present();
  }

}
