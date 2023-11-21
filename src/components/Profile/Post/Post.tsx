import React from 'react';
import s from './Post.module.css'


type PostPropsType = {
    img: string
    text: string
}
const Post = (props: PostPropsType) => {
    return (
        <div className={s.post}>
            <img className={s.avatar} src={props.img}
                 alt='Mypost Image'/>
            <p className={s.text}>{props.text}</p>
        </div>
    );
};

export default Post;