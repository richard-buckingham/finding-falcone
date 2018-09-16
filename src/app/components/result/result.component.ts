import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ApiService } from "../../services/api.service";
import { StateService } from "../../services/state.service";

import { FindFalconeRequest } from "../../models/FindFalconeRequest";

@Component({
  selector: "result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.scss"]
})
export class ResultComponent implements OnInit {
  responseStatus: string;
  responsePlanetName: string;
  responseError: string;
  timeTaken: number;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private stateService: StateService
  ) {}

  ngOnInit() {
    this.findFalcone();
    this.timeTaken = this.stateService.getTimeTaken();
  }

  findFalcone(): void {
    const request: FindFalconeRequest = this.stateService.getFindFalconeRequest();
    this.apiService.findFalcone(request).subscribe(response => {
      this.responseStatus = response.status ? response.status : "";
      this.responsePlanetName = response.planet_name
        ? response.planet_name
        : "";
      this.responseError = response.error ? response.error : "";
    });
  }

  home(): void {
    this.router.navigate([""]);
  }
}
