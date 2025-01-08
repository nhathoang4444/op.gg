import React from "react";

export default function SearchUser() {
  return (
    <>
      <div className="w-[472px] h-[422px] bg-white rounded-[2px] flex flex-col shadow-2xl  z-[1000] ">
        <div className="w-[472px] h-[88px] bg-black "></div>
        <div className="w-[472px] h-[34px] bg-white  text-[#9AA4AF] text-[13.3px]  flex  ">
          <button className="w-1/2 bg-[#FFFFFF]">tìm kiếm gần đây</button>
          <button className="w-1/2 bg-[#EBEEF1]">Yêu thích</button>
        </div>
      </div>
    </>
  );
}
