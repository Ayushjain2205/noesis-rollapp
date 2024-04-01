import { client } from "@/utils/client";
import { ConnectButton, lightTheme } from "thirdweb/react";

export default function Layout({ children }) {
  const customTheme = lightTheme({
    colors: {
      primaryButtonBg: "#9381FF",
    },
  });
  return (
    <>
      <div className="navbar flex justify-between bg-base-100 px-[20px]">
        <div className="flex flex-row gap-[16px]">
          <img className="h-[36px] w-[36px]" src="/icons/logo.svg" alt="" />
          <span className="text-primary font-bold">Eigen</span>
        </div>
        <div className="flex flex-row gap-[100px]">
          <div className="flex flex-row gap-[10px] items-center">
            <img className="h-[36px] w-[36px]" src="/icons/coin.svg" alt="" />
            <span className="font-bold text-[22px]">1200</span>
          </div>
          <ConnectButton theme={customTheme} client={client} />
        </div>
      </div>
      <div className="grow px-[40px] py-[20px]">{children}</div>
    </>
  );
}
