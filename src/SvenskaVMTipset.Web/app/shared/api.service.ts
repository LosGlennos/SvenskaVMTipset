import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'

@Injectable()
export class ApiService {
    constructor(private http: Http) { }

    private baseUrl = 'http://localhost:5000/api/';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    get<T>(url: string): Observable<T> {
        return this.http.get(this.baseUrl + url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    post<T>(url: string, data: string): Observable<T> {
        return this.http.post(this.baseUrl + url, data, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    postForm<T>(url: string, data: string): Observable<T> {
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + url, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        return res.json();
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}   