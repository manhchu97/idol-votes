import Link from "next/link";
import { Calendar, CircleDot, HelpCircle } from "lucide-react";
import VotingSessionCard from "@/components/VotingSessionCard";
import { Box, Input, TextField } from "@mui/material";
import Slider from "react-slick"; // Importing react-slick carousel

export default function Home() {
  const bannerImages = [
    "https://oddle-dinein-img.s3.ap-southeast-1.amazonaws.com/tickets/BANNER.jpg",
    "https://oddle-dinein-img.s3.ap-southeast-1.amazonaws.com/tickets/BANNER.jpg",
    "https://oddle-dinein-img.s3.ap-southeast-1.amazonaws.com/tickets/BANNER.jpg",
    "https://oddle-dinein-img.s3.ap-southeast-1.amazonaws.com/tickets/BANNER.jpg",
  ];

  // Slick slider settings for automatic sliding
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true, // Auto-slide feature
    autoplaySpeed: 3000, // Auto-slide every 3 seconds
    arrows: true, // Enable next/prev arrows
    responsive: [
      {
        breakpoint: 768, // For mobile
        settings: {
          dots: true,
          arrows: false, // Hide arrows on mobile
        },
      },
    ],
  };

  return (
    <div className="p-4">
      {/* Banner section with carousel */}
      <Box mb={4}>
        <Slider {...settings}>
          {bannerImages.map((imageUrl, index) => (
            <div key={index}>
              <img
                src={imageUrl}
                alt={`Banner ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </Slider>
      </Box>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">24K+</h2>
        <p className="text-gray-500">Refresh My idol feed</p>
      </div>

      {/* Voting session cards */}
      <div className="space-y-6">
        <VotingSessionCard
          title="K-STAR CHART"
          subtitle="3rd week of Oct."
          date="~10/14(Mon)"
          rank={30}
          href="/vote/1"
          imageUrl="https://kpopvotes.com/vote/1718588192bj4sV5mHjX.png?w=750&t=webp"
        />
      </div>
    </div>
  );
}
