import { Injectable } from "@angular/core";

import { FindFalconeRequest } from "../models/FindFalconeRequest";

@Injectable({
  providedIn: "root"
})
export class StateService {
  private findFalconeRequest: FindFalconeRequest;
  private timeTaken: number;

  setFindFalconeRequest(findFalconeRequest: FindFalconeRequest): void {
    this.findFalconeRequest = findFalconeRequest;
  }

  getFindFalconeRequest(): FindFalconeRequest {
    return this.findFalconeRequest;
  }

  setTimeTaken(timeTaken: number): void {
    this.timeTaken = timeTaken;
  }

  getTimeTaken(): number {
    return this.timeTaken;
  }
}
