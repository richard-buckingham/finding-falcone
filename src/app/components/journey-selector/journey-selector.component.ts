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

  public journeyForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.journeyForm = this.formBuilder.group({
      planet: [""],
      food: [""]
    });
  }

  processDestination(): void {
    const selectedDest = new SelectedDestination(
      this.destinationNumber,
      this.journeyForm.value.planet,
      this.journeyForm.value.food
    );
    //console.log("selectedDest = ", selectedDest);
    this.selectedDestination.emit(selectedDest);
  }
}
