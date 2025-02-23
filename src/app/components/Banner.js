"use client";
import React, { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";


const videos = ["./banner-video.mp4"];
const Banner = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  return (
    <>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Active Video */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            key={currentVideoIndex} // Force re-render when changing videos
            autoPlay
            muted
            loop
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source
              src={videos[currentVideoIndex]}
              type="video/mp4"
              rel="preload"
            />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
