import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store';

// Required interface
export interface RatingState {
    ratings: {
            title: string,
            rating: number,
            totalRatings: number
        }[],
};

// initialiser
const initialState: RatingState = {
    ratings: [{
        title: 'Hera Pheri',
        rating: 4.9,
        totalRatings: 1000   
    }],
};


// required slice
export const ratingSlice = createSlice({
    name: 'rating',
    initialState,
    reducers: {

        // only add comment reducer is required
        // comment deletion is not yet supported
        addRating: (state, action:  PayloadAction<{ title: string,
                                                    rating: number,
                                                    totalRatings: number
                                                }>) => {
            state.ratings.push(action.payload);
        },       
        updateRating: (state, action:  PayloadAction<{ title: string,
                                                    rating: number,
                                                }>) => {
            state.ratings.forEach((rating)=>{
                if(rating.title == action.payload.title){
                    rating.rating = (rating.rating*rating.totalRatings + action.payload.rating)/(rating.totalRatings+1);
                    rating.totalRatings = rating.totalRatings+1;
                }
            });
        },     

    },

});


// *** IMPORTANT EXPORTS (syntactical hai for redux)***

// Action creators are generated for each case reducer function
export const { addRating, updateRating } = ratingSlice.actions;

// Added selector
// export const selectComment = (state: RootState) => state.comment.comments;
export default ratingSlice.reducer;