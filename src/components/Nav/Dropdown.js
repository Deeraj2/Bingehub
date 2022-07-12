import  React, { useContext } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Movie } from '../../Context';
import { Avatar } from '@mui/material';
import firebase from 'firebase/compat/app';




export default function Dropdown({setAlert}) {



  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const open = Boolean(anchorEl);
  
  
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  
  const handleClose = () => {
    setAnchorEl(null);
  };



  const { user } = useContext(Movie)
  
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
      <Avatar
            onClick={handleClick}
            sx={{backgroundColor: "#845EC2", cursor: "pointer"}} 
            src={user.photoURL}
            alt={user.displayName || user.email} />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem className='user-name'  sx={{ fontWeight: 600, color: "gray" }} >{user.displayName || user.email}</MenuItem>
        <MenuItem onClick={logout} sx={{ fontWeight: 600, color: "#845EC2" }} >Log Out</MenuItem>
      </Menu>
    </div>
  );
}
