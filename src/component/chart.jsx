import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart({ gameData }) {
  const { games, wins, losses, kda, pKill } = gameData;
  const winRate = Math.round((wins / games) * 100); // Tính tỷ lệ thắng
  const isWin = winRate >= 50; // Kiểm tra nếu tỷ lệ thắng >= 50 thì là thắng

  // Dữ liệu biểu đồ
  const data = {
    labels: ["Wins", "Losses"],
    datasets: [
      {
        data: [wins, losses],
        backgroundColor: ["#5383E8", "#F44336"], // Màu xanh dương cho thắng, đỏ cho thua
        borderWidth: 0, // Loại bỏ đường viền mặc định
        hoverBackgroundColor: ["#5383E8", "#E57373"],
        cutout: "70%", // Tạo khoảng trống lớn ở giữa
      },
    ],
  };

  return (
    <div className="w-[222px]  h-[116px] flex items-center justify-center bg-white  ">
      {/* Biểu đồ hình tròn */}
      <div className="relative w-[88px]  h-[88px]">
        <Doughnut
          data={data}
          options={{
            plugins: { legend: { display: false } },
            maintainAspectRatio: false,
          }}
        />
        {/* Tỷ lệ thắng/thua hiển thị ở giữa */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
          style={{ color: isWin ? "#5383E8" : "#F44336" }}
        >
          <span className="text-[16px] font-bold">{winRate}%</span>
          <p className="text-[10px]">{isWin ? "Win Rate" : "Loss Rate"}</p>
        </div>
      </div>

      {/* Thông tin chi tiết */}
      <div className="w-full text-center mt-2">
        {/* Tổng game, thắng, thua */}
        <span className="text-[12px] font-medium block">
          {games}G {wins}W {losses}L
        </span>

        {/* KDA */}
        <div className="text-[14px] font-semibold">
          <span className="text-[16px]">{kda[0]}</span> /
          <span className="text-red-500 mx-1">{kda[1]}</span> /
          <span className="text-blue-500">{kda[2]}</span>
        </div>

        {/* P/Kill */}
        <div className="text-[12px] text-[#F44336] font-medium">
          P/Kill {pKill}%
        </div>
      </div>
    </div>
  );
}
