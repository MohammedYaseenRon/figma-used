import React from "react";

const data = [
  {
    id: 1,
    name: "Rajesh Hari",
    company: "ABC Insurance",
    phone: "+91 1234567891",
    email: "abcinsurance@gmail.com",
    date: "23/04/2022",
    status: "In-Progress",
  },
];

const Card = () => {
  return (
    <main className="fixed top-[214px] w-[1153px]  ">
      <div className="bg-white rounded-l-lg border border-gray-200 flex flex-col items-center justify-between h-full">
        <div className="overflow-hidden w-full">
          <table className="w-full">
            <thead className="bg-[#BEDAFF]">
              <tr>
                <th className="px-4 py-2 text-left">S.no</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Company Name</th>
                <th className="px-4 py-2 text-left">Phone Number</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Onboarded Date</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {Array(12)
                .fill(data[0])
                .map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{row.name}</td>
                    <td className="px-4 py-2">{row.company}</td>
                    <td className="px-4 py-2">{row.phone}</td>
                    <td className="px-4 py-2">{row.email}</td>
                    <td className="px-4 py-2">{row.date}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          index % 3 === 0
                            ? "text-green-600"
                            : "text-orange-600"
                        } font-bold`}
                      >
                        {index % 3 === 0 ? "Active" : "In-Progress"}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Card;
