import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ChatBot from './pages/ChatBot';
import Sessions from './pages/Sessions';
import Forum from './pages/Forum';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import theme from './theme';
import './App.css';

// Layout component to handle conditional footer rendering
const Layout = ({ children }) => {
  const location = useLocation();
  const showFooter = location.pathname !== '/chatbot'; // Hide footer on chatbot page
  
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      bgcolor: 'background.default'
    }}>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      {showFooter && <Footer />}
    </Box>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/astha">
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/chatbot" element={<Layout><ChatBot /></Layout>} />
          <Route path="/sessions" element={<Layout><Sessions /></Layout>} />
          <Route path="/forum" element={<Layout><Forum /></Layout>} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
