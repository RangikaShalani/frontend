import React from 'react';
import { Container, Box, Typography, TextField, Button, Link } from '@mui/material';
import logoimage from "../../../public/logo1.png";
import Image from "next/image";
import "../components/style/custom.css";

interface ShaluuCakeProps {
  logoSrc: string;
}

const SignIn: React.FC<ShaluuCakeProps> = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 8, textAlign: 'center' }}>
<Image
            src={logoimage}
            width={200}
            height={200}
            alt="Picture of the author"
          />
      <Box
        sx={{
          bgcolor: 'red.50',
          borderRadius: 3,
          p: 4,
          textAlign: 'center',
        }}
        
      >
        <Typography variant="h4" fontWeight="bold" color="text.secondary" gutterBottom>
          Shaluu Cake
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Sign in to Shaluu Cake or <Link href="#" underline="hover" color="primary">create an account</Link>
        </Typography>
        <Box component="form" noValidate sx={{ mt: 4 }}>
          <TextField
            fullWidth
            label="Email or User Name"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 5,
                py: 1.5,
                fontWeight: 'bold',
                bgcolor: 'rose.300',
                borderRadius: '50px' }}
            type="submit"
            className='primary-button signin-button'
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
