import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Main.css';

function Main({fetchURL, title, isLargePoster }) {

    const [movies, setMovies] = useState([])

    const baseURL = "https://image.tmdb.org/t/p/original/"

    useEffect(()=>{
        const fetchMovies = async()=>{
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)
            // return(request)
        }
        return fetchMovies;
    }, [fetchURL])


  return (
    <div className='row'>
        <h2 className='row-title'>{title}</h2>
        <div className='row-list'>
        {
            movies.map((movie)=>{
                return (
                    <img
                        className= "row-posterLarge"
                        key={movie.id}
                        src={`${baseURL}${ movie.poster_path}`} alt={movie?.name} />
                 )
                             
            })
        }
        </div>
    </div>
  )
}

export default Main