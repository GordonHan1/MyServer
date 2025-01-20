import React from 'react';
import { Box, Typography, Link, Container, Button } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

export function UnderConstruction() {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          gap: 3
        }}
      >
        <ConstructionIcon sx={{ fontSize: 100, color: 'warning.main' }} />
        <Typography variant="h2" component="h1">
          Under Construction
        </Typography>
        <Typography variant="h5" color="text.secondary">
          This site is currently being built. Please check back later!
        </Typography>
        <Button
          component={Link}
          href="/landing"
          variant="contained"
          color="primary"
          size="large"
          sx={{
            borderRadius: 2,
            padding: '12px 24px',
            fontSize: '1.1rem',
            textTransform: 'none',
            '&:hover': {
              transform: 'translateY(-2px)',
              transition: 'transform 0.2s'
            }
          }}
        >
          View Prototype Page
        </Button>
      </Box>
    </Container>
  );
};
