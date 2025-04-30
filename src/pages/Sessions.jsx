import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions,
  CardMedia, 
  Button, 
  Avatar, 
  Chip,
  Tabs,
  Tab,
  Paper,
  Divider,
  Rating,
  Stack
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SchoolIcon from '@mui/icons-material/School';

// Updated sample data for psychologists with image URLs
const psychologists = [
  {
    id: 1,
    name: 'Dr. Ayesha Rahman',
    title: 'Clinical Psychologist',
    specialty: 'Anxiety & Depression',
    university: 'Dhaka University',
    rating: 4.9,
    reviewCount: 124,
    nextAvailable: 'Today',
    availableTimes: ['10:00 AM', '2:30 PM', '4:00 PM'],
    price: '৳1,200',
    initials: 'AR',
    imageUrl: 'https://placehold.co/200x200/245168/FFFFFF/png?text=Dr.+AR',
  },
  {
    id: 2,
    name: 'Dr. Kamal Hossain',
    title: 'Counseling Psychologist',
    specialty: 'Stress Management',
    university: 'BRAC University',
    rating: 4.7,
    reviewCount: 98,
    nextAvailable: 'Tomorrow',
    availableTimes: ['11:30 AM', '3:00 PM'],
    price: '৳1,000',
    initials: 'KH',
    imageUrl: 'https://placehold.co/200x200/245168/FFFFFF/png?text=Dr.+KH',
  },
  {
    id: 3,
    name: 'Dr. Nusrat Jahan',
    title: 'Clinical Psychologist',
    specialty: 'Academic Pressure',
    university: 'Jahangirnagar University',
    rating: 4.8,
    reviewCount: 117,
    nextAvailable: 'Apr 30',
    availableTimes: ['9:00 AM', '1:00 PM', '5:30 PM'],
    price: '৳1,100',
    initials: 'NJ',
    imageUrl: 'https://placehold.co/200x200/245168/FFFFFF/png?text=Dr.+NJ',
  },
  {
    id: 4,
    name: 'Prof. Anisul Islam',
    title: 'Senior Psychologist',
    specialty: 'Relationship Counseling',
    university: 'Dhaka Medical College',
    rating: 4.9,
    reviewCount: 201,
    nextAvailable: 'May 2',
    availableTimes: ['10:00 AM', '4:30 PM'],
    price: '৳1,500',
    initials: 'AI',
    imageUrl: 'https://placehold.co/200x200/245168/FFFFFF/png?text=Prof.+AI',
  },
  {
    id: 5,
    name: 'Prof. Jahangir Alam',
    title: 'Child Psychologist',
    specialty: 'Child Psychology',
    university: 'Dhaka Medical College',
    rating: 5,
    reviewCount: 300,
    nextAvailable: 'May 1',
    availableTimes: ['10:00 AM', '4:30 PM'],
    price: '৳1,600',
    initials: 'JA',
    imageUrl: 'https://placehold.co/200x200/245168/FFFFFF/png?text=Prof.+AI',
  },
];

// Updated sample data for mentors with image URLs
const mentors = [
  {
    id: 1,
    name: 'Salma Begum',
    title: 'Peer Counselor',
    specialty: 'Academic Support',
    university: 'NSU',
    rating: 4.5,
    reviewCount: 78,
    nextAvailable: 'Today',
    availableTimes: ['11:00 AM', '3:30 PM', '6:00 PM'],
    price: '৳500',
    initials: 'SB',
    imageUrl: 'https://placehold.co/200x200/82b647/FFFFFF/png?text=SB',
  },
  {
    id: 2,
    name: 'Imran Khan',
    title: 'Student Mentor',
    specialty: 'Career Guidance',
    university: 'IUT',
    rating: 4.6,
    reviewCount: 65,
    nextAvailable: 'Tomorrow',
    availableTimes: ['2:00 PM', '5:00 PM'],
    price: '৳450',
    initials: 'IK',
    imageUrl: 'https://placehold.co/200x200/82b647/FFFFFF/png?text=IK',
  },
  {
    id: 3,
    name: 'Farida Akter',
    title: 'Life Coach',
    specialty: 'Personal Development',
    university: 'BUET',
    rating: 4.8,
    reviewCount: 92,
    nextAvailable: 'Apr 30',
    availableTimes: ['10:30 AM', '1:30 PM', '4:00 PM'],
    price: '৳600',
    initials: 'FA',
    imageUrl: 'https://placehold.co/200x200/82b647/FFFFFF/png?text=FA',
  },
  {
    id: 4,
    name: 'Rafiq Rahman',
    title: 'Academic Mentor',
    specialty: 'Study Skills',
    university: 'SUST',
    rating: 4.7,
    reviewCount: 110,
    nextAvailable: 'May 2',
    availableTimes: ['9:30 AM', '3:00 PM'],
    price: '৳550',
    initials: 'RR',
    imageUrl: 'https://placehold.co/200x200/82b647/FFFFFF/png?text=RR',
  },
  {
    id: 5,
    name: 'Tania Sultana',
    title: 'Wellness Coach',
    specialty: 'Mental Wellness',
    university: 'RUET',
    rating: 4.9,
    reviewCount: 130,
    nextAvailable: 'May 1',
    availableTimes: ['11:00 AM', '4:00 PM'],
    price: '৳700',
    initials: 'TS',
    imageUrl: 'https://placehold.co/200x200/82b647/FFFFFF/png?text=TS',
  },
];

function Sessions() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ py: 1 }}>
      <Container maxWidth="xl"> 
        {/* Tabs for switching between psychologists and mentors */}
        <Paper elevation={0} sx={{ mb: 4, borderRadius: 2 }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            variant="fullWidth"
            textColor="secondary"
            indicatorColor="secondary"
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            <Tab 
              label="Psychologists" 
              sx={{ 
                background: tabValue === 0 ? 
                  'linear-gradient(to right, rgba(36, 81, 104, 0.1), rgba(36, 81, 104, 0.05))' : 
                  'transparent',
                fontWeight: tabValue === 0 ? 800 : 600,
                fontSize: '1.1rem',
                transition: 'background 0.3s ease, transform 0.2s ease',
                padding: '12px 16px',
                '&:hover': {
                  transform: 'translateY(-1px)'
                }
              }} 
            />
            <Tab 
              label="Mentors" 
              sx={{ 
                background: tabValue === 1 ? 
                  'linear-gradient(to right, rgba(130, 182, 71, 0.1), rgba(130, 182, 71, 0.05))' : 
                  'transparent',
                fontWeight: tabValue === 1 ? 800 : 600,
                fontSize: '1.1rem',
                transition: 'background 0.3s ease, transform 0.2s ease',
                padding: '12px 16px',
                '&:hover': {
                  transform: 'translateY(-1px)'
                }
              }} 
            />
          </Tabs>
        </Paper>

        {/* Psychologists list */}
        <Box role="tabpanel" hidden={tabValue !== 0}>
          <Grid container spacing={3}>
            {psychologists.map((psych) => (
              <Grid item xs={12} md={6} lg={3} key={psych.id}>
                <Card 
                  elevation={0} 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    border: '1px solid #e0e0e0',
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0px 8px 16px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CardMedia
                      component="img"
                      image={psych.imageUrl}
                      alt={psych.name}
                      sx={{ 
                        width: '100px', 
                        height: '100px', 
                        borderRadius: '50%',
                        mb: 2,
                        border: '3px solid #245168'
                      }}
                    />
                    <Typography variant="h6" align="center" sx={{ fontWeight: 600 }}>
                      {psych.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
                      {psych.title}
                    </Typography>
                    <Chip 
                      label={psych.specialty} 
                      color="primary" 
                      size="small" 
                      sx={{ mb: 2 }} 
                    />
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Rating value={psych.rating} precision={0.1} size="small" readOnly />
                      <Typography variant="body2" color="text.secondary">
                        ({psych.reviewCount})
                      </Typography>
                    </Stack>
                  </Box>
                  
                  <Divider />
                  
                  <CardContent sx={{ flexGrow: 1, pt: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <SchoolIcon fontSize="small" sx={{ color: 'primary.main', mr: 1 }} />
                      <Typography variant="body2">{psych.university}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CalendarMonthIcon fontSize="small" sx={{ color: 'primary.main', mr: 1 }} />
                      <Typography variant="body2">Next Available: {psych.nextAvailable}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccessTimeIcon fontSize="small" sx={{ color: 'primary.main', mr: 1 }} />
                      <Typography variant="body2" noWrap>
                        {psych.availableTimes.join(', ')}
                      </Typography>
                    </Box>
                  </CardContent>
                  
                  <Divider />
                  
                  <CardActions sx={{ justifyContent: 'space-between', px: 2, py: 1.5 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {psych.price} <Typography component="span" variant="caption">/ session</Typography>
                    </Typography>
                    <Button variant="contained" color="secondary">
                      Book Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Mentors list - Fixed to show when tabValue is 1 */}
        <Box role="tabpanel" hidden={tabValue !== 1}>
          <Grid container spacing={3}>
            {mentors.map((mentor) => (
              <Grid item xs={12} md={6} lg={3} key={mentor.id}>
                <Card 
                  elevation={0} 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    border: '1px solid #e0e0e0',
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0px 8px 16px rgba(0,0,0,0.1)'
                    }
                  }}
                >
                  <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <CardMedia
                      component="img"
                      image={mentor.imageUrl}
                      alt={mentor.name}
                      sx={{ 
                        width: '100px', 
                        height: '100px', 
                        borderRadius: '50%',
                        mb: 2,
                        border: '3px solid #82b647'  // Changed border color to match the green theme
                      }}
                    />
                    <Typography variant="h6" align="center" sx={{ fontWeight: 600 }}>
                      {mentor.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
                      {mentor.title}
                    </Typography>
                    <Chip 
                      label={mentor.specialty} 
                      color="success" // Changed to success for green color
                      size="small" 
                      sx={{ mb: 2 }} 
                    />
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Rating value={mentor.rating} precision={0.1} size="small" readOnly />
                      <Typography variant="body2" color="text.secondary">
                        ({mentor.reviewCount})
                      </Typography>
                    </Stack>
                  </Box>
                  
                  <Divider />
                  
                  <CardContent sx={{ flexGrow: 1, pt: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <SchoolIcon fontSize="small" sx={{ color: 'success.main', mr: 1 }} />
                      <Typography variant="body2">{mentor.university}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CalendarMonthIcon fontSize="small" sx={{ color: 'success.main', mr: 1 }} />
                      <Typography variant="body2">Next Available: {mentor.nextAvailable}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccessTimeIcon fontSize="small" sx={{ color: 'success.main', mr: 1 }} />
                      <Typography variant="body2" noWrap>
                        {mentor.availableTimes.join(', ')}
                      </Typography>
                    </Box>
                  </CardContent>
                  
                  <Divider />
                  
                  <CardActions sx={{ justifyContent: 'space-between', px: 2, py: 1.5 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {mentor.price} <Typography component="span" variant="caption">/ session</Typography>
                    </Typography>
                    <Button 
                      variant="contained" 
                      sx={{ 
                        bgcolor: '#82b647',
                        '&:hover': {
                          bgcolor: '#6a9339',
                        }
                      }}
                    >
                      Book Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Sessions;