import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  currentYear = signal(new Date().getFullYear());
  isDarkMode = signal(false);

  toggleDarkMode() {
    const html = document.querySelector('html');
    const currentMode = this.isDarkMode();

    if (currentMode) {
      html?.classList.remove('dark');
      html?.setAttribute('data-theme', 'light');
      this.isDarkMode.set(false);
    } else {
      html?.classList.add('dark');
      html?.setAttribute('data-theme', 'coffee');
      this.isDarkMode.set(true);
    }
  }
}
