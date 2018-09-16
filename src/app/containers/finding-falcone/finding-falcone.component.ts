import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ApiService } from "../../services/api.service";
import { StateService } from "../../services/state.service";

import { IPlanet } from "../../models/IPlanet";
import { IVehicle } from "../../models/IVehicle";
import { SelectedDestination } from "../../models/SelectedDestination";

import { FindFalconeRequest } from "../../models/FindFalconeRequest";

@Component({
  selector: "finding-falcone",
  templateUrl: "./finding-falcone.component.html",
  styleUrls: ["./finding-falcone.component.scss"]
})
export class FindingFalconeComponent implements OnInit {
  token: any;
  planets: IPlanet[];
  availablePlanets: IPlanet[];
  selectedDestinations: SelectedDestination[] = [];
  vehicles: IVehicle[];
  timeTaken = 0;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private stateService: StateService
  ) {}

  ngOnInit() {
    this.getToken();
    this.getPlanets();
    this.getVehicles();
  }

  getToken(): void {
    this.apiService.getToken().subscribe(token => {
      this.token = token.token;
    });
  }

  getPlanets(): void {
    this.apiService.getPlanets().subscribe(planets => {
      this.planets = [...planets];
      this.availablePlanets = [...planets];
    });
  }

  getVehicles(): void {
    this.apiService.getVehicles().subscribe(vehicles => {
      this.vehicles = vehicles;
    });
  }

  selectedDestination(selectedDestination: SelectedDestination): void {
    this.maintainSelectedDestinations(selectedDestination);
    this.maintainAvailablePlanets(selectedDestination);
    this.maintainVehicles(selectedDestination);
    this.timeTaken = this.calculateTimeTaken();
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

  private maintainAvailablePlanets(
    selectedDestination: SelectedDestination
  ): void {
    // If a planet has been selected, remove it from the list if available planets
    this.availablePlanets = this.availablePlanets.filter(
      planet => planet.name !== selectedDestination.planetName
    );
  }

  private maintainVehicles(selectedDestination: SelectedDestination): void {
    // If a vehicle has been selected, reduce it's available count
    const vehicleName: string = selectedDestination.vehicleName;
    for (let vehicle of this.vehicles) {
      if (vehicle.name === vehicleName && vehicle.total_no > 0) {
        vehicle.total_no--;
      }
    }
  }

  private calculateTimeTaken(): number {
    let timeTaken: number = 0;

    for (let destination of this.selectedDestinations) {
      let planet = this.planets.find(pl => pl.name === destination.planetName);
      let vehicle = this.vehicles.find(
        ve => ve.name === destination.vehicleName
      );
      timeTaken += planet.distance / vehicle.speed;
    }

    return timeTaken;
  }

  find(): void {
    let request: FindFalconeRequest = new FindFalconeRequest();
    let planet_names = new Array<string>();
    let vehicle_names = new Array<string>();

    for (let destination of this.selectedDestinations) {
      planet_names.push(destination.planetName);
      vehicle_names.push(destination.vehicleName);
    }

    request.token = this.token;
    request.planet_names = [...planet_names];
    request.vehicle_names = [...vehicle_names];

    this.stateService.setFindFalconeRequest(request);
    this.stateService.setTimeTaken(this.calculateTimeTaken());

    this.router.navigate(["/result"]);
  }
}
