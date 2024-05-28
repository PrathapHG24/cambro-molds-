import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'cambromolds';
  batch1: any = {};
  batch2: any = {};
  batch3: any = {};
  batch4: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchBatchStatus1();
    this.fetchBatchStatus2();
    this.fetchBatchStatus3();
    this.fetchBatchStatus4();
  }

  fetchBatchStatus1(): void {
    this.http
      .get<{ status: string }>('https://cambromachine:9091/user-event/batch-status')
      .subscribe(
        (result) => {
          this.batch1 = result;
        },
        (error) => {
          console.error('Failed to fetch batch status:', error);
        }
      );
  }
  fetchBatchStatus2(): void {
    this.http
      .get<{ status: string }>('https://cambromachine:9092/user-event/batch-status')
      .subscribe(
        (result) => {
          this.batch2 = result;
        },
        (error) => {
          console.error('Failed to fetch batch status:', error);
        }
      );
  }
  fetchBatchStatus3(): void {
    this.http
      .get<{ status: string }>('https://cambromachine:9093/user-event/batch-status')
      .subscribe(
        (result) => {
          this.batch3 = result;
        },
        (error) => {
          console.error('Failed to fetch batch status:', error);
        }
      );
  }
  fetchBatchStatus4(): void {
    this.http
      .get<{ status: string }>('https://cambromachine:9094/user-event/batch-status')
      .subscribe(
        (result) => {
          this.batch4 = result;
        },
        (error) => {
          console.error('Failed to fetch batch status:', error);
        }
      );
  }

  openApplication(url: string, batch: any): void {
    if (batch.isBatchRunning) {
      //window.open(url + '?scheduleId=' + batch.scheduleId);
      window.location.href = url + '?scheduleId=' + batch.scheduleId;
    } else {
      window.location.href = url; // Navigate to the specified URL
    }
  }
}
