import React from 'react';
import {UsersType} from "../../state/store";
import axios from "axios";

export type UsersProps = {
    users: UsersType[]
    follow: (id: string) => void
    unFollow: (id: string) => void
    setUsers: (users: UsersType[]) => void
}

export class Users extends React.Component<UsersProps, any> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res=>
            this.props.setUsers(res.data.items))
    }

    render() {
        return (
            <div>
                {this.props.users.map(u=><div key={u.id}>
                    <div>{u.name}</div>
                    <div>
                        {
                            u.followed
                                ? <button onClick={()=>this.props.follow(u.id)}>followed</button>
                                : <button onClick={()=>this.props.unFollow(u.id)}>unfollowed</button>
                        }
                    </div>
                    <img src={u.img}/>
                    <span>{u.status}</span>
                </div>)}
            </div>
        );
    }
}
