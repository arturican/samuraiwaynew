import React from 'react';
import axios from "axios";
import s from './style.module.css'
import {UsersProps} from "./UserType";

export class Users extends React.Component<UsersProps, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUserCount(res.data.totalCount);
            })

    }
    onPageChanged = (pageNumber: number)=> {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })

    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }
        return (
            <div>
                {pages.map(p=>{
                    return <span className={this.props.currentPage === p ? s.selectPage : ''}
                    onClick={()=>{this.onPageChanged(p)}}>--{p}--</span>
                })}
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
