import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userUrl: string = 'http://localhost:3000/users';
  constructor(private httpClient: HttpClient) {}
  login(user: any) {
    return this.httpClient.post(this.userUrl + '/login', user);
  }

  signup(user: any) {
    return this.httpClient.post(this.userUrl + '/subscription', user);
  }

  editProfile(user: any) {
    return this.httpClient.put(this.userUrl, user);
  }
}
