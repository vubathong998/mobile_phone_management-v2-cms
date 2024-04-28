import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const _cms_auth = Cookies.get('_cms_auth');
let identityUser: IIdentityUser = {
    __v: 0,
    _id: '',
    avatar: '',
    email: '',
    firstName: '',
    gender: false,
    lastName: '',
    password: '',
    permission: '',
    username: ''
};

if (_cms_auth) {
    identityUser = jwtDecode<IToken<IIdentityUser>>(_cms_auth || '').user;
}

export interface Identity {
    identity: IIdentityUser;
}

const initialState: Identity = {
    identity: identityUser
};

export const identity = createSlice({
    name: 'identity',
    initialState,
    reducers: {}
});

// export const {} = identity.actions;

export default identity.reducer;
