import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private API_SERVER = "https://pokeapi.co/api/v2/pokemon/?limit=151";

  constructor(private httpClient: HttpClient) { }

  public getAllPokemon() {
    return this.httpClient.get(this.API_SERVER);
  }
}
