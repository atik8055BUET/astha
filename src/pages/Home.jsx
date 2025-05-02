import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  Paper,
  Stack,
  Avatar
} from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy'; // Added icon for AI chat
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'; // Added icon for booking sessions
import PlaceholderImage from '../components/PlaceholderImage';
import '../styles/Home.css'; // Import the CSS file

function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ 
        py: 12, 
        background: 'linear-gradient(to right bottom, #245168, rgba(36, 81, 104, 0.9))',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Mobile background image - visible only on mobile */}
        <Box 
          sx={{ 
            display: { xs: 'block', md: 'none' },
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            opacity: 0.2,
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(36, 81, 104, 0.7)'
            }
          }}
        >
          <Box
            component="img"
            src="src\assets\images\home_design.png"
            alt="Mental health illustration"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
        
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                Your Mental Wellbeing Matters
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                Join Astha, Bangladesh's first AI-powered mental health support platform
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button 
                  variant="contained" 
                  size="large" 
                  color="secondary"
                  sx={{ px: 4, py: 1.5 }}
                  startIcon={<SmartToyIcon />} // Added AI icon
                >
                  Chat with AI
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  startIcon={<CalendarMonthIcon />} // Added calendar icon
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    borderColor: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderColor: 'white',
                    }
                  }}
                >
                  Book a Session
                </Button>
              </Stack>
            </Grid>
            {/* Desktop hero image - visible only on desktop */}
            <Grid 
              item 
              xs={12} 
              md={6} 
              sx={{ 
                textAlign: 'center',
                display: { xs: 'none', md: 'block' },
                position: 'relative'
              }}
            >
              <Box
                component="img"
                src="src\assets\images\home_design.png"
                alt="Mental health illustration"
                sx={{
                  maxWidth: '100%',
                  height: 'auto',
                  maxHeight: '400px',
                  transform: 'scale(1.1)',
                  position: 'relative',
                  zIndex: 2
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Services Section */}
      <Container maxWidth="xl" sx={{ py: 6, pb: 3 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" paragraph sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
          Discover how Astha can support your mental health journey with our range of services
        </Typography>

        <Grid 
          container 
          spacing={{ xs: 2, md: 3 }} 
          justifyContent="center" 
          sx={{ 
            flexWrap: { xs: 'wrap', lg: 'nowrap' },
            mb: 4
          }}
        >
          {/* AI ChatBot Card */}
          <Grid item xs={12} sm={6} lg={3} sx={{ display: 'flex' }}>
            <Card 
              elevation={0}
              className="service-card"
            >
              <CardMedia
                component="img"
                image="src\assets\images\AI_ChatBot.jpg"
                alt="AI ChatBot"
                className="service-card-media"
              />
              <CardContent className="service-card-content">
                <div>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                  AI ChatBot
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Get instant support through our AI-powered mental health chatbot
                  </Typography>
                </div>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  fullWidth
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Wellness Insights Card */}
          <Grid item xs={12} sm={6} lg={3} sx={{ display: 'flex' }}>
            <Card 
              elevation={0}
              className="service-card"
            >
              <CardMedia
                component="img"
                image="src\assets\images\Wellness_Insights.jpg"
                alt="Wellness Insights"
                className="service-card-media"
              />
              <CardContent className="service-card-content">
                <div>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                    Wellness Insights
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Track your mental wellbeing progress with personalized analytics
                  </Typography>
                </div>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  fullWidth
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Expert Sessions Card */}
          <Grid item xs={12} sm={6} lg={3} sx={{ display: 'flex' }}>
            <Card 
              elevation={0}
              className="service-card"
            >
              <CardMedia
                component="img"
                image="src\assets\images\counselling_image.jpg"
                alt="Expert Sessions"
                className="service-card-media"
              />
              <CardContent className="service-card-content">
                <div>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                    Expert Sessions
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Connect with licensed mental health professionals for guidance
                  </Typography>
                </div>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  fullWidth
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Community Forum Card */}
          <Grid item xs={12} sm={6} lg={3} sx={{ display: 'flex' }}>
            <Card 
              elevation={0}
              className="service-card"
            >
              <CardMedia
                component="img"
                image="src\assets\images\Community_Forum.jpg"
                alt="Community Forum"
                className="service-card-media"
              />
              <CardContent className="service-card-content">
                <div>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                    Community Forum
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Share experiences and connect with others on similar journeys
                  </Typography>
                </div>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  fullWidth
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Container maxWidth="xl" sx={{ py: 6, pt: 2 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Testimonials
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" paragraph sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
          See what students and mental health professionals say about Astha
        </Typography>

        <Grid container spacing={3} justifyContent="center" wrap="nowrap" sx={{ 
          overflowX: { xs: 'auto', xl: 'visible' },
          pb: 2, // Add padding to bottom for scrollbar
          '&::-webkit-scrollbar': {
            height: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,0.2)',
            borderRadius: '4px',
          }
        }}>
          {/* First Testimonial */}
          <Grid item xs={12} md={4} sx={{ minWidth: { xs: '300px', sm: '320px' } }}>
            <Card 
              elevation={0} 
              sx={{ 
                height: '100%', 
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                border: '1px solid #eaeaea',
                overflow: 'hidden',
                background: 'linear-gradient(to bottom, white, rgba(130, 182, 71, 0.15))'
              }}
            >
              {/* Colored Header */}
              <Box 
                sx={{ 
                  height: '8px', 
                  bgcolor: '#82b647',
                  width: '100%'
                }} 
              />
              
              <CardContent sx={{ p: 0 }}>
                {/* User Image */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <Box 
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      borderRadius: '50%', 
                      overflow: 'hidden',
                      border: '4px solid white',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                  >
                    <CardMedia
                      component="img"
                      image="src\assets\images\university_student.jpg"
                      alt="Fahad Hasan"
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                </Box>
                
                {/* User Name and Title */}
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Fahad Hasan
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    University Student
                  </Typography>
                </Box>
                
                {/* Divider Line */}
                <Box 
                  sx={{ 
                    width: '50px', 
                    height: '3px', 
                    bgcolor: '#82b647', 
                    mx: 'auto',
                    my: 2 
                  }} 
                />
                
                {/* Testimonial Content */}
                <Box sx={{ px: 3, pb: 3 }}>
                  <Typography variant="body2" align="center" paragraph>
                    "Astha's AI chatbot helped me understand my anxiety issues when I was too hesitant to talk to someone directly. The insights were surprisingly accurate."
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Second Testimonial */}
          <Grid item xs={12} md={4} sx={{ minWidth: { xs: '300px', sm: '320px' } }}>
            <Card 
              elevation={0} 
              sx={{ 
                height: '100%', 
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                border: '1px solid #eaeaea',
                overflow: 'hidden',
                background: 'linear-gradient(to bottom, white, rgba(130, 182, 71, 0.15))'
              }}
            >
              {/* Colored Header */}
              <Box 
                sx={{ 
                  height: '8px', 
                  bgcolor: '#245168',
                  width: '100%'
                }} 
              />
              
              <CardContent sx={{ p: 0 }}>
                {/* User Image */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <Box 
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      borderRadius: '50%', 
                      overflow: 'hidden',
                      border: '4px solid white',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                  >
                    <CardMedia
                      component="img"
                      image="src\assets\images\psycologist.jpg"
                      alt="Dr. Kamal A."
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                </Box>
                
                {/* User Name and Title */}
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Dr. Kamal A.
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Clinical Psychologist
                  </Typography>
                </Box>
                
                {/* Divider Line */}
                <Box 
                  sx={{ 
                    width: '50px', 
                    height: '3px', 
                    bgcolor: '#245168', 
                    mx: 'auto',
                    my: 2 
                  }} 
                />
                
                {/* Testimonial Content */}
                <Box sx={{ px: 3, pb: 3 }}>
                  <Typography variant="body2" align="center" paragraph>
                    "As a psychologist, I find the AI-generated reports very helpful in understanding my patients' day-to-day mental state between our sessions."
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Third Testimonial */}
          <Grid item xs={12} md={4} sx={{ minWidth: { xs: '300px', sm: '320px' } }}>
            <Card 
              elevation={0} 
              sx={{ 
                height: '100%', 
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                border: '1px solid #eaeaea',
                overflow: 'hidden',
                background: 'linear-gradient(to bottom, white, rgba(130, 182, 71, 0.15))'
              }}
            >
              {/* Colored Header */}
              <Box 
                sx={{ 
                  height: '8px', 
                  bgcolor: '#82b647',
                  width: '100%'
                }} 
              />
              
              <CardContent sx={{ p: 0 }}>
                {/* User Image */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <Box 
                    sx={{ 
                      width: 80, 
                      height: 80, 
                      borderRadius: '50%', 
                      overflow: 'hidden',
                      border: '4px solid white',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                  >
                    <CardMedia
                      component="img"
                      image="src\assets\images\grad_student.jpg"
                      alt="Tanvir Iqbal"
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>
                </Box>
                
                {/* User Name and Title */}
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    Tanvir Iqbal
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Graduate Student
                  </Typography>
                </Box>
                
                {/* Divider Line */}
                <Box 
                  sx={{ 
                    width: '50px', 
                    height: '3px', 
                    bgcolor: '#82b647', 
                    mx: 'auto',
                    my: 2 
                  }} 
                />
                
                {/* Testimonial Content */}
                <Box sx={{ px: 3, pb: 3 }}>
                  <Typography variant="body2" align="center">
                    "The community forum on Astha made me realize I'm not alone. Sharing experiences with others facing similar challenges has been incredibly therapeutic."
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;