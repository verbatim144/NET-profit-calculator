import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Currency} from './currency';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private currencyUrl = 'http://localhost:8080/api/';
  constructor (
    private http: HttpClient
  ) { }

  getCurrencies (): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.currencyUrl);
  }

  getCurrency(id: number): Observable<Currency> {
    const url = `${this.currencyUrl}/${id}`;
    return this.http.get<Currency>(url);
  }

  addCurrency(currency: Currency): Observable<Currency> {
    return this.http.post<Currency>(this.currencyUrl, currency, httpOptions);
  }
}
