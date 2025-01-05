import React from "react";

export default function RecentPlayerList({ data }) {
  return (
    <div className="flex flex-col gap-1">
      {data.map((player, index) => (
        <div
          key={index}
          className="flex items-center gap-2 text-[12px] text-[#758592]"
        >
          <img
            src={player.image}
            alt={`Champion ${index}`}
            className="w-[24px] h-[24px] rounded-full"
          />

          <p>
            <span className="text-[#E84057] font-bold">{player.winrate}%</span>{" "}
            ({player.win}W {player.lose}L) {player.kda} KDA
          </p>
        </div>
      ))}
    </div>
  );
}
