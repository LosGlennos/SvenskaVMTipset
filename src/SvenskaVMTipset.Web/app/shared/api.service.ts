import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'

@Injectable()
export class ApiService {
    constructor(private http: Http, @Inject(Router) private _router: Router) { }

    private baseUrl = 'http://localhost:5000/api/';

    get<T>(url: string): Observable<T> {
        console.log(localStorage.getItem('jwt'));
        var headers = new Headers({ 'Authorization': localStorage.getItem('jwt') });
        var options = new RequestOptions({ headers: headers });
        return this.http.get(this.baseUrl + url, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    post<T>(url: string, data: string): Observable<T> {
        var headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('jwt') });
        var options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + url, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    postForm<T>(url: string, data: string): Observable<T> {
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': localStorage.getItem('jwt') });
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

        if (error.status === 401) {
            this._router.navigate(['/login']);
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}   