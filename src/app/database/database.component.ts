import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {

  pokemon: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllPokemon().subscribe(
      (data: any) => {     
        this.pokemon = data.results;
      },
      err => console.log(err)
    );
  }

  public getImage(id: number) {
    return "https://pokeres.bastionbot.org/images/pokemon/" + id + ".png";
  }

}
