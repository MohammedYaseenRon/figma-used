import React from "react";

const MainBody = () => {
  return (
    <main className="p-8">
      <div className="bg-white rounded-tl-lg border border-gray-200 h-[calc(100vh-101px-64px)] flex flex-col items-center justify-center">
        <div className="w-[683px] h-[24px] leading-6 mb-6">
          <p className="text-gray-600 font-medium text-2xl">
            There are no brokers added, click on below button to add new.
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg">
          Add Broker
        </button>
      </div>
    </main>
  );
};

export default MainBody;