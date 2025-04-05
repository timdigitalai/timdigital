const StatCard = ({ icon, title, value, change }) => (
    <div className="bg-[#4EB9E9] p-4 rounded-xl flex items-center space-x-4 shadow">
      <div className="text-black bg-[white] w-[20%] flex items-center justify-center rounded-[5px] h-[40px] text-2xl">{icon}</div>
      <div className=" flex flex-col">
        <div className="text-white text-sm">{title}</div>
        <div className="flex items-center gap-3 ">
        <div className="text-xl text-white font-bold">{value}</div>
        <div className="text-white text-xs">{change}</div>
        </div>
      </div>
    </div>
  );
  
  export default StatCard;
  