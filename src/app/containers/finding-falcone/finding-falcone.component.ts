import { Component, OnInit } from "@angular/core";

import { ApiService } from "../../services/api.service";

import { IPlanet } from "../../models/IPlanet";
import { IVehicle } from "../../models/IVehicle";
import { SelectedDestination } from "../../models/SelectedDestination";

@Component({
  selector: "finding-falcone",
  templateUrl: "./finding-falcone.component.html",
  styleUrls: ["./finding-falcone.component.scss"]
})
export class FindingFalconeComponent implements OnInit {
  private token: string;
  private planets: IPlanet[];
  private selectedDestinations: SelectedDestination[] = [];
  private vehicles: IVehicle[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getToken();
    this.getPlanets();
    this.getVehicles();
  }

  getToken(): void {
    this.apiService.getToken().subscribe(token => {
      console.log(`token = `, token);
      this.token = token;
    });
  }

  getPlanets(): void {
    this.apiService.getPlanets().subscribe(planets => {
      console.log(`planets = `, planets);
      this.planets = planets;
    });
  }

  getVehicles(): void {
    this.apiService.getVehicles().subscribe(vehicles => {
      console.log(`vehicles = `, vehicles);
      this.vehicles = vehicles;
    });
  }

  selectedDestination(selectedDestination: SelectedDestination): void {
    this.maintainSelectedDestinations(selectedDestination);
  }

  private maintainSelectedDestinations(
    selectedDestination: SelectedDestination
  ): void {
    if (
      this.selectedDestinations.find(
        s => s.destinationNumber == selectedDestination.destinationNumber
      )
    ) {
      // delete the selectedDestination if it is already in the list
      this.selectedDestinations = this.selectedDestinations.filter(
        s => s.destinationNumber !== selectedDestination.destinationNumber
      );
    }
    // add
    this.selectedDestinations = [
      ...this.selectedDestinations,
      selectedDestination
    ];
    console.log(`this.selectedDestinations = `, this.selectedDestinations);
  }
}
