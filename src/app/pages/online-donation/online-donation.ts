import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Navbar } from '../../reuseable/navbar/navbar';
import { Footer } from '../../footer/footer/footer';

@Component({
  selector: 'app-online-donation',
  standalone: true,
  imports: [Navbar, Footer, CommonModule, ReactiveFormsModule],
  templateUrl: './online-donation.html',
  styleUrl: './online-donation.css',
})
export class OnlineDonation {
  donationForm!: FormGroup;

  donationAmounts = [1001, 501, 251, 108, 51, 25, 11];

  selectedAmount: any = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.donationForm = this.fb.group({
      city: [''],
      state: [''],
      postcode: [''],
      donationAmount: [''],
      frequency: [''],
      cardNumber: [''],
      giftAid: [false],
    });
  }

  selectAmount(amount: any) {
    this.selectedAmount = amount;

    if (amount !== 'Custom') {
      this.donationForm.patchValue({
        donationAmount: amount,
      });
    } else {
      this.donationForm.patchValue({
        donationAmount: '',
      });
    }
  }
}
