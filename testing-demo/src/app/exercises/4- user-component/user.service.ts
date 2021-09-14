import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class UserService {
  private _url = "http://jsonplaceholder.typicode.com/users";

  constructor(private _http: HttpClient) {
  }

  getUsers(): Observable<any[]> {
    return this._http.get<any[]>(this._url);
  }

  getUser(userId:any) {
    return this._http.get<any>(this.getUserUrl(userId));
  }

  addUser(user:any) {
    return this._http.post<any>(this._url, JSON.stringify(user));
  }

  updateUser(user:any) {
    return this._http.put<any>(this.getUserUrl(user.id), JSON.stringify(user));
  }

  deleteUser(userId:any) {
    return this._http.delete<any>(this.getUserUrl(userId));
  }

  private getUserUrl(userId:any): string {
    return this._url + "/" + userId;
  }
}
