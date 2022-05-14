import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: any;
  height: any;
  weight: any;
  types: any[] = [];
  abilities: any[] = [];
  stats: any[] = [];
  moves: any[] = [];

  constructor(private ar: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.paramMap.get("id");

    this.dataService.getPokemon(this.id).subscribe(
      (data: any) => {     
        this.height = data.height;
        this.weight = data.weight;
        this.types = data.types;
        this.abilities = data.abilities;
        this.stats = data.stats;
        this.moves = data.moves;
      },
      err => console.log(err)
    );
  }

  public getImage(id: number) {
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + this.id + ".png";
  }

}
