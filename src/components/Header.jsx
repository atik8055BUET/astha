import { useState } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'AI ChatBot', path: '/chatbot' },
  { name: 'Sessions', path: '/sessions' },
  { name: 'Forum', path: '/forum' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'About', path: '#' },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h5"
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box 
              component="img"
              src="src/assets/images/logo.png"
              alt="Astha Logo" 
              sx={{ 
                height: 28,
                display: 'flex',
                alignSelf: 'center',
              }}
            />
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex' }}>
              {navItems.map((item) => (
                <Button 
                  key={item.name}
                  sx={{ 
                    color: 'text.primary',
                    mx: 1,
                    '&:hover': { 
                      backgroundColor: 'rgba(130, 182, 71, 0.08)',
                      color: 'secondary.main' 
                    }
                  }}
                  href={item.path}
                >
                  {item.name}
                </Button>
              ))}
              <Button 
                variant="contained" 
                color="secondary" 
                startIcon={<PersonIcon />}
                sx={{ ml: 2 }}
              >
                Login
              </Button>
            </Box>
          )}

          {/* Mobile Navigation Toggle */}
          {isMobile && (
            <>
              <Button 
                variant="contained" 
                color="secondary" 
                startIcon={<PersonIcon />}
                size="small"
                sx={{ mr: 1 }}
              >
                Login
              </Button>
              <IconButton
                color="primary"
                aria-label="open menu"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </>
          )}

          {/* Mobile Navigation Drawer */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better mobile performance
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}
          >
            <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
              <Typography variant="h6" sx={{ my: 2, color: 'primary.main', display: 'flex', justifyContent: 'center' }}>
                <Box 
                  component="img"
                  src="src/assets/images/logo.png"
                  alt="Astha Logo" 
                  sx={{ 
                    height: 32,
                    mr: 1,
                  }}
                />
                | Mental Health
              </Typography>
              <List>
                {navItems.map((item) => (
                  <ListItem key={item.name} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }} href={item.path}>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;