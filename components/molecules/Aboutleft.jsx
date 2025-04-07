import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Heading from '../atoms/Heading'
import Button from '../atoms/Button'
import Social from '../atoms/Social'
import Link from 'next/link';

function Aboutleft() {
  return (
    <div className="flex flex-col max-w-xl">
      <Heading level={7}>About <span className="text-black">Us</span></Heading>
      <Heading level={8}>List Your Business</Heading>
      <div className="pb-[20px] py-[10px]">
        <Heading level={9}>
          Join thousands of businesses reaching new customers every day. Our platform helps you grow your visibility and connect with your target audience.
        </Heading>
      </div>
      <div className="w-full sm:w-[180px]">
        <Link href={"/registration"}>
          <Button variant={"Aboutrig"}>Register</Button>
        </Link>
      </div>
      <div className="flex flex-row gap-3 pt-[30px]">
        <Social href={"#"} icon={FaFacebook} />
        <Social href={"#"} icon={FaTwitter} />
        <Social href={"#"} icon={FaInstagram} />
        <Social href={"#"} icon={FaLinkedin} />
      </div>
    </div>
  );
}

export default Aboutleft;
