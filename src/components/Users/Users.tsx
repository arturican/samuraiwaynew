import React from 'react';
import s from "./style.module.css";
import {UsersProps} from "./UserType";

export const Users = (props: UsersProps) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }
    return (
        <div>
            {pages.map(p=>{
                return <span className={props.currentPage === p ? s.selectPage : ''}
                             onClick={()=>{props.onPageChanged(p)}}>--{p}--</span>
            })}
            {props.users.map(u =>
                <div key={u.id}>
                    <div>{u.name}</div>
                    <div>
                        {
                            u.followed
                                ? <button onClick={() => props.follow(u.id)}>followed</button>
                                : <button onClick={() => props.unFollow(u.id)}>unfollowed</button>
                        }
                    </div>
                    <img src={u.photos.large || ''} alt={u.name}/>
                    <span>{u.status}</span>
                </div>
            )}
        </div>
    )
};

