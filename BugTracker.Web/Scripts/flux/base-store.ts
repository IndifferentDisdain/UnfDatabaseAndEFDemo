module Flux {

    export class BaseStore {

        private _changeEventName: string;

        constructor(changeEventName: string) {

            this._changeEventName = changeEventName;

            AppDispatcher.instance.register(payload => {
                var action = payload.action;
                var type = action.type;

                if (type in this) {
                    this[type](action);
                }
            });
        }

        emitChange() {
            Reactor.instance.dispatchEvent(this._changeEventName);
        }

        addChangeListener(callback: EventCallback) {
            Reactor.instance.addEventListener(this._changeEventName, callback);
        }

        removeChangeListener(callback: EventCallback) {
            Reactor.instance.removeEventListener(this._changeEventName, callback);
        }
    }

}