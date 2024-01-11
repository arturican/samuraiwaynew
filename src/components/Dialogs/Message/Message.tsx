import React from 'react';
import styles from './Message.module.css'; // Import the styles

export type MessageProps = {
    id: string;
    name: string;
    img: string;
    text: string;
};

export const Message = (props: MessageProps) => {
    return (
        <div className={styles.messageContainer}>
            <img src={props.img} alt={'avatar'} className={styles.avatar} />
            <div className={styles.name}>{props.name}</div>
            <div>{props.text}</div>
        </div>
    );
};
