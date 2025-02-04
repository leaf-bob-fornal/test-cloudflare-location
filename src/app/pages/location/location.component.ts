import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  standalone: false,
  
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  timeoutId: any = null;

  city: string = '';
  state: string = '';
  zipcode: string = '';
  ip: string = '';

  constructor() {
    this.timeoutId = setTimeout(() => {
      const data = document.querySelector('body');
      if (data?.hasAttribute('data-ip')) {
        this.city = data?.getAttribute('data-city') || 'Issue Capturing';
        this.state = data?.getAttribute('data-state') || 'Issue Capturing';
        this.zipcode = data?.getAttribute('data-zipcode') || 'Issue Capturing';
        this.ip = data?.getAttribute('data-ip') || 'Issue Capturing';
        clearTimeout(this.timeoutId);
        console.log('timeout cleared');
      }
    }, 1000);
  }
}
