import {addMessageAC, updateNewMessageTextAC} from "../../state/reducer/dialogs-reducer";
import {AppRootStateType, store} from "../../state/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

const mapToStateToProps = (state: AppRootStateType) => {
    return {
        message: state.pageDialogs.message,
        newMessageText: state.pageDialogs.newMessageText
    }
}

const mapToDispatchProps = (dispatch: Dispatch) => {
    return {
        addMessage:() => {
            dispatch(addMessageAC())
        },
        onChangeText: (text:string) =>{
            dispatch(updateNewMessageTextAC(text))

        }
    }
}
export const DialogsContainer = connect(mapToStateToProps, mapToDispatchProps)(Dialogs)
