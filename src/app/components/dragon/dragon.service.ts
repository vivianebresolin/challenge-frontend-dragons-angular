import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dragon } from './dragon.model';
import { sortDragonsByName } from '../../../utils/sort-dragons-by-name';

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  apiBaseUrl = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showPopUpMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(newDragon: Dragon): Observable<Dragon> {
    return this.http.post<Dragon>(this.apiBaseUrl, newDragon)
  }

  read(): Observable<Dragon[]> {
    return this.http
      .get<Dragon[]>(this.apiBaseUrl)
      .pipe(
        map((dragons) => 
          dragons.sort((dragonA, dragonB) => sortDragonsByName(dragonA, dragonB))
        )
      );
  }

  readById(id: string): Observable<Dragon> {
    return this.http.get<Dragon>(`${this.apiBaseUrl}/${id}`);
  }

  update(dragon: Dragon): Observable<Dragon> {
    return this.http.put<Dragon>(`${this.apiBaseUrl}/${dragon.id}`, dragon)
  }

  delete(id: string): Observable<Dragon> {
    return this.http.delete<Dragon>(`${this.apiBaseUrl}/${id}`);
  }
}
