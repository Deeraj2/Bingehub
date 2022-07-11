import React from 'react';
import { ActionMovies, ComdeyMovies, Documentaries, HorrorMovies, RomanceMovies, SeriesList, TopRated } from '../api/api';
import Banner from '../components/Banner/Banner';
import Main from '../components/Main/Main';

function HomePage() {
  return (
    <div>
        <Banner />
        <Main title="NETFLIX ORIGINALS" fetchURL={ SeriesList()} tvSeries />
        <Main title="TOP RATED" fetchURL={ TopRated() }  />
        <Main title="ACTION MOVIES" fetchURL={ ActionMovies() }  />
        <Main title="COMEDY MOVIES" fetchURL={ ComdeyMovies() }  />
        <Main title="HORROR MOVIES" fetchURL={ HorrorMovies() }  />
        <Main title="ROMANCE MOVIES" fetchURL={ RomanceMovies() }  />
        <Main title="DOCUMENTARIES" fetchURL={ Documentaries() }  />
    </div>
  )
}

export default HomePage