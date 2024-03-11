import {ActionsType, UsersStateType, UsersType} from "../store";


let initialState = {
    users: []
}

export const usersReducer = (state: UsersStateType = initialState, action: ActionsType): UsersStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)}
        }
        case 'UN-FOLLOW': {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)}
        }
        case 'SET-USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
        default : {
            return state
        }

    }
}

export type UsersActionsType = FollowType | UnFollowType | SetUsersType;
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