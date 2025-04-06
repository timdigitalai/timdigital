const ReviewsTop = ({ icon, title, value, change, iconColor = "black", iconBg = "white" }) => (
    <div className="bg-[#4EB9E9] p-4 rounded-xl flex items-center space-x-4 shadow">
      <div
        className="w-[52px] h-[52px] flex items-center justify-center rounded-full text-2xl"
        style={{ backgroundColor: iconBg, color: iconColor }}
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <div className="text-white text-[24px] font-bold">{title}</div>
        <div className="flex items-center gap-3">
          <div className="text-white text-[16px] font-medium">{change}</div>
        </div>
      </div>
    </div>
  );
  
  export default ReviewsTop;
  