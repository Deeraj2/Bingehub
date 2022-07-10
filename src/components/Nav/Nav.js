import { Avatar } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import './Nav.css';

function Nav() {

    const [show, setShow] = useState(false)

    const navigate = useNavigate()

    const animationNavBar = ()=>{
        if(window.scrollY > 100){
            setShow(true)
        }else{
            setShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", animationNavBar)
        return()=>window.removeEventListener("scroll", animationNavBar)
    }, [])

  return (
    <div className={`nav  ${show &&  'nav_black'}`}>
        <div className='nav-content'>
            <h1 onClick={()=>navigate('/')}>Binge<span className='span'>Hub</span></h1>
            <div className='nav-detail'>
                <input type='search' placeholder="Search" />
                <Avatar sx={{backgroundColor: "#845EC2"}} alt='user.name' />
            </div>
        </div>
    </div>  
  )
}

export default Nav