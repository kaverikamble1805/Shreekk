import { Component } from '@angular/core';
import { Navbar } from '../../reuseable/navbar/navbar';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Footer } from '../../footer/footer/footer';
import { VolunteeringService } from '../../core/service/volunteering-service';

@Component({
  selector: 'app-volunteering',
  imports: [Navbar, CommonModule, ReactiveFormsModule, Footer],
  templateUrl: './volunteering.html',
  styleUrl: './volunteering.css',
})
export class Volunteering {
  // volunteerForm!: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.volunteerForm = this.fb.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     phone: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     address: ['', Validators.required],
  //     city: ['', Validators.required],
  //     state: ['', Validators.required],
  //     country: ['', Validators.required],
  //     postcode: ['', Validators.required],
  //     thoughts: [''],
  //     consent: [false, Validators.requiredTrue],
  //   });
  // }

  // submitForm(): void {
  //   if (this.volunteerForm.valid) {
  //     console.log(this.volunteerForm.value);

  //     alert('Volunteer Registration Submitted Successfully');

  //     this.volunteerForm.reset();
  //   } else {
  //     this.volunteerForm.markAllAsTouched();
  //   }
  // }
  volunteerForm!: FormGroup;

  isSubmitting = false;

  isSuccessModal = false;
  modalTitle = '';
  modalMessage = '';

  constructor(
    private fb: FormBuilder,
    private volunteerService: VolunteeringService,
  ) {}

  ngOnInit(): void {
    this.volunteerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],

      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],

      email: ['', [Validators.required, Validators.email]],

      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      zipCode: ['', Validators.required],

      subject: ['', Validators.required],

      thoughts: ['', Validators.required],

      consent: [false, Validators.requiredTrue],
    });
  }
  submitForm(): void {
    if (this.volunteerForm.invalid) {
      this.volunteerForm.markAllAsTouched();

      this.modalTitle = 'Validation Error';
      this.modalMessage = 'Please fill all required fields correctly before submitting.';

      this.isSuccessModal = true;

      return;
    }

    const payload = {
      FirstName: this.volunteerForm.value.firstName,
      LastName: this.volunteerForm.value.lastName,
      PhoneNo: this.volunteerForm.value.phone,
      EmailId: this.volunteerForm.value.email,
      Address: this.volunteerForm.value.address,
      City: this.volunteerForm.value.city,
      Country: this.volunteerForm.value.country,
      ZipCode: this.volunteerForm.value.zipCode,
      Subject: this.volunteerForm.value.subject,
      Thoughts: this.volunteerForm.value.thoughts,
      Consent: this.volunteerForm.value.consent ? 1 : 0,
    };

    this.isSubmitting = true;

    this.volunteerService.addVolunteer(payload).subscribe({
      next: (res: any) => {
        this.isSubmitting = false;

        this.modalTitle = 'Success';
        this.modalMessage = res.message || 'Volunteer registration submitted successfully.';

        this.isSuccessModal = true;

        this.volunteerForm.reset();

        this.volunteerForm.patchValue({
          consent: false,
        });
      },

      error: (err: any) => {
        this.isSubmitting = false;

        this.modalTitle = 'Error';

        this.modalMessage =
          err?.error?.message || 'Failed to submit volunteer registration. Please try again.';

        this.isSuccessModal = true;

        console.error(err);
      },
    });
  }

  get f() {
    return this.volunteerForm.controls;
  }
}
