import React from "react";
import Layout from "../components/Layout";
import ImageAnnotator from "../components/Custom/ImageAnnotator";
import DatasetCard from "../components/UI/DatasetCard";
import toast from "react-hot-toast";

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
        <div className="flex flex-col h-screen">
          <DatasetCard />
        </div>
        <div className="flex flex-col w-full pt-[50px]">
          <ImageAnnotator imageUrl="https://picsum.photos/400" />
          <div className="flex flex-row  mt-[550px] ml-[150px] w-[500px] justify-between">
            <button className="">
              <img className="h-[60px]" src="/icons/arrow.svg" alt="" />
            </button>
            <button
              className="h-[60px] w-[150px] bg-green-500 bg-opacity-70 font-[500] rounded-xl"
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
