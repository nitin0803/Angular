import { Component, InjectionToken } from "@angular/core";

export interface ILogger {
    Log(): void;
}

export class baseLogger implements ILogger {
    Log() : void {
        console.log('Base logging');
    }
}
export class ConsoleLogger extends baseLogger {
    override Log(): void {
        console.log('Console logging');        
    }
}

export class DbLogger extends baseLogger {
    override Log(): void {
        console.log('Database logging');        
    }
}

export class FileLogger extends baseLogger {
    override Log(): void {
        console.log('File logging');        
    }
}
