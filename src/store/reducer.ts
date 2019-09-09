import { Action } from "redux";


interface AppState {
    counter: number;
}

const INITIAL_STATE = {
    counter: 0
};

export const reducer = (appState: AppState = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case 'INCREASE':
            return {counter: appState.counter + 1}
        case 'DECREASE':
            return {counter: appState.counter - 1}
    }
};