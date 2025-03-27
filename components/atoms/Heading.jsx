import React from "react";
import PropTypes from "prop-types";

const Heading = ({ level, children }) => {
  const HeadingTag = `h${Number(level)}`; // Ensure it's a valid number

  const getHeadingStyles = (level) => {
    switch (Number(level)) { // Ensure numeric comparison
      case 1:
        return "xl:text-[36px] lg:text-[36px] md:text-[30px] sm:text-[25px] text-[17px] font-medium text-customGray";
      case 2:
        return "text-[20px] font-[700] text-[#4FBBEA]";
      case 3:
        return "text-[13px] font-[700] tracking-[47%] word-spaing text-white";
      case 4:
        return "text-[24px] font-[400] leading-[30px] blue-space  text-[#55DCEB]";
      case 5:
        return "text-[13px] font-[700] text-[#4FBBEA] leading-[16.16px]";
      case 6:
        return "text-[10px] font-[400] text-[#161616]";
        case 7:
          return "text-[64px] font-[500] text-[#4FBBEA]";
          case 8:
            return "text-[40px] font-[500] text-[#000000]";
            case 9:
              return "text-[20px] font-[400] text-[#000000] leading-[30px]";
              case 10:
              return "text-[20px] font-[500] text-[#4FBBEA] leading-[24px]";
              case 11:
                return "text-[24px] font-[500] text-[#4FBBEA] leading-[100%]";
                case 12:
                  return "text-[32px] font-[500] text-black leading-[100%]";
                  case 13:
                    return "text-[24px] font-[400] text-black leading-[24px]";
      default:
        return "text-lg";
    }
  };

  const headingStyles = getHeadingStyles(level);

  return <HeadingTag className={headingStyles}>{children}</HeadingTag>;
};

Heading.propTypes = {
  level: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Accept both string & number
};

export default Heading;
