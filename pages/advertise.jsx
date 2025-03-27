"use client"; // Ensure this component runs only on the client side

import React, { useEffect, useState } from "react";
import Image from "next/image"; // Next.js Image optimization
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Only Navigation (Pagination removed)
import "swiper/css";
import "swiper/css/navigation";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Social from "@/components/atoms/Social";
import Container from "@/components/atoms/Container";
import Header from "@/components/organisms/Header";
import Button from "@/components/atoms/Button";

const Advertise = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensure it only renders on client
  }, []);

  const items = [
    { id: 1, image: "/image/ad1.png", date: "Homepage Advert", description: "Learn the fundamentals of digital photography in this comprehensive guide." },
    { id: 2, image: "/image/ad2.png", date: "Subpage Advert", description: "Learn the fundamentals of digital photography in this comprehensive guide." },
    { id: 3, image: "/image/ad3.png", date: "Newsletter Advert", description: "Learn the fundamentals of digital photography in this comprehensive guide." },
    { id: 4, image: "/image/ad4.png", date: "Mobile App Advert", description: "Learn the fundamentals of digital photography in this comprehensive guide." },
  ];

  if (!mounted) return null; // Prevent SSR rendering mismatch

  return (
    <div>
      <Header />
      <Container>
        {/* Swiper Slider */}
        <Swiper slidesPerView={4} spaceBetween={20} navigation={true} modules={[Navigation]} className="mySwiper">
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="p-4 items-center text-center rounded-lg">
                <Image src={item.image} alt="Photography" width={500} height={300} className="w-full h-52 object-cover rounded-lg" />
                <p className="text-black font-[400] text-[16px] mt-4">{item.date}</p>
                <p className="text-black pb-[20px] font-[300] text-[16px] mt-2">{item.description}</p>
                <Button variant={"Aboutrig"}> Advertise</Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Social Icons */}
        <div className="flex justify-center flex-row gap-2 pt-6">
          <Social href="#" icon={FaFacebook} />
          <Social href="#" icon={FaTwitter} />
          <Social href="#" icon={FaInstagram} />
          <Social href="#" icon={FaLinkedin} />
        </div>
      </Container>
    </div>
  );
};

export default Advertise;
