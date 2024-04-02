import React from "react";

const DatasetCard = () => {
  return (
    <div className="relative flex flex-col gap-[10px] rounded-xl bg-white p-4 ring ring-indigo-50 w-[300px] group cursor-pointer">
      <div className="flex row gap-[5px] h-[50px]">
        <img
          className="h-[45px] w-[45px]"
          src="/icons/types/video.svg"
          alt=""
        />
        <p className="font-semibold text-[20px] leading-[25px]">
          My cute little dataset asdasd
        </p>
      </div>
      <div className="flex">
        <div className="flex flex-row justify-center w-[100px] rounded-xl border bg-indigo-500 bg-opacity-50 px-3 py-1.5 text-[10px] font-bold uppercase text-white">
          Technology
        </div>
        <div className="flex flex-row justify-center w-[75px] rounded-xl border bg-green-500 bg-opacity-50 px-3 py-1.5 text-[10px] font-bold uppercase text-white">
          Cleaned
        </div>
        <div className="flex flex-row justify-center w-[75px] rounded-xl border bg-green-500 bg-opacity-50 px-3 py-1.5 text-[10px] font-bold uppercase text-white">
          Lablelled
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sequi
        distinctio possimus autem eos veritatis quibusdam rem. Vero, cum neque
        enim molestias, recusandae non aliquam velit, suscipit quidem est nihil?
      </p>
      {/* Price div */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-row gap-[10px] items-center bg-indigo-500 px-4 py-2 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <img className="h-[36px] w-[36px]" src="/icons/coin.svg" alt="" />
        <span className="font-bold text-[22px] text-white">1200</span>
      </div>
    </div>
  );
};

export default DatasetCard;
