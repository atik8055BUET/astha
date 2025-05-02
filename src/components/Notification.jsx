import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  IconButton
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import EventIcon from '@mui/icons-material/Event';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const notificationData = [
  {
    id: 1,
    type: 'event',
    title: 'Upcoming Session',
    description: 'You have a therapy session scheduled tomorrow at 3:00 PM',
    time: '1 hour ago',
    icon: <EventIcon color="primary" />
  },
  {
    id: 2,
    type: 'announcement',
    title: 'New Article Published',
    description: 'Check out our latest article on managing stress during exams',
    time: '3 hours ago',
    icon: <AnnouncementIcon color="info" />
  },
  {
    id: 3,
    type: 'reminder',
    title: 'Complete Your Profile',
    description: 'Please complete your profile to get personalized recommendations',
    time: '1 day ago',
    icon: <TaskAltIcon color="success" />
  }
];

const NotificationItem = ({ notification }) => {
  return (
    <React.Fragment>
      <ListItem alignItems="flex-start" sx={{ py: 1 }}>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: 'rgba(130, 182, 71, 0.1)' }}>
            {notification.icon}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="subtitle2" component="span" fontWeight="bold">
              {notification.title}
            </Typography>
          }
          secondary={
            <React.Fragment>
              <Typography variant="body2" component="span" color="text.primary">
                {notification.description}
              </Typography>
              <Typography variant="caption" component="p" color="text.secondary" sx={{ mt: 0.5 }}>
                {notification.time}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
};

const Notification = ({ onClose }) => {
  return (
    <Box sx={{ width: 320, maxHeight: 400, overflow: 'auto' }}>
      <Box sx={{ 
        p: 2, 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <Typography variant="h6">Notifications</Typography>
        <IconButton size="small" onClick={onClose}>
          <CancelIcon fontSize="small" />
        </IconButton>
      </Box>
      <List sx={{ width: '100%', bgcolor: 'background.paper', py: 0 }}>
        {notificationData.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
        {notificationData.length === 0 && (
          <ListItem>
            <ListItemText
              primary="No notifications"
              secondary="You're all caught up!"
            />
          </ListItem>
        )}
      </List>
      <Box sx={{ p: 1.5, textAlign: 'center', borderTop: '1px solid #e0e0e0' }}>
        <Typography 
          variant="body2" 
          component="a" 
          href="#" 
          sx={{ color: 'primary.main', textDecoration: 'none' }}
        >
          View all notifications
        </Typography>
      </Box>
    </Box>
  );
};

export default Notification;
