import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  readonly venueName = 'Sarasu Thirumana Mahal';

  readonly venueAddress = 'Sarasu Thirumana Mahal, Avalpoondurai Road, Erode, Tamil Nadu 638115';

  readonly mapsSearchUrl =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.venueAddress)}`;

  readonly directionsUrl =
    `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(this.venueAddress)}`;

  readonly mapEmbedUrl: SafeResourceUrl;

  constructor(private readonly sanitizer: DomSanitizer) {
    this.mapEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.google.com/maps?q=${encodeURIComponent(this.venueAddress)}&output=embed`
    );
  }
}
