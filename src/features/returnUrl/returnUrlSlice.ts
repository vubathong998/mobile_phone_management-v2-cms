import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface returnUrlSlice {
    value: string;
}

const initialState: returnUrlSlice = {
    value: ''
};

export const returnUrl = createSlice({
    name: 'returnUrl',
    initialState,
    reducers: {
        setReturnUrl: (state, action: PayloadAction<returnUrlSlice>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = action.payload.value;
        }
    }
});

export const { setReturnUrl } = returnUrl.actions;

export default returnUrl.reducer;
