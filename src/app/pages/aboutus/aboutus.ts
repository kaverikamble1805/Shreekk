import { Component } from '@angular/core';
import { Footer } from '../../footer/footer/footer';
import { Navbar } from '../../reuseable/navbar/navbar';

@Component({
  selector: 'app-aboutus',
  imports: [Footer,Navbar],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css',
})
export class Aboutus {}
