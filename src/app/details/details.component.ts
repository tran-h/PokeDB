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
  types: any[] = [];

  constructor(private ar: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.paramMap.get("id");

    this.dataService.getPokemon(this.id).subscribe(
      (data: any) => {      
        this.types = data.types;
      },
      err => console.log(err)
    );
  }

  public getImage(id: number) {
    return "https://pokeres.bastionbot.org/images/pokemon/" + this.id + ".png";
  }

}
