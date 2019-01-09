import { NgModule } from '@angular/core';
import { ElectronService } from './lib/electron.service';
import { ElectronServiceRef } from './lib/electron.service.ref';

export * from './lib/electron.service';
export * from './lib/electron.service.ref';

@NgModule({
    declarations: [],
    exports: [],
    providers: [{ provide: ElectronService, useClass: ElectronServiceRef }]
})
export class NgxElectronModule {

}
