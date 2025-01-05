import React from "react";
import Chart from "./chart";
import gameData from "../data/gameData";
import playedData from "../component/recentplayed/data"; // Dữ liệu danh sách chơi
import RecentPlayerList from "./recentplayed/recentplayer";
import Game from "./game";
import RankedSoloDuo from "./rankedSoloDuo";
import Summary from "./summaryplayed";
import Mastery from "./Mastery";

export default function Gamehistory() {
  return (
    <>
      <div className="mx-auto flex mt-2 gap-2">
        {/* left body */}
        <div className="w-[332px] h-[1964px]">
          <div>
            <RankedSoloDuo />
          </div>
          <div>
            <Summary />
          </div>
          <div>
            <Mastery />
          </div>
        </div>
        {/* right body */}
        <div className="w-[740px]">
          {/* recent game */}
          <div className="w-full items-center flex h-[35px] shadow-sm rounded-t-[4px] bg-white">
            <div className="ml-3">
              <span className="text-[14px] font-sans">Recent games</span>
            </div>
            {/* search */}
            <div className="rounded-r-[4px] flex ml-[405px] w-[228px] h-[28px] bg-[#EBEEF1]">
              <div className="items-center ml-2">
                <img
                  className="w-[24px] h-[24px]"
                  src="https://s-lol-web.op.gg/images/icon/icon-search.svg?v=1734579514945"
                  alt=""
                />
              </div>
              <div className="items-center ml-3">
                <input
                  placeholder="Search a champion"
                  className="w-[168px] text-[12px] bg-[#EBEEF1] border-hidden outline-none h-[14px]"
                  type="text"
                />
              </div>
            </div>
          </div>
          {/* chart */}
          <div className="w-full flex text-[12px] bg-white mt-[2px] text-[#758593] h-[132px]">
            {/* circle chart */}
            <div className="w-[222px] h-[116px]">
              <Chart gameData={gameData} />
            </div>
            {/* recent champions */}
            <div className="w-full flex-col">
              <span className="text-[12px] mt-2 mb-2 text-[#758692]">
                Recent 20 games played champions
              </span>
              <RecentPlayerList data={playedData} />
            </div>
          </div>
          {/* game history  */}
          <div className="flex">
            {/* thanh màu  */}
            <Game />
          </div>
        </div>
      </div>
    </>
  );
}
