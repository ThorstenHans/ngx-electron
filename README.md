# ngx-electron

[![Build Status](https://travis-ci.org/ThorstenHans/ngx-electron.svg?branch=master)](https://travis-ci.org/ThorstenHans/ngx-electron)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

`ngx-electron` is a small Module for [Angular](http://angular.io) which makes calling [Electron]() APIs from the [Renderer Process]() easier. By adding it to your Angular projet, you'll get intelli sense and a simple Angular service which acts as facade for Electron API's. 

`ngx-electron` is licensed under [MIT](https://opensource.org/licenses/MIT).

## Introduction 

Checkout the introduction post on my [blog](https://medium.com/@ThorstenHans/integrating-angular-and-electron-using-ngx-electron-9c36affca25e#.4scol1nli) for more details.

## Support me

[![Become a Patron!](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/bePatron?u=16380186)

## Installation

`ngx-electron` can be installed easily using either `yarn` or `npm` commands in the scope of an angular project.

```bash
yarn add ngx-electron --save
# or
npm install ngx-electron --save
```

The `NgxElectronModule` needs to be import in your `root` Angular module (eg `AppModule`).

``` typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NgxElectronModule } from 'ngx-electron';


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

Once the module has been imported, you can easily use dependency injection to get an instance of `ElectronService`.

``` typescript
import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';
 
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
  * `isMacOS: boolean` - Indicates if app is running in electron and on `macOS`
  * `isWindows: boolean` - Indicates if app is running in electron and on `Windows`
  * `isLinux: boolean` - Indicates if app is running in electron and on `Linux`
  * `isX86: boolean` - Indicates if app is running in electron and on a `x86` architecture
  * `isX64: boolean` - Indicates if app is running in electron and on a `x64` architecture
