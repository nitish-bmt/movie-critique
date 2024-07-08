import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store';

// Required interface
export interface userDataState {
    userData: {   
        user: string;
        pass: string;
        favourites: {movieId: string}[]
    }[],
};

// initialiser
const initialState: userDataState = {
        userData: [{   
            user: "paper091",
            pass: 'paper091',
            favourites: []
        }]
};


// required slice
export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {

        // only add comment reducer is required
        // comment deletion is not yet supported
        addUser: (state, action: PayloadAction<{   
            user: string,
            pass: string,
            favourites: {movieId: string}[]
        }>) => {
            state.userData.push(action.payload);
        },        

    },

});


// *** IMPORTANT EXPORTS (syntactical hai for redux)***

// Action creators are generated for each case reducer function
export const { addUser } = userDataSlice.actions;

// Added selector
// export const selectComment = (state: RootState) => state.comment.comments;
export default userDataSlice.reducer;