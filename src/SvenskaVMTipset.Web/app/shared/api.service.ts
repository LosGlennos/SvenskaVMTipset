import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'

@Injectable()
export class ApiService {
  constructor(private http: Http) {}
  
  private baseUrl = 'http://localhost:5000/api/';
  
  get(url: string): Observable<string[]> {
    return this.http.get(this.baseUrl + url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  private extractData(res: Response) {
    return res.json();
  }
  
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}