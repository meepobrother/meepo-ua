import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UaService } from './ua.service';
@NgModule({
    declarations: [
    ],
    imports: [ CommonModule ],
    exports: [],
    providers: [
        UaService
    ],
})
export class UaModule {}
export { UaService } from './ua.service';
