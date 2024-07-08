import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store';

// import Movie

// Required interface
export interface movieDataState {
    
    movieData:{
        Title: string,
        Year: string,
        Rated: string,
        Released: string,
        Runtime: string,
        Genre: string,
        Director: string,
        Writer: string,
        Actors: string,
        Plot: string,
        Language: string,
        Country: string,
        Awards: string,
        Poster: string,
        // Ratings: [
        //     {
        //         Source: string,
        //         Value: string
        //     }
        // ]
        Metascore: string,
        imdbRating: string,
        imdbVotes: string,
        imdbID: string,
        Type: string,
        DVD: string,
        BoxOffice: string,
        Production: string,
        Website: string,
        Response: string,
    }[],
};

// initialiser
const initialState: movieDataState = {
    movieData: [
        {
            Title: "The Avengers",
            Year: "2012",
            Rated: "PG-13",
            Released: "04 May 2012",
            Runtime: "143 min",
            Genre: "Action, Adventure, Sci-Fi",
            Director: "Joss Whedon",
            Writer: "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
            Actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
            Plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
            Language: "English, Russian, Hindi",
            Country: "USA",
            Awards: "Nominated for 1 Oscar. Another 38 wins & 79 nominations.",
            Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            Metascore: "69",
            imdbRating: "8.0",
            imdbVotes: "1,216,895",
            imdbID: "tt0848228",
            Type: "movie",
            DVD: "25 Sep 2012",
            BoxOffice: "$623,279,547",
            Production: "Walt Disney Pictures",
            Website: "N/A",
            Response: "True"
        },
    ]
};


// required slice
export const movieDataSlice = createSlice({
    name: 'movieData',
    initialState,
    reducers: {

        // only add comment reducer is required
        // comment deletion is not yet supported
        addMovie: (state, action: PayloadAction<{   
            movieData:{
                Title: string,
                Year: string,
                Rated: string,
                Released: string,
                Runtime: string,
                Genre: string,
                Director: string,
                Writer: string,
                Actors: string,
                Plot: string,
                Language: string,
                Country: string,
                Awards: string,
                Poster: string,
                // Ratings: [
                //     {
                //         Source: string,
                //         Value: string
                //     }
                // ]
                Metascore: string,
                imdbRating: string,
                imdbVotes: string,
                imdbID: string,
                Type: string,
                DVD: string,
                BoxOffice: string,
                Production: string,
                Website: string,
                Response: string,
            }
        }>) => {
            state.movieData.push(action.payload.movieData);
        },        

    },

});


// *** IMPORTANT EXPORTS (syntactical hai for redux)***

// Action creators are generated for each case reducer function
export const { addMovie } = movieDataSlice.actions;

// Added selector
// export const selectMovie = (state: RootState) => state;
export default movieDataSlice.reducer;