import { Injectable } from '@angular/core';
import { Connection } from '../models/Connection';

@Injectable({
  providedIn: 'root'
})
export class ConnService {
  public actualConnections: Array<Connection> = [];
  constructor() { }
}
