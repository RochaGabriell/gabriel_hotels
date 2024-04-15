import React, { useState } from 'react';
import styled from 'styled-components';
import CardView from '../../components/Card';
import ReservationModal from '../../components/ReservationModal';
import { listCards } from './listCards';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100%;
`;

export default function ImgMediaCard() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      {listCards.map((card, index) => (
        <CardView
          key={index}
          alt={card.alt}
          src={card.src}
          text={card.text}
          price={card.price}
          ShowMore={card.id}
          handleOpen={handleOpen}
        />
      ))}
      <ReservationModal open={open} handleClose={handleClose} />
    </Container>
  );
}
