import { Component } from '@angular/core';
import { Navbar } from '../../layout/navbar/navbar';
import { Hero } from './components/hero/hero';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}
