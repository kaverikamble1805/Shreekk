import { Component } from '@angular/core';
import { Navbar } from '../../reuseable/navbar/navbar';
import { RouterLink } from '@angular/router';
import { Footer } from '../../footer/footer/footer';

@Component({
  selector: 'app-services',
  imports: [Navbar, RouterLink, Footer],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {}
