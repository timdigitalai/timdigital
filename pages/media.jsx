"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Social from "@/components/atoms/Social";
import Container from "@/components/atoms/Container";
import Header from "@/components/organisms/Header";
import Heading from "@/components/atoms/Heading";

const Media = () => {
  const [imageHeight, setImageHeight] = useState(300); // Initial height of image
  const items = [
    {
      id: 1,
      image: "/image/media.png",
      date: "Published On Mar 15, 2024",
      description:
        "Learn the fundamentals of digital photography in this comprehensive guide. We'll cover camera settings, composition techniques, and post-processing basics to help you start your photography journey.",
    },
    {
      id: 2,
      image: "/image/media.png",
      date: "Published On Mar 15, 2024",
      description:
        "Learn the fundamentals of digital photography in this comprehensive guide. We'll cover camera settings, composition techniques, and post-processing basics to help you start your photography journey.",
    },
    {
      id: 3,
      image: "/image/media.png",
      date: "Published On Mar 15, 2024",
      description:
        "Learn the fundamentals of digital photography in this comprehensive guide. We'll cover camera settings, composition techniques, and post-processing basics to help you start your photography journey.",
    },
    {
      id: 4,
      image: "/image/media.png",
      date: "Published On Mar 15, 2024",
      description:
        "Learn the fundamentals of digital photography in this comprehensive guide. We'll cover camera settings, composition techniques, and post-processing basics to help you start your photography journey.",
    },
  ];

  // Handle Ctrl + Press event to change image height
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey) {
        setImageHeight(450); // Increase height when Ctrl is pressed
      } else {
        setImageHeight(300); // Default height when Ctrl is not pressed
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keyup", handleKeyPress);
    };
  }, []);

  return (
    <div className="overflow-x-hidden min-h-screen bg-white">
      <Header />
      <Container>
        <div className="text-center ">
          <Heading level={7}>Media</Heading>
        </div>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="mySwiper px-4 xl:px-0"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="shadow-md p-4 rounded-lg h-full flex flex-col justify-between min-h-[450px]">
                <Image
                  src={item.image}
                  alt="Photography"
                  width={500}
                  height={imageHeight}
                  className="w-full object-cover rounded-lg"
                />
                <p className="text-black font-medium text-base mt-4">{item.date}</p>
                <p className="text-black font-light text-base mt-2 line-clamp-4">{item.description}</p>
                <button className="text-blue-500 mt-2 hover:underline self-start">View →</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Buttons and Social Icons */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-12 gap-6">
          {/* Pagination */}
          <div className="flex flex-wrap space-x-2">
            <button className="bg-gray-200 px-4 py-2 rounded">Previous</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">1</button>
            <button className="bg-gray-200 px-4 py-2 rounded">2</button>
            <button className="bg-gray-200 px-4 py-2 rounded">3</button>
            <button className="bg-gray-200 px-4 py-2 rounded">Next</button>
          </div>

          {/* Social Icons */}
          <div className="flex flex-row gap-3">
            <Social href="#" icon={FaFacebook} />
            <Social href="#" icon={FaTwitter} />
            <Social href="#" icon={FaInstagram} />
            <Social href="#" icon={FaLinkedin} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Media;
