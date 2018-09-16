import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ApiService } from "../../services/api.service";
import { StateService } from "../../services/state.service";

import { FindFalconeRequest } from "../../models/FindFalconeRequest";

@Component({
  selector: "result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"]
})
export class ResultComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private stateService: StateService
  ) {}

  ngOnInit() {
    this.findFalcone();
  }

  findFalcone(): void {
    const request: FindFalconeRequest = this.stateService.getFindFalconeRequest();
    console.log("FindFalconeRequest = ", request);
    this.apiService.findFalcone(request).subscribe(response => {
      console.log(`response = `, response);
      //this.token = token;
    });
  }
}
