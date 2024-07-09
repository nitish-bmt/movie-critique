import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, MenuItem, Box, Typography, Container, Grid, TextField } from '../Common/importsMUI';
import { SubmitHandler, useForm } from 'react-hook-form';
// import { MainContext } from '../Utility/Context';
// import localforage from 'localforage';
// import { UserData } from '../../Common/Interfaces/UserData';
import { Bounce, toast } from 'react-toastify';

import { addComment, movieCommentsState } from '../features/movieCommentsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';

import MovieData from '../types/MovieData';
import { Card, CardContent, CardMedia, CardActionArea, CardActions, Paper } from '@mui/material';
import MovieCard from '../Components/Common/MovieCard';

import movies from '../utils/movies.json';
import { logoutUser } from '../features/activeUserSlice';

type Inputs = {
    username: string;
    password: string;
};

const Movie: React.FC = () => {
    // const { register, handleSubmit, setValue, formState: { errors } } = useForm<Inputs>();
    const { id } = useParams<{ id: string }>();
    // const [details, setDetails] = useState<UserData[]>([]);
    
    // const { users, setUsers, activeUser, setActiveUser, admin, setAdmin } = useContext(MainContext);
    const navigate = useNavigate();

    const movieCatalogue = useSelector((state:RootState) => state.movieData.movieData);
    const movieCmnts = useSelector((state: RootState) => (state.movieComments.movieComments));
    const activeUser = useSelector((state: RootState) => (state.activeUser.activeUser));

    const currMovie: MovieData|null = movieCatalogue.find((movie)=>movie.imdbID == id)||null;
    const currMovieComments: ({  id: string,
                                comments: {
                                    user: string,
                                    rating: number,
                                    comment: string
                                }[]
                            }|null)= movieCmnts.find((movie)=>movie.id == id)||null;

    
    return (
        <>  
            {
                currMovie&&        <Container>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <img src={currMovie.Poster} alt={currMovie.Title} style={{ width: '100%' }} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h4" gutterBottom>
                                {currMovie.Title}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Rated: {currMovie.Rated}
                            </Typography>                            
                            <Typography variant="h6" gutterBottom>
                                Release Date: {currMovie.Released}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Runtime: {currMovie.Runtime}
                            </Typography>                            
                            <Typography variant="h6" gutterBottom>
                                imdb: {currMovie.imdbRating}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Genre: {currMovie.Genre}
                            </Typography>                            
                            <Typography variant="h6" gutterBottom>
                                Director: {currMovie.Director}
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Writer(s): {currMovie.Writer}
                            </Typography>                            
                            <Typography variant="h6" gutterBottom>
                                Awards: {currMovie.Awards}
                            </Typography>
                            <Typography variant="body1" paragraph>
                                {currMovie.Plot}
                            </Typography>
                        </Grid>
                    </Grid>

                {
                currMovieComments&&currMovieComments.comments.map( (comment) => (<Typography>{comment.user}: {comment.rating}★ - {comment.comment}</Typography>))
                }
                </Paper>

                {(activeUser!='')&&<div>
                    <TextField fullWidth label="Add your Review" id="review" />
                </div>
                }
            </Container>
            }
        </> 
    );
}

export default Movie;