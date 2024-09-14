import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'cambromolds';
  batch1: any = {};
  batch2: any = {};
  batch3: any = {};
  batch4: any = {};
  plcIpAddress = '10.60.85.21';  // Replace with the actual PLC IP address
  wifiIpAddress = '8.8.8.8';  // Replace with your Wi-Fi router IP address
  isReachable: boolean | null = null;
  isWifiReachable: boolean | null = null;  // For Wi-Fi connection
  private intervalId: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchBatchStatus1();
    this.fetchBatchStatus2();
    this.fetchBatchStatus3();
    this.fetchBatchStatus4();
    this.checkIpAddress();
   
    // Set up interval to check both IP and Wi-Fi connection every minute
    this.intervalId = setInterval(() => {
      this.checkIpAddress();
    }, 10000);
  }

  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
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
      window.location.href = url + '?scheduleId=' + batch.scheduleId;
    } else {
      window.location.href = url; // Navigate to the specified URL
    }
  }

  navigateToHelp(): void {
    window.location.href = '/help'; // Navigate to the help page
  }

  openPDF(): void {
    // Open the PDF in a new tab
    window.open('assets/docs/Batch_instructions.pdf', '_blank');
  }

  zone7Robo(): void {
    // Open the PDF in a new tab
    window.open('assets/docs/zone7Robo.pdf', '_blank');
  }

  zone8Robo(): void {
    // Open the PDF in a new tab
    window.open('assets/docs/zone8Robo.pdf', '_blank');
  }

  zone9Robo(): void {
    // Open the PDF in a new tab
    window.open('assets/docs/zone9Robo.pdf', '_blank');
  }


  checkIpAddress(): void {
    // Check PLC reachability
    this.http.get<{ ip: string, reachable: boolean }>(`http://localhost:8083/ping?ip=${this.plcIpAddress}`).subscribe(
      (response) => this.isReachable = response.reachable,
      () => this.isReachable = false
    );
  
    // Check Wi-Fi reachability
    this.http.get<{ ip: string, reachable: boolean }>(`http://localhost:8083/pingWifi?wifi_ip_address=${this.wifiIpAddress}`).subscribe(
      (response) => this.isWifiReachable = response.reachable,
      () => this.isWifiReachable = false
    );
  }
}
