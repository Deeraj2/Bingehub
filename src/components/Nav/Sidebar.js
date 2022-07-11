import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Avatar } from '@mui/material';
import userEvent from '@testing-library/user-event';
import './Sidebar.css';
import firebase from 'firebase/compat/app';


export default function Sidebar({user, setAlert}) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logout = () => {
    firebase.auth().signOut().then(()=>{
        setAlert({
            open: true,
            type: "success",
            message: "Logout Successfull"
        })
    }).catch((error)=>{
        setAlert({
            open:true,
            type: "error",
            message: error.message
        })
    })
  }

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Avatar
            onClick={toggleDrawer(anchor, true)}
            sx={{backgroundColor: "#845EC2", cursor: "pointer"}} 
            src={user.photoURL}
            alt={userEvent.displayName || user.email} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className='sidebar-container'>
                <div className='sidebar-profile'>
                    <Avatar
                        className='container-avatar'
                        sx={{backgroundColor: "#845EC2", cursor: "pointer", height: 200, width: 200, fontSize: 30}}
                        src={user.photoURL}
                        alt={user.displayName || user.email} />
                    <h4 className='sidebar-name'>{user.displayName || user.email}</h4>
                </div>
                <button className='sidebar-btn' onClick={logout}>Log Out</button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
