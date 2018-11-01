import { ElectronService } from './electron.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ElectronServiceRef extends ElectronService {

    constructor() {
        super();
    }
}
