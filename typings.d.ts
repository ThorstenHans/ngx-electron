export interface ElectronWindow extends Window{
  require(module: string): Electron.ElectronMainAndRenderer;
}
