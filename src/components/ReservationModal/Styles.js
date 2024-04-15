import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const StyledBox = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  backgroundColor: '#f5f4f1',
  padding: '1rem',
  borderRadius: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
});

export const StyledTypography = styled(Typography)({
  textAlign: 'center',
  fontWeight: 'bold',
});

export const StyledButton = styled(Button)({
  marginTop: '1rem',
  backgroundColor: '#71c4ef',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#71c4ef',
  },
});

export const StyleBB = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '1rem',
});
