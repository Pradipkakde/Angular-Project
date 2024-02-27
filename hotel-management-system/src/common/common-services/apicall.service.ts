import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  userName: any;
  id: any;
  fromSignIn: boolean | undefined;
  getUserData(journey: any) {
    throw new Error('Method not implemented.');
  }
  journey: any;

  constructor() { }
}
