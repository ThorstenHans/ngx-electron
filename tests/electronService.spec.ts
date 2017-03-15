import {Injector} from '@angular/core';
import {ElectronService, NgxElectronModule} from '../index';
import {getTestBed, TestBed} from '@angular/core/testing';
import {ElectronServiceRef} from '../src/electronServiceRef';

describe('ElectronService', () => {
    let _injector: Injector;
    let _electronService: ElectronService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                NgxElectronModule
            ]
        });
        _injector = getTestBed();
        _electronService = _injector.get(ElectronService);
    });

    afterEach(() => {
        _injector = undefined;
        _electronService = undefined;

    });

    it('is defined', () => {
        expect(ElectronService).toBeDefined();
        expect(_electronService).toBeDefined();
        expect(_electronService instanceof ElectronService).toBeTruthy();
        expect(_electronService instanceof ElectronServiceRef).toBeTruthy();
    });

    it('should not expose electron directly', () => {
        expect(_electronService).not.hasOwnProperty('electron');
    });

    describe('runningInElectron', () => {

        it('should provide runningInElectron as static property', () => {
            expect(ElectronService).hasOwnProperty('runningInElectron');
        });

        it('should return a boolean', () => {
            expect(typeof ElectronService.runningInElectron).toEqual('boolean');
        });

        it('should return false if not running in electron', () => {
            expect(ElectronService.runningInElectron).toBeFalsy();
        });

        it('should return true if running in electron', () => {
            let original = navigator.userAgent;

            (<any>navigator).__defineGetter__('userAgent', (): string => {
                return 'foo Electron';
            });

            expect(ElectronService.runningInElectron).toBeTruthy();

            (<any>navigator).__defineGetter__('userAgent', (): string => {
                return original;
            });
        });
    });

    describe('api', () => {

        it('should expose desktopCapturer', () => {
            expect(_electronService.hasOwnProperty('desktopCapturer'));
        });

        it('should expose clipboard', () => {
            expect(_electronService.hasOwnProperty('clipboard'));
        });

        it('should expose crashReporter', () => {
            expect(_electronService.hasOwnProperty('crashReporter'));
        });

        it('should expose ipcRenderer', () => {
            expect(_electronService.hasOwnProperty('ipcRenderer'));
        });

        it('should expose process', () => {
            expect(_electronService.hasOwnProperty('process'));
        });

        it('should expose remote', () => {
            expect(_electronService.hasOwnProperty('remote'));
        });

        it('should expose shell', () => {
            expect(_electronService.hasOwnProperty('shell'));
        });

        it('should expose remote', () => {
            expect(_electronService.hasOwnProperty('remote'));
        });

        it('should expose webFrame', () => {
            expect(_electronService.hasOwnProperty('webFrame'));
        });

        it('should expose screen', () => {
            expect(_electronService.hasOwnProperty('screen'));
        });

        it('should expose nativeImage', () => {
           expect(_electronService.hasOwnProperty('nativeImage'));
        });

    });

    describe('if not in Electron', () => {

        it('should return null for desktopCapturer', () => {
            expect(_electronService.desktopCapturer).toBeNull();
        });

        it('should return null for clipboard', () => {
            expect(_electronService.clipboard).toBeNull();
        });

        it('should return null for crashReporter', () => {
            expect(_electronService.crashReporter).toBeNull();
        });

        it('should return null for ipcRenderer', () => {
            expect(_electronService.ipcRenderer).toBeNull();
        });

        it('should return null for process', () => {
            expect(_electronService.process).toBeNull();
        });

        it('should return null for remote', () => {
            expect(_electronService.remote).toBeNull();
        });

        it('should return null for shell', () => {
            expect(_electronService.shell).toBeNull();
        });

        it('should return null for nativeImage', () => {
            expect(_electronService.nativeImage).toBeNull();
        });

        it('should return null for remote', () => {
            expect(_electronService.remote).toBeNull();
        });

        it('should return null for webFrame', () => {
            expect(_electronService.webFrame).toBeNull();
        });

        it('should return null for screen', () => {
            expect(_electronService.screen).toBeNull();
        });
    });

    describe('if in Electron', () => {
        const original = navigator.userAgent;

        beforeEach(() => {

            (<any>window).require = () => {
                return {
                    desktopCapturer: {},
                    clipboard: {},
                    crashReporter: {},
                    ipcRenderer: {},
                    remote: {
                        process: {}
                    }
                };
            };

            (<any>navigator).__defineGetter__('userAgent', (): string => {
                return 'foo Electron';
            });

        });
        afterEach(() => {
            (<any>navigator).__defineGetter__('userAgent', (): string => {
                return original;
            });
        });
        it('should return object for desktopCapturer', () => {
            expect(_electronService.desktopCapturer).not.toBeNull();
        });

        it('should return object for clipboard', () => {
            expect(_electronService.clipboard).not.toBeNull();
        });

        it('should return object for crashReporter', () => {
            expect(_electronService.crashReporter).not.toBeNull();
        });

        it('should return object for ipcRenderer', () => {
            expect(_electronService.ipcRenderer).not.toBeNull();
        });

        it('should return object for process', () => {
            expect(_electronService.process).not.toBeNull();
        });

        it('should return object for remote', () => {
            expect(_electronService.remote).not.toBeNull();
        });

        it('should return object for shell', () => {
            expect(_electronService.shell).not.toBeNull();
        });

        it('should return object for remote', () => {
            expect(_electronService.remote).not.toBeNull();
        });

        it('should return object for webFrame', () => {
            expect(_electronService.webFrame).not.toBeNull();
        });

        it('should return object for screen', () => {
            expect(_electronService.screen).not.toBeNull();
        });
    });
});
