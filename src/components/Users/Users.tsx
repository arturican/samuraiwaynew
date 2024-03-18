import React from 'react';
import axios from "axios";
import {UsersType} from "../../state/store";

export type UsersProps = {
    users: UsersType[]
    follow: (id: string) => void
    unFollow: (id: string) => void
    setUsers: (users: UsersType[]) => void
}


export class Users extends React.Component<UsersProps, any> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=2000')
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return (
            <div>
                {this.props.users.map(u =>
                    <div key={u.id}>
                        <div>{u.name}</div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => this.props.follow(u.id)}>followed</button>
                                    : <button onClick={() => this.props.unFollow(u.id)}>unfollowed</button>
                            }
                        </div>
                        <img src={u.photos.large || ''} alt={u.name}/>
                        <span>{u.status}</span>
                    </div>
                )}
            </div>
        );
    }
}
