import {addMessageAC, updateNewMessageTextAC} from "../../state/reducer/dialogs-reducer";
import {store} from "../../state/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

const mapToStateToProps = () => {
    return {
        message: store.getState().pageDialogs.message,
        newMessageText: store.getState().pageDialogs.newMessageText
    }
}

const mapToDispatchProps = (dispatch: any) => {
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
