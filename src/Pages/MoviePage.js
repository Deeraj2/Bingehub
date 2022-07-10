import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { singleMovie } from '../api/api';
import './MoviePage.css';
import { useParams } from 'react-router';

function MoviePage() {

    const { movie_id } = useParams();
    const [movie, setMovie] = useState();

    const baseURL = "https://image.tmdb.org/t/p/original/"

    useEffect(()=>{
        const fetchSingleMovie = async() => {
            const request = await axios.get(singleMovie(movie_id))
            setMovie(request.data)
        }
        return fetchSingleMovie;
    }, [movie_id])

    console.log(movie)

  return (
    <div className='movie-page'
        style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient( rgba(0,0,0,12),transparent), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}
    >

    <div  className='movie-detail'>
        <img className='page-poster' src={`${baseURL}${ movie?.poster_path}`} alt={movie?.original_title} />
        <h1 className='page-title'>{movie?.title !== null ? (movie?.title) :(movie?.original_title)}</h1>
        <a className='page-href' href={movie?.homepage}>{movie?.homepage}</a>
        <p className='page-genre'>Genres: {
            movie?.genres.map((genre)=>(
                    <span id={genre.id}>{genre?.name},&nbsp;</span>
                
            ))
        } </p>
        <div className='page-info'>
            <p>⭐<span>{movie?.vote_average.toFixed(1)}/10</span></p>
            <p className='page-date'>{movie?.release_date}</p>
        </div>
        <div className='page-studio'>
            <h4 className='studio-p'>Company: </h4>
            <img className='studio-img' src={`${baseURL}${ movie?.production_companies[0].logo_path}`} alt={ movie?.production_companies[0].name} />
        </div>
        { movie?.budget !== 0 ?  (<h4 className='page-budget'>Budget:&nbsp;{movie?.budget.toString().slice(0, -6)}M</h4>) : null }
        <h1 className='page-desc'>{movie?.overview}</h1>
    </div>
    </div>
  )
}

export default MoviePage

// {movie?.genres[0].name}