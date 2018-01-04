import { Injectable } from '@angular/core';

@Injectable()
export class UaService {
    ua: any = navigator.userAgent.toLowerCase();
    constructor() { }
    //是否ios
    isIos() {
        return !!this.ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    }
    //是否android
    isAndroid() {
        return this.ua.indexOf('Android') > -1 || this.ua.indexOf('Adr') > -1;
    }
    // 是否微信
    isWechat() {
        return this.ua.match(/MicroMessenger/i) == 'micromessenger'
    }
    // 是否pc
    isPc() {
        const userAgentInfo = navigator.userAgent;
        const Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
        let flag = true;
        for (let v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
        }
        return flag;
    }
}