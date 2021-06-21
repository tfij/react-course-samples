export interface CounterManagementProps {
    ownerName: string;
}

export interface CounterManagementState {
    users: UserData[]
}

export interface UserData {
    id: number,
    firstName: string,
    lastName: string,
    avatar: string
}
