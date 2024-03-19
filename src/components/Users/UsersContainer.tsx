import {AppRootStateType} from "../../state/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unFollowAC
} from "../../state/reducer/users-reducer";
import {UsersApiProps, UsersType} from "./UserType";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

const mapToStateToProps = (state: AppRootStateType) => {
    return {
        users: state.pageUsers.users,
        pageSize: state.pageUsers.pageSize,
        currentPage: state.pageUsers.currentPage,
        totalUsersCount: state.pageUsers.totalUsersCount
    }
}

const mapToDispatchProps = (dispatch: Dispatch) => {
    return {
        follow: (id: string) => {
            dispatch(followAC(id))
        },
        unFollow: (id: string) => {
            dispatch(unFollowAC(id))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUserCount: (totalUserCount: number) => {
            dispatch(setUsersTotalCountAC(totalUserCount))
        }
    }
}

class UsersComponentApi extends React.Component<UsersApiProps, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUserCount(res.data.totalCount);
            })

    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })

    }

    render() {
        return <Users users={this.props.users}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
                      onPageChanged={this.onPageChanged}
        />
    }
}

export const UsersContainer = connect(mapToStateToProps, mapToDispatchProps)(UsersComponentApi)
