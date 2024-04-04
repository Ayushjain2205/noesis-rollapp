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
        <div className="flex flex-col w-full pt-[50px]">
          <ImageAnnotator imageUrl="https://picsum.photos/400" />
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
