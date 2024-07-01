const Metrics = ({ title, amount, img }) => {
  return (
    <div className="bg-white py-4 px-6 rounded-2xl flex items-center my-2">
      <div className="bg-blue-100 rounded-full p-3">
        <img src={img} alt="" />
        <svg
          className="w-[40px] h-[40px] text-blue-500"
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
        <div className="text-[#718EBF] text-sm">{title}</div>
        <div className="text-[25px] font-semibold">${amount}</div>
      </div>
    </div>
  );
};

export default Metrics;
