import React from 'react';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import {
  StyledModal,
  StyledBox,
  StyledTypography,
  StyledButton,
  StyleBB,
} from './Styles';


const ReservationModal = ({ open, handleClose }) => {
  const reservationOptions = [
    { id: 1, title: 'Tarifa Diária', price: 'R$100,00' },
    { id: 2, title: 'Pacote Semanal', price: 'R$500,00' },
    { id: 3, title: 'Pacote Mensal', price: 'R$1500,00' },
  ];

  return (
    <StyledModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox>
        <StyledTypography id="modal-modal-title" variant="h6" component="h2">
          Reservar
        </StyledTypography>
        <StyledTypography id="modal-modal-description" sx={{ mt: 2 }}>
          Selecione a tarifa e o pacote desejado.
        </StyledTypography>
        {reservationOptions.map((option) => (
          <StyleBB key={option.id}>
            <StyledButton variant="contained" color="primary">
              <StyledTypography variant="body1">
                {option.title}
              </StyledTypography>
            </StyledButton>
            <StyledTypography variant="body2">{option.price}</StyledTypography>
          </StyleBB>
        ))}
        <StyledButton onClick={handleClose}>Fechar</StyledButton>
      </StyledBox>
    </StyledModal>
  );
};

export default ReservationModal;
