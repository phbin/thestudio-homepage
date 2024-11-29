"use client";
import { useEffect, useState  } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Image from "next/image";
import StudioImage from "../../public/assets/studio-bg.jpg";
import LogoImage from "../../public/assets/logo.png";
import SmokeEffect from "../components/SmokeEffect";
import TunnelImages from "../components/TunnelImages";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const progress = Math.min(scrollY / (windowHeight * 0.8), 1);
      setScrollProgress(progress);
    }
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = 1 + 0.6 * scrollProgress; 
  const opacity = 1 - scrollProgress; 

  return (
    <Box>
    <Box
      sx={{
        padding: { xs: "10px", sm: "50px" }, 
        boxSizing: "border-box",
        backgroundColor: "#000", 
        color: "#fff", 
        height:"100vh"
      }}
    >
      <Box
        sx={{
          position: "relative", 
          width: "100%",
          height: "70vh", 
          overflow: "hidden",
          borderRadius: "30px", 
          transform: `scale(${scale})`, 
          transformOrigin: "center center", 
          transition: "transform 0.4s ease", 
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "30px", 
            overflow: "hidden",
          }}
        >
          <Image
            src={StudioImage}
            alt="Studio background"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        >
          <SmokeEffect />
        </Box>

        <Container
          maxWidth="lg"
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            textAlign: "center",
            zIndex: 2,
            color: "white",
            opacity: opacity, 
            transition: "opacity 0.4s ease",
          }}
        >
          <Typography variant="h1" gutterBottom>
            Thé Studio
          </Typography>
          <Typography variant="h6">
            Creating innovative designs and unique experiences for you.
          </Typography>
        </Container>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", 
          padding: { xs: "10px 0", sm: "20px 0" }, 
          backgroundColor: "#000", 
          color: "#fff", 
          borderRadius: "30px",
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.5)",
          zIndex: 2,
          position: "relative",
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: "left",
            padding: { xs: "0 10px", sm: "0 20px" }, 
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "16px", sm: "24px" }, 
            }}
          >
            Thé Studio
          </Typography>
        </Box>

        <Box
          sx={{
            textAlign: "center",
            display:"flex",
            alignItems:"center"
          }}
        >
          <Image
            src={LogoImage}
            alt="Studio Logo"
            width={50} 
            height={50}
            style={{
              borderRadius: "50%",
            }}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            textAlign: "right",
            padding: { xs: "0 10px", sm: "0 20px" }, 
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{
              padding: { xs: "6px 12px", sm: "10px 20px" }, 
              fontSize: { xs: "12px", sm: "16px" }, 
              borderRadius: "20px", 
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Booking Now
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom>
            About Thé Studio
          </Typography>
          <Typography variant="body1">
            At Our Studio, we specialize in creating innovative designs and
            delivering unique experiences. Our team of professionals is
            dedicated to bringing your vision to life.
          </Typography>
        </Container>
      </Box>
      
    </Box>
    <Box    >
      <TunnelImages />
    </Box>
    </Box>
  );
}
