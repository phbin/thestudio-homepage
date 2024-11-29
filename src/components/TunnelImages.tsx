"use client";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const imageList = [
  { id: 1, src: "/assets/image1.jpg", alt: "Image 1" },
  { id: 2, src: "/assets/image2.jpg", alt: "Image 2" },
  { id: 3, src: "/assets/image3.jpg", alt: "Image 3" },
  { id: 4, src: "/assets/image4.jpg", alt: "Image 4" },
  { id: 5, src: "/assets/image5.jpg", alt: "Image 5" },
  { id: 6, src: "/assets/image6.jpg", alt: "Image 6" },
  { id: 7, src: "/assets/image7.jpg", alt: "Image 7" },
  { id: 8, src: "/assets/image8.jpg", alt: "Image 8" },
];

const directions = [
  { x: -1, y: -1 }, // Trái trên
  { x: 1, y: -1 },  // Phải trên
  { x: -1, y: 1 },  // Trái dưới
  { x: 1, y: 1 },   // Phải dưới
  { x: 0, y: -1 },  // Lên giữa
  { x: 0, y: 1 },   // Xuống giữa
  { x: -1, y: 0 },  // Trái giữa
  { x: 1, y: 0 },   // Phải giữa
];

export default function TunnelImages() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [allowOuterScroll, setAllowOuterScroll] = useState(false); // Cho phép cuộn ngoài Tunnel

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const delta = event.deltaY;

      // Nếu cuộn ngược lên đầu Tunnel
      if (scrollProgress <= 0 && delta < 0) {
        setAllowOuterScroll(true); // Cho phép cuộn lên nội dung trên
        return;
      }

      // Nếu cuộn xuống từ nội dung trên, tái kích hoạt Tunnel
      if (allowOuterScroll && delta > 0) {
        setAllowOuterScroll(false);
        event.preventDefault();
        setScrollProgress(0.1); // Đặt lại trạng thái để bắt đầu Tunnel
        return;
      }

      // Dừng cuộn ngoài khi đang trong Tunnel
      if (!allowOuterScroll) {
        event.preventDefault();
        setScrollProgress((prev) => {
          const newProgress = prev + delta * 0.002; // Điều chỉnh tốc độ cuộn
          if (newProgress < 0) return 0; // Không cuộn ngược quá đầu
          if (newProgress > imageList.length + 1) return imageList.length + 1; // Không cuộn quá danh sách
          return newProgress;
        });
      }
    };

    const container = document.getElementById("tunnel-images");
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [scrollProgress, allowOuterScroll]);

  return (
    <Box
      id="tunnel-images"
      sx={{
        width:"100%",
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(180deg, #fff,#FFF8EA, #FDEFD4)",
        perspective: "1200px",
        position: "relative",
        color: "#fff",
      }}
    >
      {imageList.map((image, index) => {
        const progress = scrollProgress - index * 0.5; 
        const isVisible = progress > 0 && progress < 2; 

        const direction = directions[index % directions.length];
        const translateX = direction.x * Math.max(progress * 600, 0);
        const translateY = direction.y * Math.max(progress * 600, 0);
        const scale = Math.max(1 + progress * 2, 1); 
        const opacity = progress >= 2 ? 0 : Math.min(progress, 1); 

        return (
          <Box
            key={image.id}
            sx={{
              position: "absolute",
              width: "300px",
              height: "200px",
              transform: `translate(-50%, -50%) 
                translateX(${translateX}px) 
                translateY(${translateY}px) 
                scale(${scale})`,
              opacity: isVisible ? opacity : 0,
              transition: "transform 0.5s ease, opacity 0.5s ease",
              top: "50%",
              left: "50%",
              transformOrigin: "center",
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              style={{
                borderRadius: "16px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",
              }}
            />
          </Box>
        );
      })}

      {scrollProgress >= imageList.length && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Typography variant="h2">Welcome to Thé Studio</Typography>
          <Typography variant="body1">
            Explore and experience our designs.
          </Typography>
        </Box>
      )}
    </Box>
  );
}
