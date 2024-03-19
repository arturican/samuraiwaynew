export type UsersState = {
    users: UsersType[];
    currentPage: number
    totalUsersCount: number;
    pageSize: number
}

export type UsersType = {
    id: string;
    name: string;
    followed: boolean;
    status: string | null;
    photos: {
        small: string | null;
        large: string | null;
    };
    uniqueUrlName: string | null;
};


export type UsersProps = UsersState & {
    follow: (id: string) => void;
    unFollow: (id: string) => void;
    setUsers: (users: UsersType[]) => void;
    setCurrentPage: (currentPage: number) => void;
    setTotalUserCount: (totalUserCount: number) => void;
};
