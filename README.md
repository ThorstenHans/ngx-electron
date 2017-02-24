# ngx-electron

`ngx-electron` provides an angular wrapper for Electron's APIs exposed as part of the renderer process. 

Besides taking away the pain of correctly loading the APIs, it's also providing strongly typed APIs using `@types/electron` as a dependency.


## Installation

`ngx-electron` can be installed easily using either `yarn` or `npm` commands in the scope of an angular project.

```
$ yarn add ngx-electron --save
# or
$ npm install ngx-electron --save
```

`ngx-electron` is exposing a module called `NgxElectronModule` which needs to be imported in your `AppModule`.

```
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform/dynamic/browser';
import {NgxElectronModule} from 'ngx-electron';
import {AppComponent} from './app.component';
 
@NgModule({
    declarations: [],
    imports: [
      BrowserModule,
      NgxElectronModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
 
}
```

Once the module has been imported, you can easily use angular DI to ask for `ElectronService`.

```
import {Component} from '@angular/core';
import {ElectronService} from 'ngx-electron';
 
@Component({
  selector: 'my-app',
  templateUrl: 'app.html'
})
export class AppComponent {
 
    constructor(private _electronService: ElectronService) { }
    
    public playPingPong() {
        let pong: string = this._electronService.ipcRenderer.sendSync('ping');
        console.log(pong);
    }
}
```

## ElectronService

The `ElectronService` is exposing all API's accessible from within Electron's renderer process. **If your app is not running inside electron, all getters will return NULL instead**.

### Properties

  * `desktopCapturer: Electron.DesktopCapturer` - Electron's desktop capturing API
  * `ipcRenderer: Electron.IpcRenderer` - Electron IpcRenderer
  * `remote: Electron.Remote` - Electron Remote capabilities
  * `webFrame: Electron.WebFrame` - Electron WebFrame
  * `clipboard: Electron.Clipboard` - Clipboard API
  * `crashReporter: Electron.CrashReporter` - Electron's CrashReporter
  * `process: NodeJS.Process` - Electron's Process Object
  * `screen: Electron.Screen` - Electron's Screen API
  * `shell: Electron.Shell` - Electron's Shell API

### Static Properties
  * `runningInElectron: boolean` - Indicates if app is being executed inside of electron or not
