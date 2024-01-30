
import {addPostAC, updateNewPostTextAC} from "../../state/reducer/profile-reducer";
import {store} from "../../state/redux-store";
import {Profile} from "./Profile";
import {connect} from "react-redux";



const mapToStateToProps  = () => {
    return {
        post: store.getState().pageProfile.post,
        newPostText: store.getState().pageProfile.newPostText
    }
}

const mapToDispatchProps = (dispatch: any) => {
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