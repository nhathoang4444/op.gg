import React, { useState } from "react";

export default function Introduce() {
  const [activeButton, setActiveButton] = useState("Summary");

  const menuButtons = [
    { id: "Summary", label: "Summary", width: "w-[92px]" },
    { id: "Champions", label: "Champions", width: "w-[122px]" },
    { id: "Mastery", label: "Mastery", width: "w-[92px]" },
    { id: "Live Game", label: "Live Game", width: "w-[85px]" },
    {
      id: "Teamfight Tactics",
      label: (
        <>
          <img
            className="w-[16px] h-[16px]"
            src="https://s-lol-web.op.gg/images/icon/icon-tft.svg?image=q_auto:good,f_webp,w_32,h_32&v=1734579514945"
            alt=""
          />
          <span className="text-[#907659] font-bold"> Teamfight Tactics</span>
        </>
      ),
      width: "w-[171px]",
    },
  ];

  return (
    <>
      <div className="w-[1175px] mx-auto flex h-[228px] bg-white">
        {/* Profile  */}
        <div className="w-[675px] flex items-center">
          <div className="relative">
            <img
              className="w-[100px] h-[100px] rounded-[20px]"
              src="https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon6471.jpg?image=e_upscale,q_auto:good,f_webp,w_auto&v=1734579514945"
              alt=""
            />
            {/* Level */}
            <div className="w-[36px] absolute left-8 bottom-[-6px] h-[20px] flex items-center justify-center bg-[#202D37] rounded-[10px]">
              <span className="text-[12px] text-white font-bold">565</span>
            </div>
          </div>
          {/* Content Section */}
          <div className="flex-col ml-[20px]">
            {/* Name */}
            <div className="flex items-center">
              <h1 className="text-[24px] text-[#202D37]">WanLeLookMe</h1>
              <span className="text-[#758592] text-[24px] ml-2">#VN24</span>
              <button className="w-[28px] h-[28px] ml-2 mt-1 border border-gray-400 rounded-md flex items-center justify-center">
                <img
                  className="w-[24px] h-[24px]"
                  src="https://s-lol-web.op.gg/images/icon/icon-bookmark.svg?v=1734579514945"
                  alt="off"
                />
              </button>
            </div>
            {/* Rank */}
            <div className="flex text-[12px] mt-1 items-center text-[#758592]">
              <img
                className="w-[16px] h-[16px]"
                src="https://s-lol-web.op.gg/assets/images/regions/01-icon-icon-vi.svg?v=1734579514945"
                alt=""
              />
              <span className="ml-1">VN </span>
              <a
                className="ml-2 text-[#4171D6]"
                href="https://www.op.gg/leaderboards/tier?type=ladder&region=vn&summoner=WanLeLookMe-VN24&tier=all#WanLeLookMe-VN24"
              >
                Ladder Rank <span className="font-bold">306,370</span> (37.48%
                of top)
              </a>
            </div>
            {/* Link with Account */}
            <button className="w-[325px] h-[32px] mt-3 flex items-center gap-2 border border-[#DBE0E4] rounded-[4px]">
              <img
                className="w-[20px] h-[20px] ml-2"
                src="https://s-lol-web.op.gg/assets/images/icons/riot-logomark-circle-offwhite@2x.png?image=q_auto:good,f_webp,w_40,h_40&v=1734579514945"
                alt=""
              />
              <span className="text-[12px]">
                Link with your Riot account and set your profile.
              </span>
              <img
                className="w-[20px] h-[20px]"
                src="https://s-lol-web.op.gg/images/icon/icon-arrow-right.svg?v=1734579514945"
                alt=""
              />
            </button>
            {/* Update Buttons */}
            <div className="flex gap-2 mt-2">
              <button className="w-[72px] h-[40px] text-[14px] text-white hover:bg-blue-500 font-sans rounded-[4px] bg-[#5383E8]">
                Update
              </button>
              <button className="w-[72px] h-[40px] text-[14px] border border-[#4171D6] hover:bg-blue-100 text-[#4171D6] font-sans rounded-[4px]">
                Tier Graph
              </button>
            </div>
          </div>
        </div>
        {/* Video  */}
        <div className="w-[405px] h-[228px] bg-blue-400">
          <video
            className="w-full h-full object-cover rounded-lg"
            src="https://content1.avplayer.com/5f2063121d82c82557194737/videos/67668e08fd5a3f464f07bb83/67668e0b3e02df02dc095f44/video.mp4?AV_TAGID=625eac972d282e23e12df754&pid=5f2063121d82c82557194737&cid=625eab1d3a584514a04dc0fe&AV_TEMPID=625eac1dccf66d4b355b8977&AV_PUBLISHERID=5f2063121d82c82557194737&av_qd1=66d80eed88b73f79c6010352&videoId=67668e08fd5a3f464f07bb83"
            controls
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
      {/* Menu Buttons */}
      <div className="h-[45px] w-full">
        <hr />
        <div className="w-[1080px] mx-auto flex items-center gap-2">
          {menuButtons.map((button) => (
            <button
              key={button.id}
              className={`h-[36px] rounded-[4px] flex items-center justify-center ${
                button.width
              } ${
                activeButton === button.id
                  ? "bg-[#ECF2FF] text-[#4171D6] font-bold"
                  : "hover:bg-[#F7F7F9]"
              }`}
              onClick={() => setActiveButton(button.id)}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
