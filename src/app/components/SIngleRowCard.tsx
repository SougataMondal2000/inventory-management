import React from "react";

const SingleRowCard = () => {
  return (
    <div className="bg-white p-4 rounded-xl flex items-center justify-between w-full my-2 pr-10">
      <div className="flex items-center">
        <div className="bg-pink-100 rounded-full p-3">
          <svg
            className="w-6 h-6 text-pink-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0v-2m0 10v-2m-4-4H6m8-2h2m-2 4h2m-4 4h2m-2 4h2m4-4h2m-2 4h2"
            />
          </svg>
        </div>
        <div className="ml-4">
          <div className="text-gray-900 font-semibold">Business loans</div>
          <div className="text-gray-500">It is a long established</div>
        </div>
      </div>
      <div className="text-center">
        <div className="text-gray-900 font-semibold">Lorem Ipsum</div>
        <div className="text-gray-500">Many publishing</div>
      </div>
      <div className="text-center">
        <div className="text-gray-900 font-semibold">Lorem Ipsum</div>
        <div className="text-gray-500">Many publishing</div>
      </div>
      <div className="text-center">
        <div className="text-gray-900 font-semibold">Lorem Ipsum</div>
        <div className="text-gray-500">Many publishing</div>
      </div>

      <button className="text-[#123288] border border-[#123288] rounded-full py-1 px-3 hover:text-[#1814F3] hover:border hover:border-[#1814F3] font-semibold">
        View Details
      </button>
    </div>
  );
};

export default SingleRowCard;
