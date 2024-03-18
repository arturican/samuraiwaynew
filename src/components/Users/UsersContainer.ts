import {AppRootStateType} from "../../state/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unFollowAC} from "../../state/reducer/users-reducer";
import {UsersType} from "../../state/store";

const mapToStateToProps = (state: AppRootStateType) => {
    return {
        users: state.pageUsers.users
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
        }
    }
}
export const UsersContainer = connect(mapToStateToProps, mapToDispatchProps)(Users)
