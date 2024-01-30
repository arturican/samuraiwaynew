import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../state/reducer/profile-reducer";
import {store} from "../../state/redux-store";
import {Profile} from "./Profile";


export const ProfileContainer = () => {
    let addPost = () => {
        store.dispatch(addPostAC())
    }
    let onChangeText = (text: string) => {
        store.dispatch(updateNewPostTextAC(text))
    }
    return <Profile post={store.getState().pageProfile.post}
                    newPostText={store.getState().pageProfile.newPostText}
                    addPost={addPost}
                    onChangeText={onChangeText}/>
};

