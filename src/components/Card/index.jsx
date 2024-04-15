import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonLink = styled(Button)`
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const CardView = ({ alt, src, text, price, handleOpen, ShowMore }) => {
  return (
    <Card sx={{ maxWidth: 345, minHeight: 400 }}>
      <CardMedia component="img" alt={alt} height="140" image={src} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {alt} - R$: {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOpen}>
          Alugar
        </Button>
        <ButtonLink size="small">
          <Link to={'/hotel/' + ShowMore}>Ver mais</Link>
        </ButtonLink>
      </CardActions>
    </Card>
  );
};

export default CardView;
