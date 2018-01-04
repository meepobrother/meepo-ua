## ua for angular

```
yarn add meepo-ua
```

```ts
import { UaModule } from 'meepo-ua';
@NgModule({
  imports: [
    UaModule
  ]
})
export class AppModule { }
```

```html
ios: {{ua.isIos()}} <br>
andorid: {{ua.isAndroid()}} <br>
wechat: {{ua.isWechat()}} <br>
ispc: {{ua.isPc()}} <br>
```

