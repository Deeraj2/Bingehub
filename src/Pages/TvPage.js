import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { singleTvSeries } from '../api/api';
import './TvPage.css';

function TvPage() {

    const [tv, setTv ] = useState()
    const { tv_id} = useParams()

    const baseURL = "https://image.tmdb.org/t/p/original/"

    useEffect(()=>{
        const fetchSingleTvSeries = async() => {
            const request = await axios.get(singleTvSeries(tv_id))
            setTv(request.data)
        }
        return fetchSingleTvSeries;
    }, [tv_id])

    console.log(tv)

  return (
    <div className='tv-page'
        style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient( rgba(0,0,0,12),transparent), url("https://image.tmdb.org/t/p/original/${tv?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}
    >
    <div className='tv-detail'>
        <img className='page-poster' src={`${baseURL}${ tv?.poster_path}`} alt={tv?.original_name} />
        <h1 className='page-title'>{tv?.name !== null ? (tv?.name) :(tv?.original_name)}</h1>
        <p className='page-tagline'>{tv?.tagline}</p>
        <a className='page-href' href={tv?.homepage}>{tv?.homepage}</a>
        <p className='page-genre'>Genres: {
            tv?.genres.map((genre)=>(
                    <span id={genre.id}>{genre?.name},&nbsp;</span>
                
            ))
        } </p>
        <div className='page-info'>
            <p>⭐<span>{tv?.vote_average}/10</span></p>
            <p className='page-date'>{tv?.first_air_date}</p>
        </div>
        <div className='page-info'>
            <p>{tv?.number_of_seasons !== 1 ? "Seasons" : "Season"}: <span>{tv?.number_of_seasons}</span></p>
            <p className='page-episodes'>Episodes: {tv?.number_of_episodes}</p>
        </div>

        {tv?.production_companies[0] && (<div className='page-studio'>
            <h4 className='studio-p'>Company: </h4>
            {tv?.production_companies[0]?.logo_path !== 1 ? (<img className='studio-img' src={`${baseURL}${ tv?.production_companies[0].logo_path}`} alt={ tv?.production_companies[0].name} />) : (<h4>{tv?.production_companies[0].name}</h4>)}
        </div>) 
        }
        <h1 className='page-desc'>{tv?.overview}</h1>
        <h2 className='page-sesonTitle'>{tv?.number_of_seasons !== 1 ? "Seasons" : "Season"}:</h2>
        {tv?.seasons.map((season) =>(
            <div className='page-season' id={season.id}>
            <img src={`${baseURL}${ season?.poster_path}`} alt={season?.name} />
            <h4 >{season?.name}</h4>
            <p>Episode: {season?.episode_count}</p>
            </div>
        )
        )}
    </div>
    </div>
  )
}

export default TvPage