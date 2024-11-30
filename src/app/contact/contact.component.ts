import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
  };
  
  submitForm() {
    console.log('Form Submitted!', this.contactData);
    alert('Thank you for contacting us! We will get back to you soon.');
    this.contactData = { name: '', email: '', message: '' }; // Clear the form
  }
}
