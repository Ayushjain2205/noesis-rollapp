import { client } from "@/utils/client";
import { ConnectButton } from "thirdweb/react";

export default function Layout({ children }) {
  return (
    <>
      <div className="navbar bg-base-100 px-[20px]">
        <div className="flex flex-row gap-[16px]">
          <img className="h-[36px] w-[36px]" src="/icons/logo.svg" alt="" />
          <span className="text-primary font-bold">Eigen</span>
        </div>
        <ConnectButton client={client} />
      </div>
      <div className="grow px-[40px] py-[20px]">{children}</div>
    </>
  );
}
