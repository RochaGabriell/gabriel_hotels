import styled from 'styled-components';
import Typography from '@mui/material/Typography';

export const HotelDetailsWrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;
export const ServiceList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 10px;
`;
export const ServiceItem = styled.li`
  margin-top: 10px;

  &::before {
    content: '•';
    margin-right: 5px;
  }
`;
export const PhotosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Photo = styled.img`
  width: 330px;
  margin: 5px;
`;
export const VideosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Video = styled.iframe`
  width: 300px;
  height: 200px;
  margin: 5px;
`;
export const TypographyText = styled(Typography)`
  text-align: justify;
`;
