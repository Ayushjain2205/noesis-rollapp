import React from "react";
import Layout from "../components/Layout";
import ImageAnnotator from "../components/Custom/ImageAnnotator";

const label = () => {
  return (
    <Layout>
      <ImageAnnotator imageUrl="https://picsum.photos/800" />
    </Layout>
  );
};

export default label;
