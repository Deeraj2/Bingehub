import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TrendingList } from '../../api/api';
import AliceCarousel from 'react-alice-carousel'
import './Banner.css';

function Banner() {

    const [trending, setTrending] = useState([])

    useEffect(()=>{
        const fetchTrending = async() => {
            const request = await axios.get(TrendingList())
            setTrending(request.data.results)
        }
        return fetchTrending;
    }, [])

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1) + "..." : string
    }

    console.log(trending)

    const items = trending.map((movie)=>{
        return(
            <header className='banner'
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    backgroundPosition: "center center",
                }}
                >
                <div className='banner-content'>
                    <h1 className='banner-title'>{movie?.title == null ? movie?.original_name : movie?.title}</h1>
                    <div className='banner-btns'>
                        <button className='banner-btn'>View</button>
                        <button className='banner-btn'>My list</button>
                    </div>
                    <h1 className='banner-desc'>{truncate(movie?.overview, 150)}</h1>
                </div>
                <div className='fadebottom' />
            </header>
        )
    })

    const responsive = {
      0: {
        items: 1,
      }
    }

  return (
    <AliceCarousel 
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
        />
  )
}

export default Banner