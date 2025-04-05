const StatusBadge = ({ status }) => {
    const base = "text-xs px-2 py-1 rounded ";
    const styles =
      status === "Active"
        ? "bg-green-100 text-green-600"
        : "bg-yellow-100 text-yellow-600";
  
    return <span className={base + styles}>{status}</span>;
  };
  
  export default StatusBadge;
  