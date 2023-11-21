import React from 'react';
import s from './Post.module.css'


type PostProps = {
    img: string
    text: string
}
const Post = (props: PostProps) => {
    return (
        <div className={s.post}>
            <img className={s.avatar} src={props.img}
                 alt='MyPost Image'/>
            <p className={s.text}>{props.text}</p>
        </div>
    );
};

export default Post;