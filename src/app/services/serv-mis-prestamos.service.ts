import { Injectable } from '@angular/core';
import { Libro } from '../interfaces/libro';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServMisPrestamosService {

  prestamos = [
    {
      "id_libro": 18,
      "id_prestamo" : 1,
      "isbn": "8493318639",
      "titulo": "El universo de Star Trek",
      "autores": "Adolfo Pérez Agustí"
    },
    {
      "id_libro": 23,
      "id_prestamo" : 2,
      "isbn": "8478887423",
      "titulo": "Harry Potter y la Orden del Fénix",
      "autores": "J. K. Rowling, Gemma Rovira Ortega"
    }
  ]

  constructor(private http:HttpClient) { }

  public getAll():Observable<Libro[]>{
    return this.http.get<Libro[]>(`${environment.apiURL}/prestamos`);
  }

  public add(libro:Libro) :Observable<Libro>{
    return this.http.post<Libro>(`${environment.apiURL}/prestamos`,libro);
  }

  public delete(id_prest: number) :Observable<Libro> {
    return this.http.delete<Libro>(`${environment.apiURL}/prestamos?id=${id_prest}`);

    
  }


}
