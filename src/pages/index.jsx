import Image from "next/image";
import Layout from "@/components/Layout";
import DatasetCard from "../components/UI/DatasetCard";

export default function Home() {
  return (
    <Layout>
      <DatasetCard />
    </Layout>
  );
}
