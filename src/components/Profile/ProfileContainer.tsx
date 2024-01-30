import {addPostAC, updateNewPostTextAC} from "../../state/reducer/profile-reducer";
import {AppRootStateType, store} from "../../state/redux-store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {Dispatch} from "redux";



const mapToStateToProps  = (state: AppRootStateType) => {
    return {
        post: state.pageProfile.post,
        newPostText: state.pageProfile.newPostText
    }
}

const mapToDispatchProps = (dispatch: Dispatch) => {
    return {
        addPost:() => {
            dispatch(addPostAC())
        },
        onChangeText: (text:string) =>{
            dispatch(updateNewPostTextAC(text))

        }
    }
}
export const ProfileContainer = connect(mapToStateToProps, mapToDispatchProps)(Profile)