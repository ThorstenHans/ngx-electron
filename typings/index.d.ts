import * as Electron from 'electron';
export interface ElectronWindow extends Window {
    require(module: string): Electron.RendererInterface;
}
