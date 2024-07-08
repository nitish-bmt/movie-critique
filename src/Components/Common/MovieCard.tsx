import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, CardActions, Button } from '@mui/material';
import MovieData from '../../types/MovieData';

const MovieCard: React.FC<MovieData> = (props: MovieData) => {
  return (
    <Card sx={{ maxWidth: 345, height: 500, margin: 'auto', boxShadow: 3, href: `/movie/${props.imdbID}`}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={props.Poster}
          alt={props.Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.Plot.substring(0, 100) + '...'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={`/movie/${props.imdbID}`}>Learn More</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
