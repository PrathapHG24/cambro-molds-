import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-present-plc-data',
  templateUrl: './present-plc-data.component.html',
  styleUrls: ['./present-plc-data.component.css']
})
export class PresentPlcDataComponent {
  plcData: any = {};
  errorMessage: string = '';
  activeButton: string | null = null; // To track the active button

  constructor(private http: HttpClient, private router: Router) {}

  // Method to fetch PLC data based on the machine number
  fetchPlcData(machine: string): void {
    this.activeButton = machine; // Set the active button
    const url = `http://localhost:8083/readDataFromPlc`; // Same URL for all machines
    const payload = {
      tags: this.getTagsForMachine(machine) // Get the tags based on the machine
    };

    this.http.post<any>(url, payload).subscribe(
      (response) => {
        this.plcData = response.data;
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Failed to fetch PLC data. Please try again.';
        console.error('Error fetching PLC data:', error);
      }
    );
  }

  // Helper method to get tags based on the machine
  private getTagsForMachine(machine: string): string[] {
    const baseTags = [
      "Cape", "Case_GTIN_Barcode", "Case_GTIN_Readable", "Case_GTIN_Text", "Case_Qty", "Color_Description", 
      "Comment_Line_1", "Comment_Line_2", "Comment_Line_3", "Gross_Weight_Kgs", "Gross_Weight_Lbs", 
      "Item_UPC", "Item_UPC_Text", "Label_Identifier", "Literal_Label_Name", "Literal_SO_Number", 
      "Production_Code", "Registered_Trademark", "Resource_Item_Description", "Resource_Item_Nu", 
      "Resource_Item_Number_Barcode", "Result", "ResultDescription", "Schedule_Olsn_Release", 
      "Schedule_Olsn_Release_Barcode", "SO_Number", "SO_Number_Barcode"
    ];

    // For M1, return the base tags as-is
    if (machine === 'M1') {
      return baseTags;
    }

    // For M2, M3, M4, append the machine number with an underscore to each tag
    const machineNumber = machine.replace('M', ''); // Extract the number (e.g., '2' from 'M2')
    return baseTags.map(tag => {
      if (tag.startsWith('Comment_Line_')) {
        // Append underscore and machine number to Comment_Line tags
        return `${tag}_${machineNumber}`;
      } else {
        // Append machine number directly to other tags
        return `${tag}${machineNumber}`;
      }
    });
  }

  // Method to navigate back to the home page
  navigateToHome(): void {
    this.router.navigate(['/']);
  }

  // Helper method to get object keys for iteration
  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}