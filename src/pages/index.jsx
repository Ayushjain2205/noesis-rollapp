import Image from "next/image";
import Layout from "@/components/Layout";
import DatasetCard from "../components/UI/DatasetCard";
import SearchBar from "../components/UI/SearchBar";

export default function Home() {
  return (
    <Layout>
      <SearchBar />
      <br />
      <DatasetCard />
    </Layout>
  );
}
