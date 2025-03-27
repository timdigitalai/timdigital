import Container from "@/components/atoms/Container";
import Heading from "@/components/atoms/Heading";
import React from "react";
import { FaUser, FaGlobe, FaEnvelope, FaBuilding, FaMapMarkerAlt, FaPhone, FaCalendarAlt, FaCity } from "react-icons/fa";
import InputField from "@/components/atoms/InputField"; // Importing InputField component

const countries = ["United States", "United Kingdom", "India", "Pakistan", "Canada", "Australia"];
const nationalities = ["American", "British", "Indian", "Pakistani", "Canadian", "Australian"]; 

const Registration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b py-[50px] from-blue-300 to-blue-100 flex items-center justify-center">
      <Container>
        <div className="bg-white shadow-lg rounded-xl p-8 w-[900px]">
          {/* Title */}
          <h2 className="text-center text-xl font-semibold text-blue-600 mb-4">
            Travellers Registration
          </h2>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField label="Full Name" icon={<FaUser />} placeholder="Enter your name" />
            <InputField label="Date of Birth" icon={<FaCalendarAlt />} type="date" />

            <div>
            <label className="block font-semibold mb-1 flex items-center gap-1">
              <FaGlobe className="text-[#4FBBEA] w-[20px] h-[23px]" /><Heading level={13}>Nationality</Heading>
            </label>
            <select className="w-full px-3 py-2 border rounded-md">
              <option>Select Nationality</option>
              {nationalities.map((nationality, index) => (
                <option key={index} value={nationality}>{nationality}</option>
              ))}
            </select>
          </div>

            <InputField label="Phone Number" icon={<FaPhone />} placeholder="Enter your phone number" />
            
            <div>
              <label className="block font-semibold mb-1 flex items-center gap-1">
                <Heading level={13}>Gender</Heading>
              </label>
              <div className="flex gap-4">
                <label><input type="radio" name="gender" /> Male</label>
                <label><input type="radio" name="gender" /> Female</label>
              </div>
            </div>

            <InputField label="Mobile Number" placeholder="Enter mobile number" />
            <InputField label="Email" icon={<FaEnvelope />} type="email" placeholder="Enter email" />
 
            <div className="pb-[20px] col-span-2">
              <Heading level={10}>Company & Address Information</Heading>
            </div>

           <div className="col-span-2">
           <InputField label="Company Name" icon={<FaBuilding />} placeholder="Enter company name" />
           </div>
         <div className="col-span-2">
         <InputField label="Address" icon={<FaMapMarkerAlt />} placeholder="Street Address" />
         </div>
            <InputField label="City" icon={<FaCity />} placeholder="Enter city" />

            <div>
              <label className="block font-semibold mb-1 flex items-center gap-1">
                <FaGlobe className="text-[#4FBBEA] w-[20px] h-[23px]" />
                <Heading level={13}>Country</Heading>
              </label>
              <select className="w-full px-3 py-2 border rounded-md">
                <option>Select Country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Register Button */}
          <div className="mt-6 text-center">
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Register Now
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Registration;
