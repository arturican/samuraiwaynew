import React from 'react';
import s from './Profile.module.css'
import Post from "./Post/Post";

export type ProfileProps = {
    post: PostProps[]
}

export type PostProps = {
    id: string
    like: number
    img: string
    text: string
}

export const Profile = (props: ProfileProps) => {


    return (<div className={s.profile}>
        {props.post.map(el=> <Post img={el.img} text={el.text} like={el.like}/>)}
    </div>)
};

