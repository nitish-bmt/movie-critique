import React from 'react';

import { Container, Grid } from '@mui/material';
import MovieCard from '../Components/Common/MovieCard';

// import fetcher from '../utils/fetchData';
import movies from '../utils/movies.json'
import MovieData from '../types/MovieData';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const Catalogue: React.FC = ()=>{

    // let movieCatalogue: MovieData[] = movies.map((movie)=>{
    //     return{ id: (movie.Title+movie.Director+movie.Actors), ...movie }
    // });
    const movieCatalogue = useSelector((state:RootState) => state.movieData.movieData);

    // useSelector(state:RootState => state.MovieData)
    // console.log(movies[0].Ti...)
    return(
        <>
            <Container sx={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <Grid container spacing={4}>
                {movieCatalogue.map((movie) => (
                <Grid item key={movie.imdbID} xs={12} sm={6} md={4} lg={4}>
                    <MovieCard {...movie} />
                </Grid>
                ))}
            </Grid>
            </Container>
        </>
    );
}

export default Catalogue;