import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";

import { IPlanet } from "../../models/IPlanet";
import { IVehicle } from "../../models/IVehicle";
import { SelectedDestination } from "../../models/SelectedDestination";

@Component({
  selector: "journey-selector",
  templateUrl: "./journey-selector.component.html",
  styleUrls: ["./journey-selector.component.scss"]
})
export class JourneySelectorComponent implements OnInit {
  @Input()
  destinationNumber: number;

  @Input()
  planets: IPlanet[];

  @Input()
  vehicles: IVehicle[];

  @Output()
  selectedDestination = new EventEmitter<SelectedDestination>();

  journeyForm: FormGroup;
  selectedPlanetName: string;
  displaySelectedVehicleErrorMessage: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.journeyForm = this.formBuilder.group({
      planet: [""],
      vehicle: [""],
      selectedPlanetName: [""]
    });
  }

  processDestination(): void {
    if (!this.validateVehicle()) {
      return;
    }

    const selectedDest = new SelectedDestination(
      this.destinationNumber,
      this.journeyForm.value.planet,
      this.journeyForm.value.vehicle
    );
    this.selectedPlanetName = this.journeyForm.value.planet;
    this.journeyForm.patchValue({
      selectedPlanetName: this.selectedPlanetName
    });
    this.emitSelectedDestination(selectedDest);
  }

  emitSelectedDestination(selectedDest: SelectedDestination): void {
    this.selectedDestination.emit(selectedDest);
  }

  validateVehicle(): boolean {
    this.displaySelectedVehicleErrorMessage = false;

    const selectedVehicleName = this.journeyForm.value.vehicle;
    const selectedVehicle: IVehicle = this.vehicles.find(
      v => v.name === selectedVehicleName
    );

    if (selectedVehicle.total_no === 0) {
      this.displaySelectedVehicleErrorMessage = true;
      return false;
    }

    return true;
  }
}
