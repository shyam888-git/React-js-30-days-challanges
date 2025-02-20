type info = {
    id?: number;
    name?: string;
    email?: string
}


type AdminInfoList = info & {
    role: string;
    lastLogin: string;
}


export { type info, type AdminInfoList };