module Flux {

    export class Reactor {

        static instance = new Reactor();

        static nullEvent = new Event("null");

        private _events = {};

        registerEvent(eventName: string) {
            var event = new Event(eventName);
            this._events[eventName] = event;
        }

        dispatchEvent(eventName: string, eventArgs?: Object) {
            this.getEvent(eventName).callbacks.forEach(function (callback) {
                callback(eventArgs);
            });
        }

        addEventListener(eventName: string, callback: EventCallback) {
            this.getEvent(eventName).registerCallback(callback);
        }

        removeEventListener(eventName: string, callback: EventCallback) {
            this.getEvent(eventName).unregisterCallback(callback);
        }

        getEvent(eventName: string): Event {
            return this._events[eventName] || Reactor.nullEvent;
        }
    }

}