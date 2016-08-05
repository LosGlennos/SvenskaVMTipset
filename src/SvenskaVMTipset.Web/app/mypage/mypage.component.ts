import { Component, OnInit } from '@angular/core';
import { MyPageService } from './mypage.service';

@Component({
    selector: 'my-page',
    templateUrl: './app/mypage/mypage.component.html',
    providers: [ MyPageService ]
})
export class MyPageComponent implements OnInit {
    values = [];
    constructor(private _myPageService: MyPageService) { }

    ngOnInit() {
        this._myPageService.getValues()
            .subscribe(values => this.values = values);
        console.log('Tried to retrieve values');
    }
}