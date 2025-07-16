import { Component, inject, OnInit } from '@angular/core';
import { CryptoService } from '../../../services/crypto/crypto.service';

@Component({
  selector: 'app-tracker-page',
  imports: [],
  templateUrl: './tracker-page.component.html',
})
export class TrackerPageComponent implements OnInit {
  private cryptoService = inject(CryptoService);
  cryptos = this.cryptoService.cryptos;

  ngOnInit(): void {
    this.cryptoService.getCryptos().subscribe();
  }
}
