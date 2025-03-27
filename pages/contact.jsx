import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import Heading from '@/components/atoms/Heading';
import Social from '@/components/atoms/Social';
import Header from '@/components/organisms/Header';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

function Contact() {
  return (
    <div className='contactp'>
      <Header />
      <Container>
        <div className=" mx-auto p-6 bg-[#EBFAFC] rounded-lg shadow-lg border border-gray-300">
          {/* Heading */}
         <div className='text-center'>
         <Heading level={7}>Contact <span className='text-black'>Us</span></Heading>
         </div>

          <div className="grid grid-cols-[30%_30%_40%] gap-8">
  {/* Left Column (Map) */}
  <div className="rounded-lg shadow-lg w-full">
  <iframe
    className="w-full h-[500px] rounded-lg"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.95373531550413!3d-37.81627974202106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727f795df5c15e!2sFederation%20Square!5e0!3m2!1sen!2s!4v1633157782932!5m2!1sen!2s"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


  {/* Middle Column (Form) */}
  <div>
    <Heading level={10}>How We Can Help You</Heading>
    <form className="mt-4">
      <label className="block mb-2 text-[16px] leading-[24px] font-[400]">* Your work email address</label>
      <input type="email" className="w-full p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400" required />

      <label className="block mt-4 mb-2 text-[16px] leading-[24px] font-[400]">* Subject</label>
      <input type="text" className="w-full p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400" required />

      <label className="block mt-4 mb-2 text-[16px] font-[400] leading-[24px]">* Message</label>
      <textarea className="w-full p-2 border border-gray-400 rounded-md focus:ring-2 focus:ring-blue-400" rows="4" required></textarea>

    <Button variant={"Aboutrig"}>Submit</Button>
    
    </form>
  </div>

  {/* Right Column (Info Sections) */}
  <div className="flex flex-col pr-[70px] gap-4">
    <div>
      <h3 className="text-[16px] leading-[24px] font-[500] text-[#3098F3]">PRICING AND TIMELINE</h3>
      <p className="text-[16px] font-[400] mt-2 text-black">Learn the fundamentals of digital photography in this comprehensive guide. We'll cover camera settings, composition techniques, and post-processing basics to help you start your photography journey.</p>
    </div>

    <div>
      <h3 className="text-[16px] leading-[24px] font-[500] text-[#3098F3]">OUR SUPPORT CENTER</h3>
      <p className="text-[16px] font-[400] mt mt-2 text-black">Learn the fundamentals of digital photography in this comprehensive guide. We'll cover camera settings, composition techniques, and post-processing basics to help you start your photography journey.</p>
    </div>

    <div>
      <h3 className="ttext-[16px] leading-[24px] font-[500] text-[#3098F3]">CONTACT INFORMATION</h3>
      <div className="flex items-center border-b border-black pb-[10px] gap-2  mt-2">
        <div className='w-[28px] h-[28px] rounded-[100%] bg-white flex justify-center items-center'><MdPhone className="text-blue-500 " /></div><span>+234 0897643</span></div>
      <div className="flex border-b pb-[10px] border-black items-center gap-2 mt-2"><div className='w-[28px] h-[28px] rounded-[100%] bg-white flex justify-center items-center'><MdEmail className="text-blue-500" /></div><span>abc1220@gmail.com</span></div>
      <div className="flex border-b pb-[10px] border-black items-center gap-2 mt-2"><div className='w-[28px] h-[28px] rounded-[100%] bg-white flex justify-center items-center shadow-[#00000040]'><MdLocationOn className="text-blue-500" /></div><span>123 Street Road</span></div>
    </div>

    <div className="flex justify-end mt-6 space-x-2">
          <Social href="#" icon={FaFacebook} />
          <Social href="#" icon={FaTwitter} />
          <Social href="#" icon={FaInstagram} />
          <Social href="#" icon={FaLinkedin} />
    </div>
  </div>
</div>

          {/* Social Icons */}
        
        </div>
      </Container>
    </div>
  );
}

export default Contact;
