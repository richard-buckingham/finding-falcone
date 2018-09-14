import { Component, OnInit } from "@angular/core";

import { ApiService } from "../../services/api.service";

import { IPlanet } from "../../models/IPlanet";

@Component({
  selector: "finding-falcone",
  templateUrl: "./finding-falcone.component.html",
  styleUrls: ["./finding-falcone.component.scss"]
})
export class FindingFalconeComponent implements OnInit {
  private token: string;
  private planets: IPlanet[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getToken().subscribe(token => {
      console.log(`token = `, token);
      this.token = token;
    });

    this.apiService.getPlanets().subscribe(planets => {
      console.log(`planets = `, planets);
      this.planets = planets;
    });
  }
}
