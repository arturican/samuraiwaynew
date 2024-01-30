import {combineReducers, legacy_createStore} from 'redux';
import {profileReducer} from "./reducer/profile-reducer";
import {dialogsReducer} from "./reducer/dialogs-reducer";

const rootReducers = combineReducers({
        pageProfile: profileReducer,
        pageDialogs: dialogsReducer
    }
)

export type AppRootStateType = ReturnType<typeof rootReducers>;

export let store = legacy_createStore(rootReducers)
