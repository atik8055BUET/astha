import React, { useEffect } from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, Avatar, Divider, useMediaQuery, Chip } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import '../styles/About.css';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const SectionTitle = styled(Typography)(({ theme }) => ({
    color: '#1A4D60',
    marginBottom: theme.spacing(4),
    position: 'relative',
    paddingBottom: theme.spacing(1),
    fontWeight: 700,
    '&:after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '80px',
        height: '4px',
        background: 'linear-gradient(90deg, #82b647 0%, #5d9c1f 100%)',
        borderRadius: '4px',
    },
}));

const MemberCard = styled(motion(Card))(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    boxShadow: '0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3)',
    '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3)',
    },
    borderRadius: '16px',
    overflow: 'hidden',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
}));

const AdvisorCard = styled(motion(Card))(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
    borderRadius: '16px',
    transition: 'all 0.4s ease',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
    },
}));

const ValueCard = styled(motion.div)(({ theme }) => ({
    padding: theme.spacing(3),
    borderRadius: '16px',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}));

function About() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const teamMembers = [
        {
            name: "MD Atikul Islam",
            role: "Team Lead & ML Developer",
            description: "Rahat leads our team with expertise in React and UI/UX design, ensuring Astha delivers a seamless user experience.",
            image: "https://placehold.co/300x300/245168/FFFFFF/png?text=Team+Member+1",
        },
        {
            name: "MD Rahim Hossain",
            role: "Frontend Developer & UI/UX Designer",
            description: "Nusrat architects our backend systems, focusing on secure data management and efficient API development.",
            image: "https://placehold.co/300x300/245168/FFFFFF/png?text=Team+Member+2",
        },
        {
            name: "MD Tahmid hossain",
            role: "ML Developer",
            description: "Tanvir brings Astha to mobile platforms using React Native, ensuring consistent functionality across all devices.",
            image: "https://placehold.co/300x300/245168/FFFFFF/png?text=Team+Member+3",
        },
        {
            name: "MD Tanvir Hossain",
            role: "Backend Developer",
            description: "Fariha creates the intuitive, accessible interfaces that make Astha both beautiful and functional for all users.",
            image: "https://placehold.co/300x300/245168/FFFFFF/png?text=Team+Member+4",
        },
        {
            name: "Umme Habiba Lamia",
            role: "Data Analyst",
            description: "Mehedi develops our analytics systems and machine learning algorithms for personalized mental health insights.",
            image: "https://placehold.co/300x300/245168/FFFFFF/png?text=Team+Member+5",
        }
    ];

    const advisors = [
        {
            name: "MD Rifat Rahman",
            role: "Tech Advisor",
            description: "Dr. Rahman is a Clinical Psychologist with over 15 years of experience specializing in digital mental health interventions. He ensures Astha's approaches are evidence-based and clinically sound.",
            credentials: "Ph.D. in Clinical Psychology, National Institute of Mental Health",
            image: "https://placehold.co/300x300/6C3483/FFFFFF/png?text=Psychology+Advisor",
        },
        {
            name: "Zubair Khan",
            role: "psychology Advisor",
            description: "Zubair brings extensive experience from leading tech companies, guiding our architecture decisions and ensuring scalability and security in our platform development.",
            credentials: "Former CTO at HealthTech Solutions, M.S. in Computer Science",
            image: "https://placehold.co/300x300/82b647/FFFFFF/png?text=Tech+Advisor",
        }
    ];

    return (
        <Box className="about-page">
            <Container maxWidth="lg" sx={{ py: 1 }}>
                {/* Mission Section */}
                <Box sx={{ mb: 12 }} className="section-container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeIn}
                    >
                        <SectionTitle variant="h3">Our Mission</SectionTitle>
                    </motion.div>
                    
                    <Grid container spacing={5} justifyContent="left">
                        <Grid item xs={12}>
                                <Typography variant="body1" className="mission-text" align="left">
                                    At Astha, we believe that mental health support should be accessible to everyone. Our mission is to break down barriers to mental healthcare through technology, creating a supportive community where individuals can find guidance, resources, and professional help on their journey to mental wellness.
                                </Typography>
                                <Typography variant="body1" className="mission-text" align="left">
                                    We combine evidence-based psychological approaches with innovative technology to provide personalized mental health support that adapts to each individual's unique needs and circumstances.
                                </Typography>
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: 6 }}>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="values-container"
                        >
                            <Grid container spacing={3} justifyContent="center" sx={{ flexWrap: 'nowrap' }}>
                                {[
                                    {
                                        title: "Accessibility",
                                        description: "Making mental health support available to all, regardless of location or resources",
                                        icon: "accessibility"
                                    },
                                    {
                                        title: "Compassion",
                                        description: "Approaching mental health with understanding, empathy and without judgment",
                                        icon: "compassion"
                                    },
                                    {
                                        title: "Innovation",
                                        description: "Using technology to create new solutions to age-old mental health challenges",
                                        icon: "innovation"
                                    },
                                    {
                                        title: "Privacy",
                                        description: "Respecting and protecting user confidentiality and data security",
                                        icon: "privacy"
                                    }
                                ].map((value, index) => (
                                    <Grid item xs={3} key={index} className="value-grid-item">
                                        <motion.div variants={fadeIn} style={{height: '100%'}}>
                                            <ValueCard className={`value-card value-${index+1}`}>
                                                <div className={`value-icon ${value.icon}-icon`}></div>
                                                <Typography variant="subtitle1" className="value-title">{value.title}</Typography>
                                                <Typography variant="body2" className="value-description">
                                                    {value.description}
                                                </Typography>
                                            </ValueCard>
                                        </motion.div>
                                    </Grid>
                                ))}
                            </Grid>
                        </motion.div>
                    </Box>
                </Box>

                {/* Team Section */}
                <Box sx={{ mb: 12 }} className="section-container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeIn}
                    >
                        <SectionTitle variant="h3">Our Team</SectionTitle>
                        <Typography variant="body1" paragraph sx={{ mb: 5 }} className="section-intro">
                            Astha brings together professionals passionate about mental health and technology, working to create innovative solutions that make a real difference in people's lives.
                        </Typography>
                    </motion.div>
                    
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <Box sx={{ maxWidth: '1100px', mx: 'auto' }}> {/* Container to constrain width */}
                            <Grid container spacing={2.5}>
                                {teamMembers.map((member, index) => (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <motion.div variants={fadeIn}>
                                            <Card 
                                                elevation={0} 
                                                sx={{ 
                                                    height: '100%', 
                                                    maxWidth: '320px',
                                                    mx: 'auto',
                                                    display: 'flex', 
                                                    flexDirection: 'column',
                                                    border: '1px solid #e0e0e0',
                                                    borderRadius: '12px',
                                                    overflow: 'hidden',
                                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                                    '&:hover': {
                                                        transform: 'translateY(-8px)',
                                                        boxShadow: '0px 12px 24px rgba(0,0,0,0.15)'
                                                    },
                                                    background: 'rgba(255, 255, 255, 0.95)',
                                                }}
                                                className="team-member-card team-member-card-small"
                                            >
                                                <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                    <CardMedia
                                                        component="img"
                                                        image={member.image}
                                                        alt={member.name}
                                                        sx={{ 
                                                            width: '100px', 
                                                            height: '100px', 
                                                            borderRadius: '50%',
                                                            mb: 1.5,
                                                            border: '3px solid #245168',
                                                            objectFit: 'cover',
                                                        }}
                                                        className="team-member-image"
                                                    />
                                                    <Typography variant="h6" align="center" sx={{ fontWeight: 700, fontSize: '1.1rem' }} className="team-member-name">
                                                        {member.name}
                                                    </Typography>
                                                    {/* <Typography variant="subtitle2" color="primary" align="center" sx={{ fontWeight: 600, mb: 1, fontSize: '0.85rem' }} className="team-member-role">
                                                        {member.role}
                                                    </Typography> */}
                                                    <Chip 
                                                        label={member.role.split('|')[0].trim()} 
                                                        color="primary" 
                                                        size="small"
                                                        sx={{ 
                                                            mb: 1, 
                                                            bgcolor: 'rgba(130, 182, 71, 0.2)', 
                                                            color: '#245168', 
                                                            fontWeight: 500,
                                                            fontSize: '0.7rem',
                                                            height: '22px' 
                                                        }} 
                                                        className="team-member-chip"
                                                    />
                                                </Box>
                                                
                                                <Divider sx={{ borderColor: 'rgba(130, 182, 71, 0.2)' }} />
                                                
                                                <CardContent sx={{ flexGrow: 1, p: 2 }}>
                                                    <Typography variant="body2" align="center" sx={{ fontSize: '0.85rem' }} className="team-member-bio">
                                                        {member.description}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </motion.div>
                </Box>

                {/* Advisors Section */}
                <Box sx={{ mb: 12 }} className="section-container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeIn}
                    >
                        <SectionTitle variant="h3">Our Advisors</SectionTitle>
                        <Typography variant="body1" paragraph sx={{ mb: 5 }} className="section-intro">
                            Our expert advisors provide guidance and ensure that Astha maintains the highest standards in both psychological methodology and technical implementation.
                        </Typography>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {advisors.map((advisor, index) => (
                            <motion.div variants={fadeIn} key={index}>
                                <AdvisorCard
                                    whileHover={{ scale: 1.02 }}
                                    className={`advisor-card advisor-${index+1}`}
                                >
                                    <Avatar 
                                        src={advisor.image}
                                        alt={advisor.name}
                                        sx={{ 
                                            width: isMobile ? 80 : 150, 
                                            height: isMobile ? 80 : 150, 
                                            mr: isMobile ? 2 : 4,
                                            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.2)'
                                        }}
                                        className="advisor-avatar"
                                    />
                                    <Box>
                                        <Typography variant="h5" component="h3" className="advisor-name">
                                            {advisor.name}
                                        </Typography>
                                        <Typography variant="subtitle1" className="advisor-role">
                                            {advisor.role}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }} className="advisor-credentials">
                                            {advisor.credentials}
                                        </Typography>
                                        <Typography variant="body1" className="advisor-bio">
                                            {advisor.description}
                                        </Typography>
                                    </Box>
                                </AdvisorCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </Box>

                {/* Contact Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="section-container"
                >
                    <motion.div variants={fadeIn}>
                        <SectionTitle variant="h3">Connect With Us</SectionTitle>
                        <Typography variant="body1" paragraph className="section-intro">
                            We're always looking to improve our platform and services. If you have questions, feedback, or would like to learn more about Astha, please don't hesitate to reach out.
                        </Typography>
                    </motion.div>
                    
                    <Box sx={{ 
                        maxWidth: '900px', 
                        mx: 'auto', 
                        mt: 6,
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Grid 
                            container 
                            spacing={4} 
                            justifyContent="center" 
                            sx={{ maxWidth: '700px' }}
                        >
                            <Grid item xs={12} sm={6}>
                                <motion.div variants={fadeIn} style={{ height: '100%' }}>
                                    <Box className="contact-card">
                                        <div className="contact-icon email-icon"></div>
                                        <Typography variant="subtitle1">Email Us</Typography>
                                        <Typography variant="body1">contact@astha-wellness.com</Typography>
                                    </Box>
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <motion.div variants={fadeIn} style={{ height: '100%' }}>
                                    <Box className="contact-card">
                                        <div className="contact-icon location-icon"></div>
                                        <Typography variant="subtitle1">Visit Us</Typography>
                                        <Typography variant="body1">Dhaka, Bangladesh</Typography>
                                    </Box>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}

export default About;
