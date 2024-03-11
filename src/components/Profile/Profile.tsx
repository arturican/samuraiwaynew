import React from 'react';
import s from './Profile.module.css'
import Post from "./Post/Post";





export type ProfileProps = {
    post: PostProps[]
    newPostText: string
    onChangeText: (text: string) => void
    addPost : () => void
}

export type PostProps = {
    id: string
    like: number
    img: string
    text: string
}

export const Profile = (props: ProfileProps) => {

    return (<div className={s.profile}>
        {props.post.map(el => <Post key={el.id} img={el.img} text={el.text} like={el.like}/>)}
        <textarea value={props.newPostText} onChange={(event)=>props.onChangeText(event.currentTarget.value)}></textarea>
        <button onClick={props.addPost}>add post</button>
    </div>)
};

