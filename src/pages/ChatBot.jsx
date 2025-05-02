import { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  TextField, 
  IconButton, 
  List, 
  ListItem, 
  Paper, 
  Avatar,
  Typography,
  Drawer,
  Divider,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Switch,
  FormControlLabel,
  Button,
  RadioGroup,
  FormControl,
  FormLabel,
  Radio,
  Card,
  CardContent,
  CardActions,
  Stack
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import HistoryIcon from '@mui/icons-material/History';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsIcon from '@mui/icons-material/Settings';
import QuizIcon from '@mui/icons-material/Quiz';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './ChatBot.css';

// Test data
const mentalHealthTests = {
  'Depression Assessment (PHQ-9)': {
    description: 'The Patient Health Questionnaire (PHQ-9) is a self-administered depression scale used for screening, diagnosing, monitoring, and measuring the severity of depression.',
    questions: [
      { id: 1, text: 'Little interest or pleasure in doing things?', options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] },
      { id: 2, text: 'Feeling down, depressed, or hopeless?', options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] },
      { id: 3, text: 'Trouble falling or staying asleep, or sleeping too much?', options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] },
      { id: 4, text: 'Feeling tired or having little energy?', options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] },
      { id: 5, text: 'Poor appetite or overeating?', options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] }
    ]
  },
  'Anxiety Assessment (GAD-7)': {
    description: 'The Generalized Anxiety Disorder scale (GAD-7) is a self-reported questionnaire for screening and measuring the severity of generalized anxiety disorder.',
    questions: [
      { id: 1, text: 'Feeling nervous, anxious, or on edge?', options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] },
      { id: 2, text: 'Not being able to stop or control worrying?', options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] },
      { id: 3, text: 'Worrying too much about different things?', options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] },
      { id: 4, text: 'Trouble relaxing?', options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] },
      { id: 5, text: 'Being so restless that it is hard to sit still?', options: ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'] }
    ]
  },
  'Stress Assessment (PSS)': {
    description: 'The Perceived Stress Scale (PSS) is a psychological instrument for measuring the perception of stress in your life.',
    questions: [
      { id: 1, text: 'In the last month, how often have you been upset because of something that happened unexpectedly?', options: ['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'] },
      { id: 2, text: 'In the last month, how often have you felt that you were unable to control the important things in your life?', options: ['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'] },
      { id: 3, text: 'In the last month, how often have you felt nervous and stressed?', options: ['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'] },
      { id: 4, text: 'In the last month, how often have you felt confident about your ability to handle your personal problems?', options: ['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'] },
      { id: 5, text: 'In the last month, how often have you felt that things were going your way?', options: ['Never', 'Almost Never', 'Sometimes', 'Fairly Often', 'Very Often'] }
    ]
  },
  'Well-being Assessment': {
    description: 'This assessment helps evaluate your overall sense of well-being and satisfaction with life.',
    questions: [
      { id: 1, text: 'In general, I consider myself a happy person.', options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] },
      { id: 2, text: 'Compared to most of my peers, I consider myself happier.', options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] },
      { id: 3, text: 'I am satisfied with my life.', options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] },
      { id: 4, text: 'So far I have gotten the important things I want in life.', options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] },
      { id: 5, text: 'If I could live my life over, I would change almost nothing.', options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'] }
    ]
  },
  'Sleep Quality Assessment': {
    description: 'This assessment evaluates the quality of your sleep and identifies potential sleep-related issues.',
    questions: [
      { id: 1, text: 'How would you rate your sleep quality overall?', options: ['Very Bad', 'Fairly Bad', 'Average', 'Fairly Good', 'Very Good'] },
      { id: 2, text: 'How long does it usually take you to fall asleep?', options: ['0-15 minutes', '16-30 minutes', '31-60 minutes', 'More than 60 minutes'] },
      { id: 3, text: 'How many hours of actual sleep do you get at night?', options: ['Less than 5 hours', '5-6 hours', '7-8 hours', 'More than 8 hours'] },
      { id: 4, text: 'How often do you have trouble staying awake during the day?', options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'] },
      { id: 5, text: 'How much of a problem has it been for you to keep up enthusiasm to get things done?', options: ['No problem', 'Only a very slight problem', 'Somewhat of a problem', 'A very big problem'] }
    ]
  }
};

function ChatBot() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { type: 'bot', text: 'Hello! I\'m Astha AI, your mental wellness companion. How are you feeling today?' },
  ]);
  const [chatMode, setChatMode] = useState('assistant'); // 'assistant' or 'psychologist'
  
  // Test state variables
  const [activeTest, setActiveTest] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showTestResults, setShowTestResults] = useState(false);
  
  const messagesEndRef = useRef(null);
  
  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    // Add user message to chat
    setChatHistory([...chatHistory, { type: 'user', text: message }]);
    
    // For the prototype, we'll simulate a response after a delay
    setTimeout(() => {
      let botResponse;
      
      // Very simple response logic for the prototype
      if (message.toLowerCase().includes('sad') || message.toLowerCase().includes('depress')) {
        botResponse = "I understand you're feeling sad. Would you like to tell me more about what's been troubling you lately?";
      } else if (message.toLowerCase().includes('anxious') || message.toLowerCase().includes('worry')) {
        botResponse = "Anxiety can be challenging. Let's explore what's causing these feelings. When did you first notice this anxiety?";
      } else if (message.toLowerCase().includes('stress') || message.toLowerCase().includes('pressure')) {
        botResponse = "I hear that you're under stress. Remember it's important to take care of yourself. What specific situations are causing you stress right now?";
      } else {
        botResponse = "Thank you for sharing. Can you tell me more about why you're feeling this way?";
      }
      
      setChatHistory(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 1000);
    
    setMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleModeChange = (mode) => {
    setChatMode(mode);
    setChatHistory(prev => [
      ...prev, 
      { 
        type: 'bot', 
        text: mode === 'psychologist' 
          ? "I've switched to Psychologist mode. I'll provide more professional therapeutic responses." 
          : "I've switched to Assistant mode. I'll try to be more casual and friendly in my responses."
      }
    ]);
  };

  const startTest = (testName) => {
    setActiveTest(testName);
    setCurrentQuestion(0);
    setAnswers({});
    setShowTestResults(false);
  };

  const handleAnswerSelect = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < mentalHealthTests[activeTest].questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Show results when all questions are answered
      setShowTestResults(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateTestScore = () => {
    // Simple score calculation for demonstration
    // In a real app, each test would have its own scoring algorithm
    const test = mentalHealthTests[activeTest];
    const totalQuestions = test.questions.length;
    const answeredQuestions = Object.keys(answers).length;
    
    return {
      completed: `${answeredQuestions}/${totalQuestions}`,
      percentage: Math.round((answeredQuestions / totalQuestions) * 100)
    };
  };

  const finishTest = () => {
    const score = calculateTestScore();
    
    setChatHistory(prev => [
      ...prev,
      { 
        type: 'bot', 
        text: `You've completed the ${activeTest}. You answered ${score.completed} questions (${score.percentage}%). A qualified mental health professional would interpret these results. Would you like to discuss any concerns you have?`
      }
    ]);
    
    setActiveTest(null);
  };

  const renderTestInterface = () => {
    const test = mentalHealthTests[activeTest];
    
    if (showTestResults) {
      const score = calculateTestScore();
      
      return (
        <Card sx={{ width: '100%', maxWidth: 600, mx: 'auto', my: 2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {activeTest} Results
            </Typography>
            <Typography variant="body1" paragraph>
              You completed {score.completed} questions ({score.percentage}%).
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Note: These results are preliminary and should be discussed with a mental health professional for proper interpretation.
            </Typography>
          </CardContent>
          <CardActions>
            <Button 
              variant="contained" 
              onClick={finishTest}
              sx={{ ml: 'auto' }}
            >
              Return to Chat
            </Button>
          </CardActions>
        </Card>
      );
    }
    
    const currentQ = test.questions[currentQuestion];
    
    return (
      <Card sx={{ width: '100%', maxWidth: 600, mx: 'auto', my: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {activeTest}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {test.description}
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
            Question {currentQuestion + 1} of {test.questions.length}
          </Typography>
          <Typography variant="body1" paragraph>
            {currentQ.text}
          </Typography>
          
          <FormControl component="fieldset" fullWidth>
            <RadioGroup
              value={answers[currentQ.id] || ''}
              onChange={(e) => handleAnswerSelect(currentQ.id, e.target.value)}
            >
              {currentQ.options.map((option, index) => (
                <FormControlLabel 
                  key={index} 
                  value={option} 
                  control={<Radio />} 
                  label={option} 
                />
              ))}
            </RadioGroup>
          </FormControl>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
          <Button 
            variant="outlined" 
            startIcon={<ArrowBackIcon />}
            onClick={handlePrevQuestion}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          
          <Button 
            variant="contained" 
            endIcon={currentQuestion < test.questions.length - 1 ? <ArrowForwardIcon /> : null}
            onClick={handleNextQuestion}
            disabled={!answers[currentQ.id]}
          >
            {currentQuestion < test.questions.length - 1 ? 'Next' : 'View Results'}
          </Button>
        </CardActions>
      </Card>
    );
  };

  return (
    <Box className="chatbot-container">
      {/* Left Panel - History, Mode options, and Settings */}
      <Box className="chatbot-left-panel">
        <Typography variant="h6" sx={{ p: 2, fontWeight: 'bold' }}>History</Typography>
        <Divider />
        
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="Conversation History" />
            </ListItemButton>
          </ListItem>
        </List>
        
        <Divider />
        <Typography variant="subtitle2" sx={{ px: 2, py: 1 }}>Chat Modes</Typography>
        
        <List>
          <ListItem disablePadding>
            <ListItemButton 
              selected={chatMode === 'assistant'}
              onClick={() => handleModeChange('assistant')}
            >
              <ListItemIcon>
                <SupportAgentIcon />
              </ListItemIcon>
              <ListItemText primary="Assistant Mode" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton 
              selected={chatMode === 'psychologist'}
              onClick={() => handleModeChange('psychologist')}
            >
              <ListItemIcon>
                <PsychologyIcon />
              </ListItemIcon>
              <ListItemText primary="Psychologist Mode" />
            </ListItemButton>
          </ListItem>
        </List>
        
        <Divider />
        <Typography variant="subtitle2" sx={{ px: 2, py: 1 }}>Settings</Typography>
        
        <List>
          <ListItem>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <FormControlLabel control={<Switch size="small" />} label="Dark Mode" />
          </ListItem>
        </List>
      </Box>

      {/* Center Panel - Chat Interface or Test Interface */}
      <Box className="chatbot-center-panel">
        {/* Chat header */}
        <Box className="chat-header">
          <Typography variant="h6">
            {activeTest ? activeTest : chatMode === 'psychologist' ? 'Psychologist Mode' : 'Assistant Mode'}
          </Typography>
          {activeTest && (
            <IconButton 
              onClick={() => setActiveTest(null)} 
              size="small" 
              sx={{ ml: 1 }}
            >
              <ArrowBackIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
        
        {/* Content area - Chat or Test */}
        {activeTest ? (
          // Test interface
          renderTestInterface()
        ) : (
          // Chat interface
          <>
            <Box className="chat-messages">
              <List sx={{ py: 0 }}>
                {chatHistory.map((chat, index) => (
                  <ListItem 
                    key={index} 
                    sx={{ 
                      display: 'flex',
                      justifyContent: chat.type === 'user' ? 'flex-end' : 'flex-start',
                      px: 2,
                      py: 1
                    }}
                    disableGutters
                    disablePadding
                  >
                    <Box 
                      sx={{ 
                        display: 'flex',
                        flexDirection: chat.type === 'user' ? 'row-reverse' : 'row',
                        alignItems: 'flex-start',
                        maxWidth: '75%'
                      }}
                    >
                      <Avatar 
                        sx={{ 
                          width: 36, 
                          height: 36, 
                          bgcolor: chat.type === 'user' ? 'secondary.main' : 'primary.main',
                          mx: 1
                        }}
                      >
                        {chat.type === 'user' ? <PersonIcon fontSize="small" /> : <SmartToyIcon fontSize="small" />}
                      </Avatar>
                      
                      <Paper 
                        elevation={1} 
                        sx={{ 
                          p: 2, 
                          borderRadius: 2,
                          bgcolor: chat.type === 'user' ? 'secondary.light' : 'white',
                          color: chat.type === 'user' ? 'white' : 'text.primary'
                        }}
                      >
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            wordBreak: 'break-word',
                            fontSize: '16px',
                            lineHeight: 1.5
                          }}
                        >
                          {chat.text}
                        </Typography>
                      </Paper>
                    </Box>
                  </ListItem>
                ))}
                <div ref={messagesEndRef} /> {/* Element for auto-scrolling */}
              </List>
            </Box>
            
            {/* Input area */}
            <Box className="chat-input">
              <Box className="message-input-container">
                <TextField
                  fullWidth
                  multiline
                  maxRows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message here..."
                  variant="standard"
                  InputProps={{
                    disableUnderline: true
                  }}
                  sx={{ 
                    '& .MuiInputBase-root': {
                      fontSize: '16px',
                      py: 1
                    }
                  }}
                />
                <IconButton 
                  color="secondary" 
                  onClick={handleSendMessage}
                  disabled={message.trim() === ''}
                  sx={{ 
                    ml: 1, 
                    p: 1,
                    '&.Mui-disabled': {
                      color: 'rgba(0, 0, 0, 0.26)'
                    }
                  }}
                >
                  <SendIcon />
                </IconButton>
              </Box>
            </Box>
          </>
        )}
      </Box>

      {/* Right Panel - Mental Health Tests */}
      <Box className="chatbot-right-panel">
        <Typography variant="h6" sx={{ p: 2, fontWeight: 'bold' }}>Mental Health Tests</Typography>
        <Divider />
        
        <List>
          {Object.keys(mentalHealthTests).map((testName) => (
            <ListItem key={testName} disablePadding>
              <ListItemButton onClick={() => startTest(testName)}>
                <ListItemIcon>
                  <QuizIcon />
                </ListItemIcon>
                <ListItemText primary={testName} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default ChatBot;