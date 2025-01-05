import React from "react";

export default function Game() {
  return (
    <>
      <div className="w-[6px] h-[96px] text-[12px] min-w-[6px]  bg-[#E84057] rounded-l-[6px]"></div>

      <div className="w-[694px] h-[96px] justify-center bg-[#FFF1F3] items-center flex">
        <div className="w-[694px] px-[12px] text-[12px] justify-center font-sans flex h-[88px] bg-[#FFF1F3]">
          {/* ranked  */}
          <div className="w-[108px] flex flex-col justify-center  h-[81px] ">
            <span className="text-[#D31A45] font-bold">Ranked Solo/Duo</span>
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
                    <span className="text-white  text-[11px]">15</span>
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
                  <span className="text-[12px] text-[#758592]">2.00:1 KDA</span>
                </div>
              </div>
              {/* game-stats  */}
              <div className="w-[148px] flex h-[58px] ">
                <div className="w-[1px] bg-red-200 h-[58px]"></div>
                <div className="ml-2 text-[10px] flex flex-col">
                  {/* lanning  */}
                  <div className="flex font-sans mb-0 mt-0 gap-[4px]">
                    <span className="text-[#D31A45] font-bold">Laning</span>
                    <span className="text-[#D31A45] font-bold">44</span>
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
                  <span className="text-white px-[8px]">Tripple kill</span>
                </div>
                {/* rank 7th  */}
                <div className="rounded-[12px] w-[34px] flex justify-center items-center bg-[#758592]">
                  <span className="text-white px-[8px]">7th</span>
                </div>
                {/* status 3  */}
                <div className="rounded-[12px] flex items-center bg-[#758592]">
                  <span className="text-white px-[8px]">Unyielding</span>
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
        {/* nút expand coloase */}
      </div>
    </>
  );
}
