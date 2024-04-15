import styled from 'styled-components';
import { Typography, Container } from '@mui/material';

export const AboutContainer = styled(Container)`
  padding: 40px 0;
`;
export const Title = styled(Typography)`
  font-weight: bold;
  font-size: 3rem !important;
`;
export const SubTitle = styled(Typography)`
  margin-top: 20px !important;  
  margin-bottom: 10px !important;
  font-weight: bold;
  font-size: 2rem !important;

  &:first-child {
    margin-top: 20px;
  }
`;
export const ListItem = styled.li`
  margin-bottom: 10px;
  list-style-type: none;

  &::before {
    content: '•';
    margin-right: 10px;
  }
`;
