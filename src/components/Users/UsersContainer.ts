import {AppRootStateType} from "../../state/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Users} from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unFollowAC
} from "../../state/reducer/users-reducer";
import {UsersType} from "./UserType";



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
        follow:(id:string) => {
            dispatch(followAC(id))
        },
        unFollow: (id:string) =>{
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
export const UsersContainer = connect(mapToStateToProps, mapToDispatchProps)(Users)
