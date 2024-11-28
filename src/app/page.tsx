"use client";
import { useEffect, useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Image from "next/image";
import StudioImage from "../../public/assets/studio-bg.jpg";
import LogoImage from "../../public/assets/logo.png"; // Đường dẫn đến logo
import SmokeEffect from "../components/SmokeEffect";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0); // Scroll progress (0 -> 1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress (0 at the top, 1 when scrolled enough)
      const progress = Math.min(scrollY / (windowHeight * 0.8), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Properties that change based on scroll progress
  const scale = 1 + 0.6 * scrollProgress; // Zoom out effect from 1 -> 1.6
  const opacity = 1 - scrollProgress; // Gradually fade out title as scrolling down

  return (
    <Box
      sx={{
        minHeight: "200vh", // Ensures enough space for scrolling
        padding: "50px", // General padding
        boxSizing: "border-box",
        backgroundColor: "#000", // Set black background
        color: "#fff", // Set white text color
      }}
    >
      {/* Studio Background */}
      <Box
        sx={{
          position: "relative", // Keeps its position
          width: "100%", // Keeps original size
          height: "70vh", // Maintains height
          overflow: "hidden",
          borderRadius: "30px", // Rounded corners
          transform: `scale(${scale})`, // Gradually zooms out
          transformOrigin: "center center", // Scales from the center
          transition: "transform 0.4s ease", // Smooth animation
        }}
      >
        {/* Studio Image */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "30px", // Matches outer border radius
            overflow: "hidden",
          }}
        >
          <Image
            src={StudioImage}
            alt="Studio background"
            layout="fill"
            objectFit="cover"
          />
        </Box>

        {/* Smoke Effect */}
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

        {/* Title */}
        <Container
          maxWidth="lg"
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            textAlign: "center",
            zIndex: 2,
            color: "white",
            opacity: opacity, // Gradually fades out
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

      {/* Additional Information Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Aligns left, center, and right elements
          padding: "20px 0",
          marginTop: "20px", // Tạo khoảng cách giữa Studio Background và phần thông tin
          backgroundColor: "#000", // Black background
          color: "#fff", // White text
          borderRadius: "30px", // Rounded edges
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.5)", // Shadow effect
          zIndex: 2, // Đặt lớp hiển thị cao hơn Studio Background
          position: "relative", // Đảm bảo z-index hoạt động
        }}
      >
        {/* Studio Name (Left) */}
        <Box sx={{ flex: 1, textAlign: "left", padding: "0 20px" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Dream Studio
          </Typography>
          <Typography variant="body2">
            Your creative hub for innovation and design.
          </Typography>
        </Box>

        {/* Logo (Center) */}
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Image
            src={LogoImage}
            alt="Studio Logo"
            width={80}
            height={80}
            style={{
              borderRadius: "50%", // Makes the logo circular
            }}
          />
        </Box>

        {/* Booking Button (Right) */}
        <Box sx={{ flex: 1, textAlign: "right", padding: "0 20px" }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              padding: "10px 20px",
              borderRadius: "30px",
              textTransform: "none", // Prevents uppercase text
              fontWeight: "bold",
            }}
          >
            Booking Now
          </Button>
        </Box>
      </Box>

      {/* Content below */}
      <Box
        sx={{
          padding: "50px 20px",
          marginTop: "50px", // Appears after additional information
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h4" gutterBottom>
            About Our Studio
          </Typography>
          <Typography variant="body1">
            At Our Studio, we specialize in creating innovative designs and
            delivering unique experiences. Our team of professionals is
            dedicated to bringing your vision to life.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
