import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store';

// Required interface
export interface activeUserState {
    activeUser: string;
};

// initialiser
const initialState: activeUserState = {
    activeUser: "",
};


// required slice
export const activeUserSlice = createSlice({
    name: 'activeUser',
    initialState,
    reducers: {

        // only add comment reducer is required
        // comment deletion is not yet supported
        loginUser: (state, action: PayloadAction<{   
            user: string,
        }>) => {
            state.activeUser = action.payload.user;
        },  
        logoutUser: (state, action: PayloadAction<{   
            user: string,
        }>) => {
            state.activeUser = '';
        },           

    },

});


// *** IMPORTANT EXPORTS (syntactical hai for redux)***

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = activeUserSlice.actions;

// Added selector
// export const selectComment = (state: RootState) => state.comment.comments;
export default activeUserSlice.reducer;