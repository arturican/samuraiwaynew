import React, {ChangeEvent} from 'react';
import s from './Profile.module.css'
import Post from "./Post/Post";


export type ProfileProps = {
    post: PostProps[]
    newPostText: string
    addPost: (value: string) => void
    updateNewPostText: (value: string) => void
}

export type PostProps = {
    id: string
    like: number
    img: string
    text: string
}

export const Profile = (props: ProfileProps) => {
    let addPost = () => {
        props.addPost(props.newPostText)
    }
    let onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
          props.updateNewPostText(e.currentTarget.value)
    }
    return (<div className={s.profile}>
        {props.post.map(el => <Post key={el.id} img={el.img} text={el.text} like={el.like}/>)}
        <textarea value={props.newPostText} onChange={onChangeText}></textarea>
        <button onClick={addPost}>add post</button>
    </div>)
};

