interface IIdentityUser {
    _id: string;
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: boolean;
    permission: string;
    avatar: string;
    __v: number;
}

interface IToken<T> {
    user: T;
    iat: number;
    exp: number;
}
