import React, { useState } from "react";
import ChampionBox from "./championBox";

export default function Summary() {
  // State lưu nút đang được chọn
  const [activeTab, setActiveTab] = useState("S2024 S3");

  return (
    <>
      {/* summary */}
      <div className="w-[332px] h-[440px] mt-[8px] bg-[#EBEEF1]">
        {/* btn tab */}
        <div className="w-[332px] text-[14px] bg-white items-center rounded-t-[4px] flex gap-[2px] h-[37px]">
          <button
            className={`w-[105px] ml-[2px] rounded-[4px] py-[4px] h-[28px] ${
              activeTab === "S2024 S3"
                ? "text-[#4171D6] font-bold bg-white"
                : "text-[#000] bg-white hover:bg-[#F7F7F9]"
            }`}
            onClick={() => setActiveTab("S2024 S3")}
          >
            S2024 S3
          </button>
          <button
            className={`w-[105px] rounded-[4px] py-[4px] h-[28px] ${
              activeTab === "Ranked Solo"
                ? "text-[#4171D6] font-bold bg-white"
                : "text-[#000] bg-white hover:bg-[#F7F7F9]"
            }`}
            onClick={() => setActiveTab("Ranked Solo")}
          >
            Ranked Solo
          </button>
          <button
            className={`w-[105px] rounded-[4px] py-[4px] h-[28px] ${
              activeTab === "Ranked Flex"
                ? "text-[#4171D6] font-bold bg-white"
                : "text-[#000] bg-white hover:bg-[#F7F7F9]"
            }`}
            onClick={() => setActiveTab("Ranked Flex")}
          >
            Ranked Flex
          </button>
        </div>
        <div>
          <ChampionBox />
        </div>
      </div>
      {/* champion box  */}
    </>
  );
}
