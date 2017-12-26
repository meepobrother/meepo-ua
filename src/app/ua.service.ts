import { Injectable } from '@angular/core';
declare const require: any;
var parser = require('ua-parser-js');

@Injectable()
export class UaService {
    ua: any = parser();
    constructor() { }
    //是否ios
    isIos() {
        return this.ua.os.name === 'iOS';
    }
    //是否android
    isAndroid() {
        return this.ua.os.name === 'Android';
    }
    // 是否微信
    isWechat() {
        let ua = this.ua.ua.toLowerCase();
        return ua.match(/MicroMessenger/i) == 'micromessenger'
    }
}