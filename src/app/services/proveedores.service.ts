import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  private apiUrl = 'http://localhost/proyecto-construccion-back/providers_api.php';

  constructor(private http: HttpClient)
  {

  }

  getData(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(`${this.apiUrl}`);
  }
}
