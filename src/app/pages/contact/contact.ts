import { Component } from '@angular/core';
import { Navbar } from '../../reuseable/navbar/navbar';
import { Footer } from '../../footer/footer/footer';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactUsService } from '../../core/service/contact-us';
import { CommonModule } from '@angular/common';
import { ContactUs } from '../../core/models/contact-us';

@Component({
  selector: 'app-contact',
  imports: [Navbar, Footer, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  selectedService = '';
  contactForm!: FormGroup;

  isSubmitting = false;

  isSuccessModal = false;
  modalTitle = '';
  modalMessage = '';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private contactService: ContactUsService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.selectedService = params['service'] || '';
    });

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      enquiryType: ['', Validators.required],
      message: ['', Validators.required],
    });
    this.route.queryParams.subscribe((params) => {
      const service = params['service'];

      if (service) {
        this.contactForm.patchValue({
          enquiryType: service,
        });
      }
    });
  }

  // submitContactForm(): void {
  //   if (this.contactForm.invalid) {
  //     this.contactForm.markAllAsTouched();

  //     this.modalTitle = 'Validation Error';
  //     this.modalMessage = 'Please fill all required fields correctly before submitting.';

  //     this.isSuccessModal = true;

  //     return;
  //   }
  //   const fullName = this.contactForm.value.name.trim();
  //   const [firstName, ...rest] = fullName.split(' ');

  //   const payload = {
  //     FirstName: firstName,
  //     LastName: rest.join(' '),
  //     EmailId: this.contactForm.value.email,
  //     PhoneNo: this.contactForm.value.phoneNumber,
  //     Message: this.contactForm.value.message,
  //     Subject: this.contactForm.value.enquiryType,
  //     Address: '',
  //   };

  //   this.isSubmitting = true;

  //   this.contactService.addContactUs(payload).subscribe({
  //     next: (res) => {
  //       this.isSubmitting = false;

  //       this.modalTitle = 'Success';
  //       this.modalMessage = 'Your enquiry has been submitted successfully.';
  //       this.isSuccessModal = true;

  //       this.contactForm.reset();
  //     },

  //     error: (err) => {
  //       this.isSubmitting = false;

  //       this.modalTitle = 'Error';
  //       this.modalMessage = err?.error?.message || 'Failed to submit enquiry. Please try again.';

  //       this.isSuccessModal = true;

  //       console.error(err);
  //     },
  //   });
  // }

  submitContactForm(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();

      this.modalTitle = 'Validation Error';
      this.modalMessage = 'Please fill all required fields correctly before submitting.';
      this.isSuccessModal = true;

      return;
    }

    const fullName = this.contactForm.value.name.trim();
    const [firstName, ...rest] = fullName.split(' ');

    const payload = {
      FirstName: firstName,
      LastName: rest.join(' '),
      EmailId: this.contactForm.value.email,
      PhoneNo: this.contactForm.value.phoneNumber,
      Message: this.contactForm.value.message,
      Subject: this.contactForm.value.enquiryType,
      Address: '',
    };

    this.isSubmitting = true;

    this.contactService.addContactUs(payload).subscribe({
      next: (res: any) => {
        console.log('API Response:', res);

        this.isSubmitting = false;

        if (res.success) {
          this.modalTitle = 'Success';
          this.modalMessage = 'Your enquiry has been submitted successfully.';

          this.contactForm.reset();
        } else {
          this.modalTitle = 'Error';
          this.modalMessage = res.message || 'Something went wrong.';
        }

        this.isSuccessModal = true;
      },

      error: (err) => {
        console.error('API Error:', err);

        this.isSubmitting = false;

        this.modalTitle = 'Error';
        this.modalMessage =
          err?.error?.message || 'Failed to submit enquiry. Please try again later.';

        this.isSuccessModal = true;
      },
    });
  }
}
