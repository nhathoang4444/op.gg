import React, { useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

export default function Game() {
  const [expandedIndex, setExpandedIndex] = useState(null); // Lưu trữ index của phần played được mở

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const playedData = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ];
  return (
    <>
      <div className="flex flex-col gap-[4px]">
        {/* game game  */}
        {/* played 1 */}
        {playedData.map((item, index) => (
          <div key={item.id}>
            {" "}
            <div className="flex">
              <div className="w-[6px] h-[96px] text-[12px] min-w-[6px]  bg-[#E84057] rounded-l-[6px]"></div>

              <div className="w-[740px] h-[96px] flex ">
                <div className="w-[694px] h-[96px] justify-center bg-[#FFF1F3] items-center flex">
                  <div className="w-[694px] px-[12px] text-[12px] justify-center font-sans flex h-[88px] bg-[#FFF1F3]">
                    {/* ranked  */}
                    <div className="w-[108px] flex flex-col justify-center  h-[81px] ">
                      <span className="text-[#D31A45] font-bold">
                        Ranked Solo/Duo
                      </span>
                      <span className="text-[#758592] ">7 days ago</span>
                      <div className="w-[48px] h-[1px] bg-[#FFD8D9] font-normal leading-[16px]  "></div>
                      <span className="text-[#758592] font-bold"> Defeat</span>
                      <span className="text-[#758592]">29m 2s</span>
                    </div>
                    {/* tướng bạn chơi  */}
                    <div className="w-[378px] justify-center  h-[88px] px-[12px]  flex-col">
                      {/* main character  */}
                      <div className="w-[378px] h-[58px] flex gap-[12px] ">
                        <div className="w-[98px] justify-center items-center flex h-[58px] ">
                          {/* avt tướng  */}
                          <a
                            className="relative w-[48px] h-[48px] "
                            href="https://www.op.gg/champions/kaisa/build"
                          >
                            <img
                              className="w-[48px] h-[48px] rounded-full max-w-[100%]"
                              src="https://opgg-static.akamaized.net/meta/images/lol/latest/champion/Kaisa.png?image=e_upscale,c_crop,h_103,w_103,x_9,y_9/q_auto:good,f_webp,w_160,h_160&v=1734579514945"
                              alt=""
                            />
                            <div className="w-[20px] rounded-full items-center justify-center absolute left-7 top-7 flex h-[20px] bg-[#202D37] ">
                              <span className="text-white  text-[11px]">
                                15
                              </span>
                            </div>
                          </a>
                          {/* phép bổ trợ và bảng ngọc */}
                          <div className="flex ">
                            {/* phep bo tro  */}
                            <div className="flex flex-col ml-[2px] gap-[2px]">
                              <div className="w-[22px] rounded-[4px] h-[22px]">
                                {" "}
                                <img
                                  className="w-[22px] rounded-[4px] h-[22px]"
                                  src="https://opgg-static.akamaized.net/meta/images/lol/latest/spell/SummonerBarrier.png?image=e_upscale,q_auto:good,f_webp,w_64,h_64&v=1734579514945"
                                  alt=""
                                />
                              </div>
                              <div className="w-[22px] rounded-[4px] h-[22px]">
                                {" "}
                                <img
                                  className="w-[22px] rounded-[4px] h-[22px]"
                                  src="https://opgg-static.akamaized.net/meta/images/lol/latest/spell/SummonerFlash.png?image=e_upscale,q_auto:good,f_webp,w_64,h_64&v=1734579514945"
                                  alt=""
                                />
                              </div>
                            </div>
                            {/* bảng ngọc  */}
                            <div className="flex flex-col ml-[2px] gap-[2px]">
                              <div className="w-[22px] bg-black rounded-full h-[22px]">
                                <img
                                  className="w-[22px] h-[22px]"
                                  src="https://opgg-static.akamaized.net/meta/images/lol/latest/perk/8008.png?image=q_auto:good,f_webp,w_64,h_64&v=1734579514945"
                                  alt=""
                                />
                              </div>
                              <div className="w-[22px]  rounded-full h-[22px]">
                                <img
                                  className="w-[22px] h-[22px]"
                                  src="https://opgg-static.akamaized.net/meta/images/lol/latest/perkStyle/8300.png?image=q_auto:good,f_webp,w_64,h_64&v=1734579514945"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* kda ha  */}
                        <div className="w-[108px] h-[40px] flex justify-center flex-col ">
                          {/* kda /// */}
                          <div className="w-[61px] flex   h-[22px]">
                            <span className="font-[Roboto] text-[#202D37] text-[15px] font-bold">
                              10
                            </span>
                            <span className="font-[Roboto] text-[15px] text-[#202D37] font-bold">
                              {" "}
                              &nbsp;/&nbsp;{" "}
                            </span>
                            <span className="font-[Roboto] text-[15px] text-[#D31A45] font-bold">
                              8
                            </span>
                            <span className="font-[Roboto] text-[15px] text-[#202D37] font-bold">
                              {" "}
                              &nbsp;/&nbsp;{" "}
                            </span>
                            <span className="font-[Roboto] text-[#202D37] text-[15px] font-bold">
                              6
                            </span>
                          </div>
                          {/* tính ra kda  */}
                          <div>
                            <span className="text-[12px] text-[#758592]">
                              2.00:1 KDA
                            </span>
                          </div>
                        </div>
                        {/* game-stats  */}
                        <div className="w-[148px] flex h-[58px] ">
                          <div className="w-[1px] bg-red-200 h-[58px]"></div>
                          <div className="ml-2 text-[10px] flex flex-col">
                            {/* lanning  */}
                            <div className="flex font-sans mb-0 mt-0 gap-[4px]">
                              <span className="text-[#D31A45] font-bold">
                                Laning
                              </span>
                              <span className="text-[#D31A45] font-bold">
                                44
                              </span>
                              <span className="text-[#758592]">:</span>
                              <span className="text-[#758592]">56</span>
                            </div>
                            {/* p/kill  */}
                            <div className="flex font-sans mb-0 mt-0 gap-[4px] ">
                              <span className="text-[#758592]">P/Kill</span>
                              <span className="text-[#758592]">43%</span>
                            </div>
                            {/* CS  */}
                            <div className="flex font-sans mb-0 mt-0 gap-[4px] ">
                              <span className="text-[#758592]">CS</span>
                              <span className="text-[#758592]">176</span>
                              <span className="text-[#758592]">(6.1)</span>
                            </div>
                            <div className="flex font-sans mb-0 mt-0 gap-[4px] ">
                              <span className="text-[#758592]">Gold</span>
                              <span className="text-[#758592]">3</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* items */}
                      <div className="w-[378px] flex h-[22px] ">
                        {/* item  */}
                        <div className="w-[166px]  h-[22px] gap-[2px] flex">
                          <div className="w-[22px] rounded-[4px]  h-[22px]">
                            <img
                              className="w-[22px] rounded-[4px]  h-[22px]"
                              src="https://opgg-static.akamaized.net/meta/images/lol/latest/item/3124.png?image=e_upscale,q_auto:good,f_webp,w_64,h_64&v=1734579514945"
                              alt=""
                            />
                          </div>
                          {/* item 1 */}
                          <div className="w-[22px] rounded-[4px]  h-[22px]">
                            <img
                              className="w-[22px] rounded-[4px] h-[22px]"
                              src="https://opgg-static.akamaized.net/meta/images/lol/latest/item/2421.png?image=e_upscale,q_auto:good,f_webp,w_64,h_64&v=1734579514945"
                              alt=""
                            />
                          </div>
                          <div className="w-[22px] rounded-[4px]  h-[22px]">
                            <img
                              className="w-[22px] rounded-[4px]  h-[22px]"
                              src="https://opgg-static.akamaized.net/meta/images/lol/latest/item/3006.png?image=e_upscale,q_auto:good,f_webp,w_64,h_64&v=1734579514945"
                              alt=""
                            />
                          </div>
                          <div className="w-[22px] rounded-[4px]  h-[22px]">
                            <img
                              className="w-[22px] rounded-[4px]  h-[22px]"
                              src="https://opgg-static.akamaized.net/meta/images/lol/latest/item/3115.png?image=e_upscale,q_auto:good,f_webp,w_64,h_64&v=1734579514945"
                              alt=""
                            />
                          </div>
                          <div className="w-[22px] rounded-[4px]  h-[22px]">
                            <img
                              className="w-[22px] rounded-[4px]  h-[22px]"
                              src="https://opgg-static.akamaized.net/meta/images/lol/latest/item/3087.png?image=e_upscale,q_auto:good,f_webp,w_64,h_64&v=1734579514945"
                              alt=""
                            />
                          </div>

                          <div className="w-[22px] rounded-[4px] bg-[#FFBAC3]  h-[22px]"></div>
                          <div className="w-[22px] rounded-full h-[22px]">
                            <img
                              className="w-[22px] rounded-full h-[22px]"
                              src="https://opgg-static.akamaized.net/meta/images/lol/latest/item/3340.png?image=e_upscale,q_auto:good,f_webp,w_64,h_64&v=1734579514945"
                              alt=""
                            />
                          </div>
                        </div>
                        {/* status */}
                        <div className="ml-2 flex gap-2 text-[12px] ">
                          {/* status 1 */}
                          <div className="rounded-[12px] flex items-center bg-[#E84057]">
                            <span className="text-white px-[8px]">
                              Tripple kill
                            </span>
                          </div>
                          {/* rank 7th  */}
                          <div className="rounded-[12px] w-[34px] flex justify-center items-center bg-[#758592]">
                            <span className="text-white px-[8px]">7th</span>
                          </div>
                          {/* status 3  */}
                          <div className="rounded-[12px] flex items-center bg-[#758592]">
                            <span className="text-white px-[8px]">
                              Unyielding
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* team fight  */}
                    <div className="w-[168px] h-[88px] justify-center gap-[8px] flex ml-[15px] ">
                      {/* team 1  */}
                      <div className="w-1/2 flex gap-[2px] flex-col ">
                        {/* player 1 */}
                        <div className="w-[80px] gap-[4px] flex h-[16px]">
                          <img
                            className="w-[16px] h-[16px] rounded-[4px]"
                            src="https://opgg-static.akamaized.net/meta/images/lol/latest/champion/Nidalee.png?image=e_upscale,c_crop,h_103,w_103,x_9,y_9/q_auto:good,f_webp,w_160,h_160&v=1734579514945"
                            alt=""
                          />
                          <a
                            className="overflow-hidden text-ellipsis whitespace-nowrap"
                            href="https://www.op.gg/summoners/vn/T%E1%BB%91p%201%20GangPLank-VN2"
                          >
                            <span className=" text-12px text-[#758592] ">
                              Tốp 1 Gangplanlaaaaaaa
                            </span>
                          </a>
                        </div>
                        <div className="w-[80px] gap-[4px] flex h-[16px]">
                          <img
                            className="w-[16px] h-[16px] rounded-[4px]"
                            src="https://opgg-static.akamaized.net/meta/images/lol/latest/champion/Tryndamere.png?image=e_upscale,c_crop,h_103,w_103,x_9,y_9/q_auto:good,f_webp,w_160,h_160&v=1734579514945"
                            alt=""
                          />
                          <a href="https://www.op.gg/summoners/vn/T%E1%BB%91p%201%20GangPLank-VN2">
                            <span className=" text-12px text-[#758592] overflow-hidden text-ellipsis whitespace-nowrap">
                              Ngọc Ánh
                            </span>
                          </a>
                        </div>
                        <div className="w-[80px] gap-[4px] flex h-[16px]">
                          <img
                            className="w-[16px] h-[16px] rounded-[4px]"
                            src="https://opgg-static.akamaized.net/meta/images/lol/latest/champion/Jayce.png?image=e_upscale,c_crop,h_103,w_103,x_9,y_9/q_auto:good,f_webp,w_160,h_160&v=1734579514945"
                            alt=""
                          />
                          <a
                            className="overflow-hidden text-ellipsis whitespace-nowrap"
                            href="https://www.op.gg/summoners/vn/C%E1%BA%A3nh%20Sad%20Bu%E1%BB%93n%20B%C3%A3-VN2"
                          >
                            <span className=" text-12px text-[#758592] ">
                              Cảnh sát buồn buồn hay vui
                            </span>
                          </a>
                        </div>
                        <div className="w-[80px] gap-[4px] flex h-[16px]">
                          <img
                            className="w-[16px] h-[16px] rounded-[4px]"
                            src="https://opgg-static.akamaized.net/meta/images/lol/latest/champion/Neeko.png?image=e_upscale,c_crop,h_103,w_103,x_9,y_9/q_auto:good,f_webp,w_160,h_160&v=1734579514945"
                            alt=""
                          />
                          <a
                            className="overflow-hidden text-ellipsis whitespace-nowrap"
                            href="https://www.op.gg/summoners/vn/C%E1%BA%A3nh%20Sad%20Bu%E1%BB%93n%20B%C3%A3-VN2"
                          >
                            <span className=" text-12px text-[#758592] ">
                              Cảnh sát buồn buồn hay vui
                            </span>
                          </a>
                        </div>
                        <div className="w-[80px] gap-[4px] flex h-[16px]">
                          <img
                            className="w-[16px] h-[16px] rounded-[4px]"
                            src="https://opgg-static.akamaized.net/meta/images/lol/latest/champion/Smolder.png?image=e_upscale,c_crop,h_103,w_103,x_9,y_9/q_auto:good,f_webp,w_160,h_160&v=1734579514945"
                            alt=""
                          />
                          <a
                            className="overflow-hidden text-ellipsis whitespace-nowrap"
                            href="https://www.op.gg/summoners/vn/DTAArchery-1996"
                          >
                            <span className=" text-12px text-[#758592] ">
                              DTAARARAAAAA
                            </span>
                          </a>
                        </div>
                      </div>
                      {/* teamm 2 */}
                      <div className="w-1/2  gap-[2px] flex flex-col">
                        <div className="w-[80px] gap-[4px] flex h-[16px]">
                          <img
                            className="w-[16px] h-[16px] rounded-[4px]"
                            src="https://opgg-static.akamaized.net/meta/images/lol/latest/champion/Jayce.png?image=e_upscale,c_crop,h_103,w_103,x_9,y_9/q_auto:good,f_webp,w_160,h_160&v=1734579514945"
                            alt=""
                          />
                          <a
                            className="overflow-hidden text-ellipsis whitespace-nowrap"
                            href="https://www.op.gg/summoners/vn/C%E1%BA%A3nh%20Sad%20Bu%E1%BB%93n%20B%C3%A3-VN2"
                          >
                            <span className=" text-12px text-[#758592] ">
                              Cảnh sát buồn buồn hay vui
                            </span>
                          </a>
                        </div>
                        <div className="w-[80px] gap-[4px] flex h-[16px]">
                          <img
                            className="w-[16px] h-[16px] rounded-[4px]"
                            src="https://opgg-static.akamaized.net/meta/images/lol/latest/champion/Nidalee.png?image=e_upscale,c_crop,h_103,w_103,x_9,y_9/q_auto:good,f_webp,w_160,h_160&v=1734579514945"
                            alt=""
                          />
                          <span className=" text-12px text-[#758592] overflow-hidden text-ellipsis whitespace-nowrap">
                            Tốp 111111111111111133331
                          </span>
                        </div>
                        <div className="w-[80px] gap-[4px] flex h-[16px]">
                          <img
                            className="w-[16px] h-[16px] rounded-[4px]"
                            src="https://opgg-static.akamaized.net/meta/images/lol/latest/champion/Smolder.png?image=e_upscale,c_crop,h_103,w_103,x_9,y_9/q_auto:good,f_webp,w_160,h_160&v=1734579514945"
                            alt=""
                          />
                          <a
                            className="overflow-hidden text-ellipsis whitespace-nowrap"
                            href="https://www.op.gg/summoners/vn/DTAArchery-1996"
                          >
                            <span className=" text-12px text-[#758592] ">
                              DTAARARAAAAA
                            </span>
                          </a>
                        </div>
                        <div className="w-[80px] gap-[4px] flex h-[16px]">
                          <img
                            className="w-[16px] h-[16px] rounded-[4px]"
                            src="https://opgg-static.akamaized.net/meta/images/lol/latest/champion/Smolder.png?image=e_upscale,c_crop,h_103,w_103,x_9,y_9/q_auto:good,f_webp,w_160,h_160&v=1734579514945"
                            alt=""
                          />
                          <a
                            className="overflow-hidden text-ellipsis whitespace-nowrap"
                            href="https://www.op.gg/summoners/vn/DTAArchery-1996"
                          >
                            <span className=" text-12px text-[#758592] ">
                              DTAARARAAAAA
                            </span>
                          </a>
                        </div>
                        <div className="w-[80px] gap-[4px] flex h-[16px]">
                          <img
                            className="w-[16px] h-[16px] rounded-[4px]"
                            src="https://opgg-static.akamaized.net/meta/images/lol/latest/champion/Smolder.png?image=e_upscale,c_crop,h_103,w_103,x_9,y_9/q_auto:good,f_webp,w_160,h_160&v=1734579514945"
                            alt=""
                          />
                          <a
                            className="overflow-hidden text-ellipsis whitespace-nowrap"
                            href="https://www.op.gg/summoners/vn/DTAArchery-1996"
                          >
                            <span className=" text-12px text-[#758592] ">
                              DTAARARAAAAA
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* nut expand collapse */}
                <div className="w-[40px] h-[96px] rounded-r-[4px]  bg-[#FFD8D9]">
                  <button
                    onClick={() => toggleExpand(index)}
                    className="w-[40px]  px-[8px]  flex flex-col items-center justify-end py-[8px]  h-[96px]"
                  >
                    <span className="w-[14px] mt-[10px] mb-[8px] font-bold text-[12px]  text-[#E84057]   h-[14px]">
                      {expandedIndex === index ? (
                        <UpOutlined />
                      ) : (
                        <DownOutlined />
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* win lose 2 doi  */}
            {expandedIndex === index && (
              <div className="w-[740px] h-[618px] ">
                {/* nav ul  */}
                <div className="w-[740px] h-[36px] bg-white py-[4px] px-[4px] text-[14px] flex gap-[4px] ">
                  <button className="bg-[#FFF1F3] w-[143px] rounded-[4px] font-bold text-[#D31A45] h-[28px]">
                    Overview
                  </button>
                  <button className="w-[143px] hover:rounded-[4px] hover:bg-[#EBEEF1] rounded-[4px] h-[28px]">
                    OP Score
                  </button>
                  <button className="w-[143px] hover:rounded-[4px] hover:bg-[#EBEEF1] rounded-[4px] h-[28px]">
                    Team analysis
                  </button>
                  <button className="w-[143px] hover:rounded-[4px] hover:bg-[#EBEEF1] rounded-[4px] h-[28px]">
                    Build
                  </button>
                  <button className="w-[143px] hover:rounded-[4px] hover:bg-[#EBEEF1] rounded-[4px] h-[28px]">
                    Etc
                  </button>
                </div>
                {/* modal khi click vào btn expan collase  */}
                <div className="w-[740px] h-[541px] ">
                  {/* table lose */}
                  <table className="w-[740px] h-[243.5px] ">
                    <tr className="w-[740px] bg-white h-[32.5px] ">
                      <tr className="w-[740px] text-[12px] text-[#9AA4AF] h-[32.5px]">
                        <th className="w-[175px] flex items-center h-[32.5px]">
                          <div className="ml-[12px]">
                            <span className="text-[#DA1A15]  font-bold">
                              Defeat{" "}
                            </span>{" "}
                            <span> (Red team)</span>
                          </div>
                        </th>
                        <th className="w-[68px] h-[32.5px]">OP Score</th>
                        <th className="w-[98px] h-[32.5px]">KDA</th>
                        <th className="w-[120px] h-[32.5px]">Damage</th>
                        <th className="w-[48px] h-[32.5px]">Wards</th>
                        <th className="w-[56px] h-[32.5px]">CS</th>
                        <th className="w-[175px] h-[32.5px]">Item</th>
                      </tr>
                    </tr>
                    <div className="w-[740px] h-[210px] bg-[#FFF1F3] flex flex-col">
                      {/* img  */}
                      <div className="w-[740px] h-[42.5px] px-[2px] py-[2px] flex">
                        <div className="w-[44px] pt-[8px] items-center justify-center h-[42.5px]">
                          <a href="https://www.op.gg/champions/darius/build">
                            <div className="w-[32px] relative h-[32px]">
                              <img
                                className="w-[32px] rounded-full h-[32px]"
                                src="https://opgg-static.akamaized.net/meta/images/lol/latest/champion/Darius.png?image=e_upscale,c_crop,h_103,w_103,x_9,y_9/q_auto:good,f_webp,w_160,h_160&v=1734579514945"
                                alt=""
                              />
                              <div className="w-[12px] absolute bottom-[-4px] left-0 h-[12px] bg-black text-white font-bold rounded-full text-[10px] flex items-center justify-center">
                                <span>14</span>
                              </div>
                            </div>
                          </a>
                        </div>
                        {/* spell  */}
                        <div className="w-[18px] pt-[8px] items-center justify-center flex flex-col h-[42.5px]">
                          <img
                            className="w-[16px] h-[16px] rounded-[4px]"
                            src="https://opgg-static.akamaized.net/meta/images/lol/latest/spell/SummonerFlash.png?image=e_upscale,q_auto:good,f_webp,w_64,h_64&v=1734579514945"
                            alt=""
                          />
                          <img
                            className="w-[16px] h-[16px] rounded-[4px]"
                            src="https://opgg-static.akamaized.net/meta/images/lol/latest/spell/SummonerDot.png?image=e_upscale,q_auto:good,f_webp,w_64,h_64&v=1734579514945"
                            alt=""
                          />
                        </div>
                        {/* phep bo tro  */}
                        <div className="w-[18px] pt-[8px] items-center justify-center flex flex-col h-[42.5px]">
                          <img
                            className="w-[16px] h-[16px] rounded-full"
                            src="https://opgg-static.akamaized.net/meta/images/lol/latest/perk/8010.png?image=q_auto:good,f_webp,w_64,h_64&v=1734579514945"
                            alt=""
                          />
                          <img
                            className="w-[16px] h-[16px] rounded-full"
                            src="https://opgg-static.akamaized.net/meta/images/lol/latest/perkStyle/8400.png?image=q_auto:good,f_webp,w_64,h_64&v=1734579514945"
                            alt=""
                          />
                        </div>
                        {/* name  */}
                        <div className="w-[95px] pt-[8px] items-center justify-center h-[42.5] flex flex-col">
                          <a
                            className="text-[#202D37] text-[12px]"
                            href="https://www.op.gg/summoners/vn/hoanganhtuannu-VN2"
                          >
                            hoanganhtuanu
                          </a>
                          <span className="text-[#9AA4AF] text-[11px]">
                            Silver 2
                          </span>
                        </div>
                        {/* op score  */}
                        <div className="w-[68px] h-[42.5px] flex items-center justify-center  ">
                          <div className="w-[20px] text-[12px] italic font-bold h-[14px] flex items-center justify-center">
                            <span>4</span>
                          </div>
                          <div className="w-[35.31px] bg-[#758592] font-bold  rounded-l-[9px] rounded-r-[9px] h-[18px] items-center flex justify-center">
                            <span className="text-white text-[11px]">8th</span>
                          </div>
                        </div>
                        {/* kda  */}
                        <div className="w-[98px] flex flex-col text-[#758592] items-center justify-center h-[42.5px]">
                          <div className="w-[98px] h-[14px] text-[#758592] justify-center items-center flex">
                            <span className=" text-[11px]">8/12/6 (38%)</span>
                          </div>
                          <div className="w-[98px] h-[12px] justify-center items-center flex">
                            <span className="font-bold text-[11px]">
                              1.17:1
                            </span>
                          </div>
                        </div>
                        {/* dame  */}
                        {/* Damage Stats */}
                        <div className="w-[120px] items-center justify-center h-[42.5px]">
                          <div className="w-[120px] flex gap-[12px] pt-[16px] items-center justify-center h-[24px]">
                            {/* First Damage Bar */}
                            <div className="flex flex-col gap-[4px] items-center justify-center w-[50px] h-[24px]">
                              <div className="w-[50px] h-[14px] flex items-center justify-center text-[11px] text-[#758592]">
                                <span>30,198</span>
                              </div>
                              <div className="w-[50px] h-[6px] bg-white">
                                <div className="w-[30px] h-[6px] bg-red-600"></div>
                              </div>
                            </div>
                            {/* Second Damage Bar */}
                            <div className="flex flex-col gap-[4px] items-center justify-center w-[58px] h-[24px]">
                              <div className="w-[50px] h-[14px] flex items-center justify-center text-[11px] text-[#758592]">
                                <span>41,396</span>
                              </div>
                              <div className="w-[50px] h-[6px] bg-white">
                                <div className="w-[30px] h-[6px] bg-[#9AA4AF]"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* wards  */}
                        {/* wards */}
                        <div className="w-[48px] h-[42.5px] flex flex-col justify-center items-center">
                          <div className="w-[48px] h-[12px] flex justify-center items-center">
                            <span className="text-[#758592] text-center text-[11px]">
                              2
                            </span>
                          </div>
                          <div className="w-[48px] h-[12px] flex justify-center items-center">
                            <span className="text-[#758592] text-center text-[11px]">
                              6 / 2
                            </span>
                          </div>
                        </div>
                        <div className="w-[56px] h-[42.5px] flex flex-col justify-center items-center">
                          <div className="w-[56px] h-[13px] flex justify-center items-center">
                            <span className="text-[#758592] text-center text-[11px]">
                              146
                            </span>
                          </div>
                          <div className="w-[56px] h-[13px] flex justify-center items-center">
                            <span className="text-[#758592] text-center text-[11px]">
                              5/m
                            </span>
                          </div>
                        </div>
                        <div className="w-[172px] items-center justify-center flex h-[42.5px] ">
                          {/* item  */}
                          <div className="w-[166px]  h-[22px] gap-[2px] flex">
                            <div className="w-[22px] rounded-[4px]  h-[22px]">
                              <img
                                className="w-[22px] rounded-[4px]  h-[22px]"
                                src="https://opgg-static.akamaized.net/meta/images/lol/latest/item/3124.png?image=e_upscale,q_auto:good,f_webp,w_64,h_64&v=1734579514945"
                                alt=""
                              />
                            </div>
                            {/* item 1 */}
                            <div className="w-[22px] rounded-[4px]  h-[22px]">
                              <img
                                className="w-[22px] rounded-[4px] h-[22px]"
                                src="https://opgg-static.akamaized.net/meta/images/lol/latest/item/2421.png?image=e_upscale,q_auto:good,f_webp,w_64,h_64&v=1734579514945"
                                alt=""
                              />
                            </div>
                            <div className="w-[22px] rounded-[4px]  h-[22px]">
                              <img
                                className="w-[22px] rounded-[4px]  h-[22px]"
                                src="https://opgg-static.akamaized.net/meta/images/lol/latest/item/3006.png?image=e_upscale,q_auto:good,f_webp,w_64,h_64&v=1734579514945"
                                alt=""
                              />
                            </div>
                            <div className="w-[22px] rounded-[4px]  h-[22px]">
                              <img
                                className="w-[22px] rounded-[4px]  h-[22px]"
                                src="https://opgg-static.akamaized.net/meta/images/lol/latest/item/3115.png?image=e_upscale,q_auto:good,f_webp,w_64,h_64&v=1734579514945"
                                alt=""
                              />
                            </div>
                            <div className="w-[22px] rounded-[4px]  h-[22px]">
                              <img
                                className="w-[22px] rounded-[4px]  h-[22px]"
                                src="https://opgg-static.akamaized.net/meta/images/lol/latest/item/3087.png?image=e_upscale,q_auto:good,f_webp,w_64,h_64&v=1734579514945"
                                alt=""
                              />
                            </div>

                            <div className="w-[22px] rounded-[4px] bg-[#FFBAC3]  h-[22px]"></div>
                            <div className="w-[22px] rounded-full h-[22px]">
                              <img
                                className="w-[22px] rounded-full h-[22px]"
                                src="https://opgg-static.akamaized.net/meta/images/lol/latest/item/3340.png?image=e_upscale,q_auto:good,f_webp,w_64,h_64&v=1734579514945"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </table>
                  {/* summary  */}
                  <div className="w-[740px] h-[54px] flex">
                    <div className="w-[151px] h-[36px] bg-orange-900"></div>
                    <div className="w-[405px] h-[36px] bg-orange-900"></div>
                    <div className="w-[151px] h-[36px] bg-orange-900"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
