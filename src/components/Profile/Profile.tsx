import React, {ChangeEvent} from 'react';
import s from './Profile.module.css'
import Post from "./Post/Post";
import {ActionsType, addPostAC, updateNewPostTextAC} from "../../state/ActionCreater";
import {type} from "os";


export type ProfileProps = {
    post: PostProps[]
    newPostText: string
    dispatch: (action: ActionsType) => void
}

export type PostProps = {
    id: string
    like: number
    img: string
    text: string
}

export const Profile = (props: ProfileProps) => {
    let addPost = () => {
        props.dispatch(addPostAC())
    }
    let onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
          props.dispatch(updateNewPostTextAC(e.currentTarget.value))
    }
    return (<div className={s.profile}>
        {props.post.map(el => <Post key={el.id} img={el.img} text={el.text} like={el.like}/>)}
        <textarea value={props.newPostText} onChange={onChangeText}></textarea>
        <button onClick={addPost}>add post</button>
    </div>)
};

