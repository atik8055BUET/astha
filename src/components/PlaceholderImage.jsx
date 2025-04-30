import { Box } from '@mui/material';

/**
 * A component to provide placeholder images for the prototype
 * 
 * @param {Object} props
 * @param {string} props.type - Type of placeholder: 'hero', 'avatar', 'psychologist', 'mentor'
 * @param {string} props.text - Optional text to display 
 * @param {string} props.width - Width of the placeholder
 * @param {string} props.height - Height of the placeholder
 * @param {string} props.color - Background color of the placeholder
 * @param {string} props.textColor - Text color within the placeholder
 * @returns {JSX.Element} A placeholder image
 */
function PlaceholderImage({ 
  type = 'avatar', 
  text, 
  width = '100%', 
  height = '200px',
  color,
  textColor = '#fff',
  ...props
}) {
  // Determine placeholder styling based on type
  const getStyle = () => {
    const baseStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: type === 'avatar' ? '50%' : '8px',
      overflow: 'hidden',
    };

    switch (type) {
      case 'hero':
        return {
          ...baseStyle,
          width: width,
          height: height || '400px',
          backgroundColor: color || '#245168',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        };
      case 'psychologist':
        return {
          ...baseStyle,
          width: width,
          height: height || '100px',
          backgroundColor: color || '#245168',
          fontSize: '1rem',
        };
      case 'mentor':
        return {
          ...baseStyle,
          width: width,
          height: height || '100px',
          backgroundColor: color || '#82b647',
          fontSize: '1rem',
        };
      case 'avatar':
      default:
        return {
          ...baseStyle,
          width: width || '40px',
          height: height || '40px',
          backgroundColor: color || '#82b647',
          fontSize: '1rem',
        };
    }
  };

  // Generate display text based on type and provided text
  const getDisplayText = () => {
    if (text) return text;
    
    switch (type) {
      case 'hero':
        return 'Mental Health Illustration';
      case 'psychologist':
        return 'Psychologist';
      case 'mentor':
        return 'Mentor';
      case 'avatar':
      default:
        return 'A';
    }
  };

  return (
    <Box 
      sx={{
        ...getStyle(),
        color: textColor,
        textAlign: 'center',
        padding: '1rem',
      }}
      {...props}
    >
      {getDisplayText()}
    </Box>
  );
}

export default PlaceholderImage;