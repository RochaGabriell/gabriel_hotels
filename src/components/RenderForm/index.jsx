import { useState } from 'react';

import Iconify from '../../components/Iconify';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

const RenderForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action="/" method="get">
      <Stack spacing={3}>
        <TextField name="email" label="Endereço de e-mail" />

        <TextField
          name="Senha"
          label="Senha"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <Iconify
                    icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ my: 3 }}
      >
        <Link variant="subtitle2" underline="hover">
          Esqueceu a senha?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        sx={{
          borderRadius: '10px',
        }}
      >
        Login
      </LoadingButton>
    </form>
  );
};

export default RenderForm;
