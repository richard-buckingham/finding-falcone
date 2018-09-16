import { TestBed, inject } from "@angular/core/testing";

import { StateService } from "./state.service";
import { FindFalconeRequest } from "../models/FindFalconeRequest";

describe("StateService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateService]
    });
  });

  it("should be created", inject([StateService], (service: StateService) => {
    expect(service).toBeTruthy();
  }));

  it("should manage state for timeTaken", inject(
    [StateService],
    (service: StateService) => {
      service.setTimeTaken(123);
      const timeTaken: number = service.getTimeTaken();

      expect(timeTaken).toBe(123);
    }
  ));

  it("should manage state for FindFalconeRequest", inject(
    [StateService],
    (service: StateService) => {
      const request: FindFalconeRequest = new FindFalconeRequest();
      let planet_names = new Array<string>();
      let vehicle_names = new Array<string>();

      planet_names.push("mars");
      planet_names.push("pluto");

      vehicle_names.push("saturn v");
      vehicle_names.push("falcon heavy");
      vehicle_names.push("space shuttle");

      request.token = "test token";
      request.planet_names = [...planet_names];
      request.vehicle_names = [...vehicle_names];

      service.setFindFalconeRequest(request);

      const testRequest: FindFalconeRequest = service.getFindFalconeRequest();

      expect(testRequest.token).toBe("test token");
      expect(testRequest.planet_names.length).toBe(2);
      expect(testRequest.vehicle_names.length).toBe(3);
    }
  ));
});
