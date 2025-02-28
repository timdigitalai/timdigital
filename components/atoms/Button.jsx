"use client"; // Ensure this is a client component

import Link from "next/link";
import PropTypes from "prop-types";
import "../../app/globals.css";

const Button = ({ href, children, variant, onClick }) => {
  let buttonStyle = "";

  switch (variant) {
    case "primary":
      buttonStyle = "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition";
      break;
    case "signup":
      buttonStyle =
        "bg-white text-[#55DCEB]  px-4 py-2 text-sm rounded-[13px] border-[1px] border-[#55DCEB] transition  shadow-[2px_2px_12.8px_0px_#0000005E]";
      break;
      case "white":
        buttonStyle =
          "bg-white text-[#8484849E]  px-[10px] py-[5px] text-[14px] font-[700] rounded-[13px] border-[1px] border-[#B0B0B0CC] transition  shadow-[#0000002E]";
        break;
        case "login":
        buttonStyle =
          "bg-white text-white login w-[70%] px-[10px] py-2 text-[14px] font-[700] rounded-[10px] border-[1px] border-[#B0B0B0CC] transition  shadow-[#0000002E]";
        break;
        case "black":
          buttonStyle =
            "text-white  w-[64%] py-[5px] bg-[#0E0E0EA3]  text-[11px] font-[700]  border-[1px] border-[#B0B0B0CC] transition  shadow-[#0000002E]";
          break;
    default:
      buttonStyle = "bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400";
      break;
  }

  return href ? (
    <Link href={href} passHref>
      <a className={`${buttonStyle}`}>{children}</a>
    </Link>
  ) : (
    <button className={`${buttonStyle}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string.isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
