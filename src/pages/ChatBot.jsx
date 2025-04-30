import { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  TextField, 
  IconButton, 
  List, 
  ListItem, 
  Paper, 
  Avatar,
  Typography
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';

function ChatBot() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { type: 'bot', text: 'Hello! I\'m Astha AI, your mental wellness companion. How are you feeling today?' },
  ]);
  
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

  return (
    <Box 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 64px)', // Adjust for header height
        overflow: 'hidden'
      }}
    >
      {/* Chat messages area */}
      <Box 
        sx={{ 
          flexGrow: 1,
          overflowY: 'auto',
          p: 2,
          bgcolor: '#f8f9fa'
        }}
      >
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
      <Box 
        sx={{ 
          p: 2, 
          borderTop: '1px solid #e0e0e0',
          backgroundColor: '#ffffff'
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center',
            bgcolor: '#f5f5f5',
            borderRadius: 3,
            px: 2,
            py: 0.5
          }}
        >
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
    </Box>
  );
}

export default ChatBot;