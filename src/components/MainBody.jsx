import React from "react";

const MainBody = () => {
    return (
      <main className="fixed w-[1153px] h-[817px] top-[133px] left-[327px] bg-white rounded-tl-lg px-8 py-2 gap-6 bg-white">
        <div className="flex flex-col items-center justify-center h-screen ">
          <p className="text-gray-600 text-lg">
            There are no brokers added, click on below button to add new.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded hover:bg-blue-700 transition-colors">
            Add Broker
          </button>
        </div>
      </main>
    );
  };


export default MainBody;
  