import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

const SmokeEffect = dynamic(() => import('../components/SmokeEffect'), {
  ssr: false, 
});

export default function Homepage() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <SmokeEffect />
    </Box>
  );
}
