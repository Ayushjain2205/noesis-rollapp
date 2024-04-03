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
        {/* <button onClick={() => toast.dismiss(t.id)}>Dismiss</button> */}
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
          <button className="mt-[550px]" onClick={notify}>
            Save
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default label;
