import {ActionsType} from "../store";
import {UsersState, UsersType} from "../../components/Users/UserType";


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1
}



export const usersReducer = (state: UsersState = initialState, action: ActionsType): UsersState=> {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)}
        }
        case 'UN-FOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)}
        }
        case 'SET-USERS': {
            return {...state, users: [...action.users]}
        }
        case 'SET-CURRENT-PAGE': {
            return  {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-USER-COUNT': {
            return  {...state, totalUsersCount: action.totalUserCount}
        }
        default : {
            return state
        }

    }
}

export type UsersActionsType = FollowType | UnFollowType | SetUsersType | SetCurrentPageType | SetUsersTotalCountType;
type FollowType = ReturnType<typeof followAC>
export const followAC = (id: string) => ({
        type: 'FOLLOW',
        id: id
    } as const
)

type UnFollowType = ReturnType<typeof unFollowAC>
export const unFollowAC = (id: string) => ({
        type: 'UN-FOLLOW',
        id: id
    } as const
)
type  SetUsersType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UsersType[]) => ({
        type: 'SET-USERS',
        users: users
    } as const
)
type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => ({
        type: 'SET-CURRENT-PAGE',
        currentPage: currentPage
    } as const
)

type SetUsersTotalCountType = ReturnType<typeof setUsersTotalCountAC>
export const setUsersTotalCountAC = (totalUserCount: number) => ({
        type: 'SET-TOTAL-USER-COUNT',
        totalUserCount: totalUserCount
    } as const
)