import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store';

// Required interface
export interface movieCommentsState {
    
    movieComments: {   
        id: string,
        comments: {
            user: string,
            rating: number,
            comment: string
        }[],
    }[],
};

// initialiser
const initialState: movieCommentsState = {
    movieComments: [{   
        id: "tt0848228",
        comments: [
            {
                user: 'paper',
                rating: 4.9,
                comment: 'very good movie'
            },
            {
                user: 'abhishek9',
                rating: 4.2,
                comment: 'good movie'
            },
            {
                user: 'shashankk',
                rating: 4.52,
                comment: 'I liked this movie'
            },
            {
                user: 'rohitt49',
                rating: 4.7,
                comment: 'Love this movie from childhood'
            },
        ]
    }]
};


// required slice
export const movieCommentsSlice = createSlice({
    name: 'movieComment',
    initialState,
    reducers: {

        // only add comment reducer is required
        // comment deletion is not yet supported
        addComment: (state, action: PayloadAction<{   
            id: string,
            comments: {
                user: string,
                rating: number,
                comment: string
            },
        }>) => {
            state.movieComments.forEach((movie)=>{
                if(movie.id==action.payload.id){
                    const user = action.payload.comments.user;
                    const comment = action.payload.comments.comment;
                    const rating = action.payload.comments.rating;
                    movie.comments.push({user, comment, rating} );
                }
            });
        },        

    },

});


// *** IMPORTANT EXPORTS (syntactical hai for redux)***

// Action creators are generated for each case reducer function
export const { addComment } = movieCommentsSlice.actions;

// Added selector
// export const selectComment = (state: RootState) => state.comment.comments;
export default movieCommentsSlice.reducer;