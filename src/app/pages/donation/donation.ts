import { Component } from '@angular/core';
import { Navbar } from '../../reuseable/navbar/navbar';
import { Footer } from '../../footer/footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-donation',
  imports: [Navbar, Footer],
  templateUrl: './donation.html',
  styleUrl: './donation.css',
})
export class Donation {}
