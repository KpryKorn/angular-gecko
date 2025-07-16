import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Crypto, CryptoApiData } from '../../models/crypto';
import { environment } from '../../../environments/environment';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  private http = inject(HttpClient);
  readonly url = environment.PUBLIC_API;

  cryptos = signal<Crypto[]>([]);

  getCryptos(): Observable<Crypto[]> {
    return this.http.get<CryptoApiData[]>(this.url).pipe(
      map((cryptos) => cryptos.map(Crypto.fromApi)),
      tap((cryptos) => this.cryptos.set(cryptos))
    );
  }
}
