import {ElectronWindow} from '../typings/index';

declare const window: ElectronWindow;

export class ElectronService {

    /**
     * backward compability
     * @returns {boolean}
     */
    public static get runningInElectron(): boolean {
        return ElectronService.isElectronApp;
    }

    /**
     * determines if SPA is running in Electron
     * @returns {boolean}
     */
    public static get isElectronApp(): boolean {
        return !!window.navigator.userAgent.match(/Electron/);
    }

    private _electron: Electron.ElectronMainAndRenderer;

    private get electron(): Electron.ElectronMainAndRenderer {
        if (!this._electron) {
            this._electron = window.require ? window.require('electron') : null;
        }
        return this._electron;
    }

    /**
     * determines if SPA is running in Electron
     * @returns {boolean}
     */
    public get isElectronApp(): boolean {
        return ElectronService.isElectronApp;
    }

    public get desktopCapturer(): Electron.DesktopCapturer {
        return this.electron ? this.electron.desktopCapturer : null;
    }

    public get ipcRenderer(): Electron.IpcRenderer {
        return this.electron ? this.electron.ipcRenderer : null;
    }

    public get remote(): Electron.Remote {
        return this.electron ? this.electron.remote : null;
    }

    public get webFrame(): Electron.WebFrame {
        return this.electron ? this.electron.webFrame : null;
    }

    public get clipboard(): Electron.Clipboard {
        return this.electron ? this.electron.clipboard : null;
    }

    public get crashReporter(): Electron.CrashReporter {
        return this.electron ? this.electron.crashReporter : null;
    }

    public get process(): NodeJS.Process {
        return this.remote ? this.remote.process : null;
    }

    public get nativeImage(): typeof Electron.NativeImage {
        return this.electron ? this.electron.nativeImage : null;
    }

    public get screen(): Electron.Screen {
        return this.electron ? this.electron.screen : null;
    }

    public get shell(): Electron.Shell {
        return this.electron ? this.electron.shell : null;
    }
}
