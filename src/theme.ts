'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Đặt mặc định chế độ dark mode
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#121212', // Nền mặc định đen
      paper: '#1d1d1d', // Nền cho các thành phần
    },
    text: {
      primary: '#ffffff', // Màu chữ chính
      secondary: '#b0b0b0', // Màu chữ phụ
    },
  },
  typography: {
    fontFamily: "'GeistVF', sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
