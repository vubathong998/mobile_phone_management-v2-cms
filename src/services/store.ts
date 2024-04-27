import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from './api';
import returnUrl from '~/features/returnUrl/returnUrlSlice';

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        returnUrl: returnUrl
    },
    // reducer: {
    //     // Add the generated reducer as a specific top-level slice
    //     [api.reducerPath]: api.reducer
    // },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
