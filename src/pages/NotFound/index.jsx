import { Link as RouterLink } from 'react-router-dom';
import { Button, Typography, Container, Box } from '@mui/material';

import StyledContent from './styles';

const NotFound = () => {
  return (
    <>
      <Container>
        <StyledContent>
          <Typography variant="h3" paragraph>
            Desculpe, página não encontrada!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Lamentamos, mas não conseguimos encontrar a página que procura.
            Talvez você tenha digitado incorretamente o URL? Certifique-se de
            verificar sua ortografia.
          </Typography>

          <Box
            component="img"
            src="/assets/illustrations/illustration_404.svg"
            sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
          />

          <Button
            to="/"
            size="large"
            sx={{ width: 250 }}
            variant="contained"
            component={RouterLink}
          >
            Vá para Home
          </Button>
        </StyledContent>
      </Container>
    </>
  );
};

export default NotFound;
