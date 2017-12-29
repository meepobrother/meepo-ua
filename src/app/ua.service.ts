import { Injectable } from '@angular/core';
declare const require: any;
var parser = require('ua-parser-js');

@Injectable()
export class UaService {
    ua: any = navigator.userAgent.toLowerCase();
    constructor() { }
    // 是否微信
    isWechat() {
        let ua = this.ua.ua.toLowerCase();
        return ua.match(/MicroMessenger/i) == 'micromessenger'
    }
}