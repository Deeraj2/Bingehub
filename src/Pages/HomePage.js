import React from 'react';
import { ActionMovies, ComdeyMovies, Documentaries, HorrorMovies, RomanceMovies, SeriesList, TopRated } from '../api/api';
import Banner from '../components/Banner/Banner';
import Main from '../components/Main/Main';

function HomePage() {
  return (
    <div>
        <Banner />
        <Main title="NETFLIX ORIGINALS" fetchURL={ SeriesList()} isLargePoster />
        <Main title="TOP RATED" fetchURL={ TopRated() } isLargePoster  />
        <Main title="ACTION MOVIES" fetchURL={ ActionMovies() }  isLargePoster/>
        <Main title="COMEDY MOVIES" fetchURL={ ComdeyMovies() }  isLargePoster/>
        <Main title="HORROR MOVIES" fetchURL={ HorrorMovies() }  isLargePoster/>
        <Main title="ROMANCE MOVIES" fetchURL={ RomanceMovies() }  isLargePoster/>
        <Main title="DOCUMENTARIES" fetchURL={ Documentaries() }  isLargePoster/>
    </div>
  )
}

export default HomePage