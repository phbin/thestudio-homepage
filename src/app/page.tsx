'use client';
import Image from "next/image";
import { Container, Box, Typography, Button } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import StudioImage from "../assets/image.jpg"
const useStyles = makeStyles()((theme) => ({
  header: {
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  },
  title: {
    fontWeight: 700,
    fontSize: '2.5rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
  },
  subtitle: {
    color: theme.palette.text.secondary,
  },
  aboutSection: {
    marginTop: theme.spacing(6),
    display: 'flex', // Sử dụng Flexbox
    flexDirection: 'column',
    gap: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  textContent: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    width: '100%',
    maxWidth: '400px',
  },
  footer: {
    textAlign: 'center',
    marginTop: theme.spacing(6),
    padding: theme.spacing(2, 0),
    backgroundColor: theme.palette.grey[100],
  },
}));

export default function Home() {
  const { classes } = useStyles();

  return (
    <Container maxWidth="lg">
      {/* Header */}
      <Box component="header" className={classes.header}>
        <Typography variant="h2" component="h1" className={classes.title} gutterBottom>
          Welcome to Our Studio
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Creating innovative designs and unique experiences for you.
        </Typography>
      </Box>

      {/* About Section */}
      <Box className={classes.aboutSection}>
        {/* Text Content */}
        <Box className={classes.textContent}>
          <Typography variant="h4" gutterBottom>
            About Our Studio
          </Typography>
          <Typography variant="body1" paragraph>
            Our studio specializes in crafting visually stunning and functional
            designs that captivate and inspire. With years of experience, we
            bring creativity and precision to every project we work on.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Learn More
          </Button>
        </Box>

        {/* Image */}
        <Box className={classes.imageContainer}>
          <Image
            src={StudioImage}
            alt="Studio workspace"
            className={classes.image}
            width={400}
            height={300}
          />
        </Box>
      </Box>

      {/* Footer */}
      <Box component="footer" className={classes.footer}>
        <Typography variant="body2" color="textSecondary">
          © 2024 Our Studio. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
}
