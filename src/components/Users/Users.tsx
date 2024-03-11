import React from 'react';
import {UsersType} from "../../state/store";
import {v1} from "uuid";

export type UsersProps = {
    users: UsersType[]
    follow: (id: string) => void
    unFollow: (id: string) => void
    setUsers: (users: UsersType[]) => void
}
export const Users = (props: UsersProps) => {
   let users = [
        {
            id: v1(),
            name: 'Artur',
            img: 'https://clck.ru/37dCXs',
            status: 'муж Диляры',
            followed: true,
        },
        {
            id: v1(),
            name: 'Dilyara',
            img: 'http://tinyurl.com/yfm49k2p',
            status: 'жена Артура',
            followed: false
        }
    ]
    if(props.users.length === 0){props.setUsers(users)}
    console.log(props.users)
    return (
        <div>
            {props.users.map(u=><div key={u.id}>
                <div>{u.name}</div>
                <div>
                    {
                        u.followed
                            ? <button onClick={()=>props.follow(u.id)}>followed</button>
                            : <button onClick={()=>props.unFollow(u.id)}>unfollowed</button>
                    }
                </div>
                <img src={u.img}/>
                <span>{u.status}</span>
            </div>)}
        </div>
    );
};

