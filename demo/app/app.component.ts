import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UaService } from '../../src/app/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    public ua: UaService
  ) {}
  ngOnInit(){
    console.log(this.ua);
  }
}
