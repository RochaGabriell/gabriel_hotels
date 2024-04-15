import styled from 'styled-components';
import { Container, Card, CardContent, Typography } from '@mui/material';

export const BlogContainer = styled(Container)`
  padding: 20px;
  margin-top: 20px;
`;
export const PostCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
export const PostContent = styled(CardContent)`
  flex-grow: 1;
`;
export const PostImage = styled.img`
  width: auto;
  height: 100%;
`;
export const ModalContainer = styled.div`
  position: absolute;
  width: 80%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  & > button {
    align-self: flex-end;
  }
`;
export const TypographyText = styled(Typography)`
  text-align: justify;
`;
