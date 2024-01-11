import React from 'react';
import s from './Profile.module.css'
import Post from "./Post/Post";


export type ProfileProps = {
    post: PostProps[]
    newPostText: string
    addPost: (value: any) => void
    updateNewPostText: (value: string) => void
}

export type PostProps = {
    id: string
    like: number
    img: string
    text: string
}

export const Profile = (props: ProfileProps) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        if(newPostElement.current){
            props.addPost(newPostElement.current.value)
            props.updateNewPostText('')
        }

    }
    let onChangeText = () => {
        if (newPostElement.current){
            props.updateNewPostText(newPostElement.current.value)
        }

    }
    return (<div className={s.profile}>
        {props.post.map(el=> <Post key={el.id} img={el.img} text={el.text} like={el.like}/>)}
        <textarea ref={newPostElement} value={props.newPostText} onChange={onChangeText}/>
        <button onClick={addPost}>add post</button>
    </div>)
};

