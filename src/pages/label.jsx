import React from "react";
import Layout from "../components/Layout";
import ImageAnnotator from "../components/Custom/ImageAnnotator";
import toast from "react-hot-toast";
import LabelCard from "../components/UI/LabelCard";
import datasetDetails from "../utils/datasets";

const label = () => {
  const notify = () =>
    toast((t) => (
      <div className="flex flex-row items-center gap-[5px]">
        ✅ You earned <b>2 coins</b>
        <img className="h-[25px]" src="/icons/coin.svg" alt="" />
      </div>
    ));

  return (
    <Layout>
      <div className="flex gap-[200px]">
        <div className="flex flex-col gap-[25px]">
          {datasetDetails.map((dataset, index) => (
            <LabelCard
              key={index}
              type={dataset.type}
              title={dataset.title}
              fileCount={dataset.fileCount} // Assuming fileCount is now part of your dataset details
              coins={dataset.coins} // Pass coins here, assuming it's a new or existing property of your datasets
            />
          ))}
        </div>
        <div className="flex flex-col w-full ">
          <div className="flex flex-row w-2/3 gap-[10px] items-center mb-[20px]">
            <img className="h-[40px]" src="/icons/types/image.svg" alt="" />
            <p className="text-[24px] font-[500]">My cute little dataset</p>
            <div className="flex flex-row gap-[5px] items-center ml-auto">
              <img className="h-[40px]" src="/icons/coin.svg" alt="" />
              <span className="text-[20px] font-[800]">2</span>
            </div>
          </div>
          <div role="alert" className="alert w-2/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-primary shrink-0 w-6 h-6 primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Label all the cars and bikes in the images</span>
            <div>
              <button className="btn btn-sm btn-primary">View Sample</button>
            </div>
          </div>
          <div className="mt-[20px]">
            <ImageAnnotator imageUrl="https://picsum.photos/400" />
          </div>

          <div className="flex flex-row  mt-[550px] ml-[150px] w-[500px] justify-between">
            <button className="">
              <img className="h-[60px]" src="/icons/arrow.svg" alt="" />
            </button>
            <button
              className="h-[60px] text-[20px] w-[150px] bg-green-500 bg-opacity-70 font-[500] rounded-xl"
              onClick={notify}
            >
              Submit
            </button>
            <button className="">
              <img
                className="h-[60px] rotate-180"
                src="/icons/arrow.svg"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default label;
