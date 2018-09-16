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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.journeyForm = this.formBuilder.group({
      planet: [""],
      food: [""],
      selectedPlanetName: [""]
    });
  }

  processDestination(): void {
    const selectedDest = new SelectedDestination(
      this.destinationNumber,
      this.journeyForm.value.planet,
      this.journeyForm.value.food
    );
    this.selectedPlanetName = this.journeyForm.value.planet;
    this.journeyForm.patchValue({
      selectedPlanetName: this.selectedPlanetName
    });
    this.selectedDestination.emit(selectedDest);
  }
}
