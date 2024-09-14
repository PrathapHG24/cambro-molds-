import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
})
export class HelpComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  zone7RoboOldBackupHelp(): void {
    // Open the PDF in a new tab
    window.open('assets/docs/Robot Reset  procedure  - Import backup.pdf', '_blank');
  }
  zone7RoboResetHelp(): void {
    // Open the PDF in a new tab
    window.open('assets/docs/Robot Reset  procedure  -  Zone7-reset.pdf', '_blank');
  }

  zone8RoboOldBackupHelp(): void {
    // Open the PDF in a new tab
    window.open('assets/docs/Robot Reset  procedure  - Import backup.pdf', '_blank');
  }

  zone8RoboResetHelp(): void {
    // Open the PDF in a new tab
    window.open('assets/docs/Robot Reset  procedure  -  Zone8-reset.pdf', '_blank');
  }

  zone8RoboPartstuckHelp(): void {
    // Open the PDF in a new tab
    window.open('assets/docs/Robot Reset  procedure  -  Zone8-part stuck.pdf', '_blank');
  }

  zone8RoboPartfallHelp(): void {
    // Open the PDF in a new tab
    window.open('assets/docs/Robot Reset  procedure  - Zone8-partfall.pdf', '_blank');
  }
  
  zone9RoboOldBackup(): void {
    // Open the PDF in a new tab
    window.open('assets/docs/Robot Reset  procedure  - Import backup.pdf', '_blank');
  }

  zone9RoboResetHelp(): void {
    // Open the PDF in a new tab
    window.open('assets/docs/Robot Reset  procedure  - Zone9-reset.pdf', '_blank');
  }

  zone9RoboParthitHelp(): void {
    // Open the PDF in a new tab
    window.open('assets/docs/Robot Reset  procedure  -  Zone9-part hit.pdf', '_blank');
  }

}
