module Flux {

    export class DispatcherAction {
        type: string;

        constructor(type: string) {
            this.type = type;
        }
    }

    export class DispatcherPayload {
        source: string;
        action: DispatcherAction;
    }

    export interface DispatcherCallback {
        (payload: DispatcherPayload): void;
    }

    export class BaseDispatcher {

        private callbacks: Array<DispatcherCallback>;

        constructor() {
            this.callbacks = new Array<DispatcherCallback>();
        }

        register(callback: DispatcherCallback): Number {
            this.callbacks.push(callback);
            return this.callbacks.length - 1;
        }

        dispatch(payload: DispatcherPayload) {
            this.callbacks.forEach(callback => {
                callback(payload);
            });
        }
    }

    export class AppDispatcher extends BaseDispatcher {

        static instance = new AppDispatcher();

        handleViewAction(action: DispatcherAction) {
            this.dispatch({
                source: "VIEW_ACTION",
                action: action
            });
        }
    }

}