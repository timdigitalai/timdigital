import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image"; // Next.js optimized image
import '../../app/globals.css';

function Mediaitems() {
  const items = [
    {
      id: 1,
      image: "/image/media.png",
      date: "Published On Mar 15, 2024",
      description: "Learn the fundamentals of digital photography in this comprehensive guide. We'll cover camera settings, composition techniques, and post-processing basics to help you start your photography journey.",
    },
    {
      id: 2,
      image: "/image/media.png",
      date: "Published On Mar 15, 2024",
      description: "Learn the fundamentals of digital photography in this comprehensive guide. We'll cover camera settings, composition techniques, and post-processing basics to help you start your photography journey.",
    },
    {
      id: 3,
      image: "/image/media.png",
      date: "Published On Mar 15, 2024",
      description: "Learn the fundamentals of digital photography in this comprehensive guide. We'll cover camera settings, composition techniques, and post-processing basics to help you start your photography journey.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <Swiper
        slidesPerView={1} 
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="p-4 rounded-lg shadow-md border">
              <Image
                src={item.image}
                alt="Photography"
                width={500}
                height={300}
                className="w-full h-52 object-cover rounded-lg"
              />
              <p className="text-black font-medium text-[16px] mt-4">{item.date}</p>
              <p className="text-black font-light text-[16px] mt-2">{item.description}</p>
              <button className="text-blue-500 mt-2 hover:underline">View →</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Mediaitems;
