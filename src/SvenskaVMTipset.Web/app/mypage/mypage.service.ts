import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class MyPageService {
    values = [];
    constructor(private _apiService: ApiService) { }

    getValues(): Observable<string[]> {
        return this._apiService.get<string[]>('values');
    }
}