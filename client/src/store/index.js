import { createSlice, configureStore } from "@reduxjs/toolkit";

// creating a slice of the Redux state using the `createSlice` function from the Redux Toolkit.
const authSlice = createSlice({
    // handling authentication-related data
    name: 'auth',
    initialState: { user: '', isLoggedIn: false },
    /* 
        The `reducers` object in the `authSlice` configuration is defining two functions: `login` and
        `logout`. These functions are responsible for updating the Redux state managed by the
        `authSlice`. 
    */
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    },
});

export const authActions = authSlice.actions;

// creating a Redux store
export const store = configureStore({
    reducer: authSlice.reducer,
});