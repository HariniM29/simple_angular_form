import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData: any = {};

  constructor(private dataService: DataService) { }

  submitForm() {
    this.dataService.submitFormData(this.formData).subscribe(
      response => {
        console.log('Form data submitted successfully:', response);
      },
      error => {
        console.error('Error submitting form data:', error);
      }
    );
  }
}
