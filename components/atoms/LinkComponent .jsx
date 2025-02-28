import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import '../../app/globals.css';

const LinkComponent = ({ href, children, variant }) => {
  let linkStyle = "";

  switch (variant) {
    case "primary":
      linkStyle = "text-blue-600 hover:underline";
      break;
    case "secondary":
      linkStyle = "text-gray-700 hover:text-gray-900";
      break;
    case "success":
      linkStyle = "text-green-600 hover:text-green-700";
      break;
    case "danger":
      linkStyle = "text-red-600 hover:text-red-700";
      break;
    case "custom":
      linkStyle =
        "text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-700";
      break;
    default:
      linkStyle = "text-black hover:underline";
      break;
  }

  return (
    <Link href={href} className={`${linkStyle}`}>
      {children}
    </Link>
  );
};

LinkComponent.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};

export default LinkComponent;
