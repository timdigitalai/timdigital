import BusinessRow from "../molecules/BusinessRow";

const BusinessListingsTable = ({ businesses }) => {
  return (
    <div className="overflow-x-auto rounded border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-[#E6F5FF] text-gray-600">
          <tr>
            <th className="px-4 py-2 text-left">Business</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Location</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {businesses.map((business, idx) => (
            <BusinessRow key={business.id || idx} business={business} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusinessListingsTable;