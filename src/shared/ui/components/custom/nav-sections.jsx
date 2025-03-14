import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { sections } from '../../../constants/custom/nav-sections';

export const NavSections = () => {
  return (
    <Box sx={{ flexGrow: 1, display: { md: 'flex', xs: 'none' }, ml: 2 }}>
      {sections.map((section) => (
        <Button
          key={section.id}
          component={Link}
          to={section.url}
          sx={{
            color: 'white',
          }}
        >
          {section.title}
        </Button>
      ))}
    </Box>
  );
};
