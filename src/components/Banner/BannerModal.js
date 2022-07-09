import  React from 'react';
import './BannerModal.css';
import Modal from '@mui/material/Modal';



export default function BannerModal({movie}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const baseURL = "https://image.tmdb.org/t/p/original/"

  return (
    <div>
      <button onClick={handleOpen} className='banner-btn'>View</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='view'
            style={{
                    backgroundSize: "cover",
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.9),transparent), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    backgroundPosition: "center center",
                }}
        >   
            <img className='view-poster' src={`${baseURL}${ movie.poster_path}`} alt={movie?.title} />
            <h2 className='view-title'>{movie?.title == null ? movie?.name : movie?.title}</h2>
            <div className='view-info'>
                <p>⭐<span>{movie?.vote_average.toFixed(1)}</span></p>
            </div>
            <h1 className='view-desc'>{movie?.overview}</h1>
        </div>
      </Modal>
    </div>
  );
}