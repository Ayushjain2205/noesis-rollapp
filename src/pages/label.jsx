import React from "react";
import Layout from "../components/Layout";
import ImageAnnotator from "../components/Custom/ImageAnnotator";

const label = () => {
  return (
    <Layout>
      <div className="flex col">Hello</div>
      <div className="h-[400px] w-[400px]">
        <ImageAnnotator imageUrl="https://picsum.photos/400" />
      </div>
    </Layout>
  );
};

export default label;
