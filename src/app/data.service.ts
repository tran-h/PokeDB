import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private API_SERVER = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private httpClient: HttpClient) { }

  public getAllPokemon(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.API_SERVER + "?limit=151");
  }

  public getPokemon(id: number): Observable<any[]> {
    return this.httpClient.get<any[]>(this.API_SERVER + id);
  }
}
