import React from 'react';
import { Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const StarRating = ({ rating, totalStars = 5 }) => {
  return (
    <Box display="flex" alignItems="center">
      {[...Array(totalStars)].map((_, index) => {
        const fillPercentage = Math.min(Math.max(rating - index, 0), 1) * 100;
        return (
          <Box
            key={index}
            position="relative"
            display="inline-block"
            width={24}
            height={24}
          >
            <StarIcon style={{ color: '#E0E0E0' }} />
            <StarIcon
              style={{
                color: '#FFD700',
                position: 'absolute',
                top: 0,
                left: 0,
                clipPath: `inset(0 ${100 - fillPercentage}% 0 0)`,
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default StarRating;
