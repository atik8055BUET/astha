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
  useTheme,
  Badge,
  Popover
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Notification from './Notification';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Assistant', path: '/chatbot' },
  { name: 'Sessions', path: '/sessions' },
  { name: 'Forum', path: '/forum' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'About', path: '/about' },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notificationAnchor, setNotificationAnchor] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNotificationOpen = (event) => {
    setNotificationAnchor(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchor(null);
  };

  const notificationOpen = Boolean(notificationAnchor);

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
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
              
              {/* Notification Button */}
              <IconButton 
                color="primary"
                aria-label="notifications"
                onClick={handleNotificationOpen}
                sx={{ mx: 1 }}
              >
                <Badge badgeContent={3} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              {/* <Button 
                variant="contained" 
                color="secondary" 
                startIcon={<PersonIcon />}
                sx={{ ml: 2 }}
              >
                Login
              </Button> */}
            </Box>
          )}

          {/* Mobile Navigation Toggle */}
          {isMobile && (
            <>
              {/* Notification Button for mobile */}
              <IconButton 
                color="primary"
                aria-label="notifications"
                onClick={handleNotificationOpen}
                sx={{ mr: 1 }}
              >
                <Badge badgeContent={3} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              
              {/* <Button 
                variant="contained" 
                color="secondary" 
                startIcon={<PersonIcon />}
                size="small"
                sx={{ mr: 1 }}
              >
                Login
              </Button> */}
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

          {/* Notification Popup */}
          <Popover
            open={notificationOpen}
            anchorEl={notificationAnchor}
            onClose={handleNotificationClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Notification onClose={handleNotificationClose} />
          </Popover>

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