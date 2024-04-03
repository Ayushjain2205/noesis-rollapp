import React from "react";
import Layout from "../components/Layout";
import ImageAnnotator from "../components/Custom/ImageAnnotator";

const label = () => {
  return (
    <Layout>
      <div className="flex">
        <div className="flex flex-col w-[500px] h-screen">Hello</div>
        <div className="h-[400px] w-[400px]">
          <ImageAnnotator imageUrl="https://picsum.photos/400" />
        </div>
      </div>
    </Layout>
  );
};

export default label;
