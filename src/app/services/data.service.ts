import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Job {
  id?: string;
  job: string;
  professor: string;
  college: string;
  department: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getJobs(): Observable<Job[]> {
    const jobsRef = collection(this.firestore, 'jobs');
    return collectionData(jobsRef, { idField: 'id'}) as Observable<Job[]>;
  }
 
  getJobById(id): Observable<Job> {
    const jobDocRef = doc(this.firestore, `jobs/${id}`);
    return docData(jobDocRef, { idField: 'id' }) as Observable<Job>;
  }
 
  addJob(job: Job) {
    const jobsRef = collection(this.firestore, 'jobs');
    return addDoc(jobsRef, job);
  }
 
  deleteJob(job: Job) {
    const jobDocRef = doc(this.firestore, `jobs/${job.id}`);
    return deleteDoc(jobDocRef);
  }
 
  updateJob(job: Job) {
    const jobDocRef = doc(this.firestore, `jobs/${job.id}`);
    return updateDoc(jobDocRef, { job: job.job, professor: job.professor, college: job.college, department: job.department, description: job.description});
  }
}
