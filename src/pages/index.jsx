import Image from "next/image";
import Layout from "@/components/Layout";
import DatasetCard from "../components/UI/DatasetCard";
import SearchBar from "../components/UI/SearchBar";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col w-5/6 m-auto mt-[20px]">
        <SearchBar />

        <div className="mt-[20px] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
          <DatasetCard />
          <DatasetCard />
          <DatasetCard />
          <DatasetCard />
          <DatasetCard />
          <DatasetCard />
          <DatasetCard />
          <DatasetCard />
          <DatasetCard />
          <DatasetCard />
        </div>
      </div>
    </Layout>
  );
}
