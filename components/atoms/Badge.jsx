export const Badge = ({ text, color }) => (
    <span
      className={`px-3 bg-customBlue text-[1E40AF] py-1 rounded-full text-xs font-medium  bg-${color}-500`}
    >
      {text}
    </span>
  );