export abstract class ElectronService {

    public static get runningInElectron(): boolean {
        return !!window.navigator.userAgent.match(/Electron/);
    }

    public abstract get desktopCapturer(): Electron.DesktopCapturer;

    public abstract get ipcRenderer(): Electron.IpcRenderer;

    public abstract get remote(): Electron.Remote;

    public abstract get webFrame(): Electron.WebFrame;

    public abstract get clipboard(): Electron.Clipboard;

    public abstract get crashReporter(): Electron.CrashReporter;

    public abstract get process(): NodeJS.Process;

    public abstract get screen(): Electron.Screen;

    public abstract get shell(): Electron.Shell;
}
