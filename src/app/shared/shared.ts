
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shared',
  standalone: true,
  imports: [RouterModule], 
  templateUrl: './shared.html',
  styleUrls: ['./shared.scss']
})
export class Shared {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}