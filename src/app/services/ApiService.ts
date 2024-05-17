import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {EpicycloidModel} from "../models/epicycloid.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllEpicycloid(): Observable<EpicycloidModel[]> {
    return this.http.get<EpicycloidModel[]>(`${this.apiUrl}/epicycloid`);
  }

  getEpicycloidById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/epicycloid/${id}`);
  }

  getEpicycloidCoordinatesById(id: number, precision: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/epicycloid/${id}/coordinates/${precision}`);
  }

  getEpicycloidCoordinates(epicycloid: EpicycloidModel, precision: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/epicycloid/coordinates/${precision}`, epicycloid);
  }

  getEpicycloidByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/epicycloid/${name}`);
  }

  addEpicycloid(epicycloid: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/epicycloid`, epicycloid);
  }

  updateEpicycloid(id: number, epicycloid: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/epicycloid/${id}`, epicycloid);
  }

  deleteEpicycloid(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/v/${id}`);
  }
}
