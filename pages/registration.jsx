import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Heading';
import Header from '@/components/organisms/Header';
import Image from 'next/image';
import React from 'react';
import "../app/globals.css";
import Container from '@/components/atoms/Container';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

function Registration() {
  return (
    <div>
      <Header />
      <div className='text-center pb-[20px]'>
        <Heading level={7}>Registration</Heading>
      </div>
      <Container>
        <div className="relative py-[10%] flex items-center justify-center">
          {/* Background Image */}
          <div className="rounded-[10px] absolute inset-0 bg-[url('/image/hand1.png')] bg-cover bg-center opacity-70"></div>

          {/* Gradient Layer */}
          <div className="absolute rounded-[10px] inset-0 bg-[linear-gradient(147.76deg,rgba(47,113,159,0.1)_0%,rgba(79,187,234,0.5)_102%)] backdrop-blur-[10%]"></div>

          {/* Centered White Box */}
          <div className="relative z-10 bg-white flex flex-col items-center justify-center px-[20px] py-[40px] gap-[10px] shadow-lg rounded-lg">
            <Image src={"/image/logo.png"} width={80} height={80} alt="Logo" />
            <Heading level={11}>Travel Itinerary Manager</Heading>
            <Heading level={12}>The Future of Planning</Heading>
            <div className="button flex gap-[20px] mt-[10px]">
              <Link href={"/bussinusspage"}><Button variant={"ris"}>Business Registration</Button></Link>
              <Button variant={"ris"}>Travel Registration</Button>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="absolute bottom-5 flex gap-[10px]">
            <Link href={"#"}>
            <div className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center shadow-md'>
              <FaFacebook className="text-blue-500" />
            </div>
            </Link>
           <Link href={"#"}>
           <div className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center shadow-md'>
              <FaTwitter className="text-blue-500" />
            </div>
           </Link>
            <Link href={"#"}>
            <div className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center shadow-md'>
              <FaInstagram className="text-pink-500" />
            </div>
            </Link>
            <Link href={"#"}>
            <div className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center shadow-md'>
              <FaLinkedin className="text-blue-700" />
            </div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Registration;
