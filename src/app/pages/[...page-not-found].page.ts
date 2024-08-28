import { DOCUMENT, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: `
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">404</h1>
          <p class="py-6">Oops! The page you are looking for does not exist.</p>
          <button class="btn btn-primary" (click)="handleRedirect()">
            Go to Home
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export default class NotFoundComponent {
  private router = inject(Router);
  private location = inject(Location);
  private document = inject(DOCUMENT);

  handleRedirect() {
    const referrer = this.document.referrer;
    if (referrer && !referrer.includes(window.location.origin)) {
      this.router.navigate(['/']);
    } else {
      this.location.back();
    }
  }
}
