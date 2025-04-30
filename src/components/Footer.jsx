import { Box, Container, Grid, Typography, Link, Divider } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        backgroundColor: '#012638',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <img 
                src="/src/assets/images/logo.png" 
                alt="Astha Logo" 
                style={{ height: 30, marginRight: 10 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                | Mental Wellbeing
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Astha is a Bangla mental health platform dedicated to providing support and resources for those seeking mental wellness.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{ mb: 0.5, textDecoration: 'none' }}>Home</Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 0.5, textDecoration: 'none' }}>AI ChatBot</Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 0.5, textDecoration: 'none' }}>Book Sessions</Link>
            <Link href="#" color="inherit" display="block" sx={{ mb: 0.5, textDecoration: 'none' }}>Discussion Forum</Link>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              Email: info@astha.com
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              Phone: +880 123 456 789
            </Typography>
            <Typography variant="body2">
              Address: Dhaka, Bangladesh
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 2, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
        
        <Typography variant="body2" align="center">
          {'Copyright © '}
          <Link color="inherit" href="#" sx={{ textDecoration: 'none' }}>
            Astha Mental Wellbeing
          </Link>{' '}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;