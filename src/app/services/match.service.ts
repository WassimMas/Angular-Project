import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  matchUrl: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}

  getAllMatches() {
    return this.httpClient.get(this.matchUrl);
  }
  getMatchById(id: any) {
    return this.httpClient.get(`${this.matchUrl}/${id}`);
  }
  editMatch(obj: any) {
    return this.httpClient.put(this.matchUrl, obj);
  }
  deleteMatch(id: any) {
    return this.httpClient.delete(`${this.matchUrl}/${id}`);
  }
  addMatch(obj: any) {
    return this.httpClient.post(this.matchUrl, obj);
  }

  searchMatch() {}
}
