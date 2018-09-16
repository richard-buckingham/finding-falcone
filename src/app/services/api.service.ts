import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

import { IPlanet } from "../models/IPlanet";
import { IVehicle } from "../models/IVehicle";
import { FindFalconeRequest } from "../models/FindFalconeRequest";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private tokenUrl = "https://findfalcone.herokuapp.com/token";
  private planetsUrl = "https://findfalcone.herokuapp.com/planets";
  private vehiclesUrl = "https://findfalcone.herokuapp.com/vehicles";
  private findFalconeUrl = "https://findfalcone.herokuapp.com/find";

  private httpOptions = {
    headers: new HttpHeaders({
      Accept: "application/json"
    })
  };

  constructor(private http: HttpClient) {}

  getToken(): Observable<any> {
    return this.http.post<string>(this.tokenUrl, "", this.httpOptions).pipe(
      //tap(data => console.log("All: " + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getPlanets(): Observable<IPlanet[]> {
    return this.http.get<IPlanet[]>(this.planetsUrl).pipe(
      //tap(data => console.log("All: " + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getVehicles(): Observable<IVehicle[]> {
    return this.http.get<IVehicle[]>(this.vehiclesUrl).pipe(
      //tap(data => console.log("All: " + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  findFalcone(findFalconeRequest: FindFalconeRequest): Observable<any> {
    console.log("findFalconeRequest in api = ", findFalconeRequest);

    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/json"
      })
    };

    return this.http
      .post<string>(this.findFalconeUrl, findFalconeRequest, httpOptions)
      .pipe(
        //tap(data => console.log("All: " + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${
        err.message
      }`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
