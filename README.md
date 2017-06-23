# ngx-electron

[![Build Status](https://travis-ci.org/ThorstenHans/ngx-electron.svg?branch=master)](https://travis-ci.org/ThorstenHans/ngx-electron)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

`ngx-electron` provides an angular wrapper for Electron's APIs exposed as part of the renderer process. 

Besides taking away the pain of correctly loading the APIs, it's also providing strongly typed APIs using `@types/electron` as a dependency.

Checkout the introduction post on my [blog](https://medium.com/@ThorstenHans/integrating-angular-and-electron-using-ngx-electron-9c36affca25e#.4scol1nli) for more details.

## Breaking changes

With version `1.0.1` static properties like `isElectronApp` and `runningInElectron` have been removed. Use instance property `isElectronApp` instead.

## Installation

`ngx-electron` can be installed easily using either `yarn` or `npm` commands in the scope of an angular project.

```
$ yarn add ngx-electron --save
# or
$ npm install ngx-electron --save
```

`ngx-electron` is exposing a module called `NgxElectronModule` which needs to be imported in your `AppModule`.

``` typescript
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
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

``` typescript
import {Component} from '@angular/core';
import {ElectronService} from 'ngx-electron';
 
@Component({
  selector: 'my-app',
  templateUrl: 'app.html'
})
export class AppComponent {
 
    constructor(private _electronService: ElectronService) { }
    
    public playPingPong() {
        if(this._electronService.isElectronApp) {
            let pong: string = this._electronService.ipcRenderer.sendSync('ping');
            console.log(pong);
        }
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
  * `nativeImage: Electron.NativeImage` - Electron's NativeImage API
  * `isElectronApp: boolean` - Indicates if app is being executed inside of electron or not
  

### Static Properties

**Have been removed in release** `1.0.1`
  * ~~runningInElectron: boolean~~ - **removed** see `isElectronApp` instance property instead
  * ~~isElectronApp: boolean~~ - **removed** see `isElectronApp` instance property
