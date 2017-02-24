import {NgModule} from '@angular/core';
import {ElectronService} from './src/electronService';
import {ElectronServiceRef} from './src/electronServiceRef';

export * from './src/electronService';
export * from './src/electronServiceRef';

@NgModule({
    declarations: [],
    exports: [],
    providers: [{ provide: ElectronService, useClass: ElectronServiceRef }]
})
export class NgxElectronModule {

}
