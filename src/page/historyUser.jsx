import React, { useEffect, useState } from "react";
import Header from "../component/header";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import Introduce from "../component/introduce";
import Gamehistory from "../component/historygame";
import ModalSeachUser from "../modal/modalSearchUser";
import SearchUser from "../modal/modalSearchUser";
export default function HistoryUser() {
  return (
    <>
      {/* header  */}
      <div className="flex-col">
        <div>
          <Header />
        </div>
        {/* search */}

        <div className="flex w-full bg-[#5383E8] items-center justify-center">
          <div>
            <SearchUser />
          </div>
        </div>
        {/* navigation */}
        <div className="h-[48px] flex bg-[#5383E8]">
          <div className="flex gap-48 ">
            <div className="flex justify-start ml-[340px] items-center gap-7">
              <a
                className="relative text-[#B3CDFF] text-[15px] font-sans hover:text-white after:top-8 after:absolute after:bottom-0 after:left-0  after:h-[12px] after:bg-white   hover:after:w-full"
                href="https://www.op.gg/"
              >
                Home
              </a>
              <a
                className="relative text-[#B3CDFF] text-[15px] font-sans hover:text-white after:top-8 after:absolute after:bottom-0 after:left-0  after:h-[12px] after:bg-white   hover:after:w-full"
                href="https://www.op.gg/champions"
              >
                Champions
              </a>
              <a
                className="relative text-[#B3CDFF] text-[15px] font-sans hover:text-white after:top-8 after:absolute after:bottom-0 after:left-0  after:h-[12px] after:bg-white   hover:after:w-full"
                href="https://www.op.gg/modes/aram"
              >
                Game modes
              </a>
              <a
                className="relative text-[#B3CDFF] text-[15px] font-sans hover:text-white after:top-8 after:absolute after:bottom-0 after:left-0  after:h-[12px] after:bg-white   hover:after:w-full"
                href="https://www.op.gg/leaderboards/tier"
              >
                Leaderboards
              </a>
              <a
                className="relative text-[#B3CDFF] text-[15px] font-sans hover:text-white after:top-8 after:absolute after:bottom-0 after:left-0  after:h-[12px] after:bg-white   hover:after:w-full"
                href="https://www.op.gg/spectate/live/pro-gamer"
              >
                Pro spectate
              </a>
              <a
                className="relative text-[#B3CDFF] text-[15px] font-sans hover:text-white after:top-8 after:absolute after:bottom-0 after:left-0  after:h-[12px] after:bg-white   hover:after:w-full"
                href="https://www.op.gg/statistics/champions"
              >
                Stats
              </a>
              <a
                className="relative text-[#B3CDFF] text-[15px] font-sans hover:text-white after:top-8 after:absolute after:bottom-0 after:left-0  after:h-[12px] after:bg-white   hover:after:w-full"
                href="https://www.op.gg/multisearch"
              >
                Multi-search
              </a>
            </div>
            <div className="flex items-center mx-auto">
              <a
                className="flex gap-2 ml-36 relative text-[#B3CDFF] text-[15px] font-sans hover:text-white after:top-8 after:absolute after:bottom-0 after:left-0  after:h-[12px] after:bg-white   hover:after:w-full"
                href=""
              >
                <div className="flex items-center justify-center w-[24px] h-[24px] bg-[#4171D6] text-[#B3CDFF] rounded-full">
                  <UserOutlined className="text-white" />
                </div>
                <span className="text-[#B3CDFF] text-[15px] font-sans relative text-[#B3CDFF] text-[15px] font-sans hover:text-white after:top-8 after:absolute after:bottom-0 after:left-0  after:h-[12px] after:bg-white   hover:after:w-full">
                  My page
                </span>
              </a>
            </div>
          </div>
        </div>
        <div>
          <Introduce />
        </div>
        {/* body ne  */}
        <div className="bg-[#EBEEF1] h-[1500px]">
          <div className="mt-2 w-full  flex">
            <Gamehistory />
          </div>
        </div>
      </div>
    </>
  );
}
