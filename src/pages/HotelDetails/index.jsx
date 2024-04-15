import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { listCards } from '../Products/listCards';
import ReservationModal from '../../components/ReservationModal';
import { HotelDetailsWrapper, TypographyText, ServiceList, ServiceItem, PhotosWrapper, Photo, VideosWrapper, Video } from './styles';

const HotelDetails = () => {
  const { id } = useParams();
  const hotel = listCards.find((card) => card.id === parseInt(id));

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <HotelDetailsWrapper>
      <Typography variant="h2">{hotel.alt}</Typography>
      <TypographyText>{hotel.text}</TypographyText>
      <Typography variant="h4">Services:</Typography>
      <ServiceList>
        {hotel.services.map((service, index) => (
          <ServiceItem key={index}>{service}</ServiceItem>
        ))}
      </ServiceList>
      <Typography variant="h4">Photos:</Typography>
      <PhotosWrapper>
        {hotel.photos.map((photo, index) => (
          <Photo key={index} src={photo} alt={`Photo ${index}`} />
        ))}
      </PhotosWrapper>
      <Typography variant="h4">Videos:</Typography>
      <VideosWrapper>
        {hotel.videos.map((video, index) => (
          <Video
            key={index}
            src={video}
            title={`Video ${index}`}
            frameborder="0"
            allowfullscreen
          ></Video>
        ))}
      </VideosWrapper>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Alugar
      </Button>
      <ReservationModal open={open} handleClose={handleClose} />
    </HotelDetailsWrapper>
  );
};

export default HotelDetails;
