import { useEffect, useState } from "react";
import { fetchShares } from "../../utils/api"

const Table = () => {
  const [shares, setShares] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchShares();
        setShares(data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <table className="w-full font-roboto mt-4">
        <thead className="h-9">
          <tr className="bg-customBlack text-xs text-white border border-customBlack">
            <th className="text-left pl-1">Status</th>
            <th className="text-left">Read-Only</th>
            <th className="text-left pl-3">Name</th>
            <th className="text-left pl-28">Path</th>
            <th className="text-left pl-16">Guest Access</th>
            <th className="text-left pr-4">Comment</th>
          </tr>
        </thead>
      </table>
      <div className="border-2 border-customBlack max-h-32 overflow-y-auto">
        <table className="w-full my-2 font-roboto border-collapse">
          <tbody>
            {shares !== null ? shares.map((share, index) => (
              <tr key={index} className="text-custumBlack text-xs">
                <td className="pl-1">{share.status}</td>
                <td className="pl-8">{share.readOnly}</td>
                <td className="pl-26">{share.name}</td>
                <td className="pl-8">{share.path}</td>
                <td className="pl-16">{share.guestAccess}</td>
                <td>{share.comment}</td>
              </tr>
            )): "Cargando..."}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
