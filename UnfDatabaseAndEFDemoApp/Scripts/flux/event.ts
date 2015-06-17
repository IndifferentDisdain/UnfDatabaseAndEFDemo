module Flux {

    export interface EventCallback {
        (args: Object): void;
    }

    export class Event {
        private _name: string;
        private _callbacks: Array<EventCallback>;

        constructor(name: string) {
            this._name = name;
            this._callbacks = new Array<EventCallback>();
        }

        get name(): string {
            return this._name;
        }

        registerCallback(callback: EventCallback) {
            this._callbacks.push(callback);
        }

        unregisterCallback(callback: EventCallback) {
            var index = this._callbacks.indexOf(callback);
            this._callbacks.splice(index, 1);
        }

        get callbacks(): Array<EventCallback> {
            return this._callbacks;
        }
    }

}