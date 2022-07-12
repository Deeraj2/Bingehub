import React, { createContext, useEffect, useState } from 'react'
import firebase from 'firebase/compat/app';


export  const Movie = createContext()

function Context({children}) {

  const [watchlist, setWatchlist] = useState([])
  const [movies, setMovies] = useState([])
  const [user, setUser ] = useState(null)

    useEffect(()=>{
    firebase.auth().onAuthStateChanged((user) =>{
      if(user) setUser(user)
      else setUser(null)
    })
  }, [])

  return <Movie.Provider value={{watchlist, setWatchlist, user, movies, setMovies}} >{children}</Movie.Provider>
}

export default Context