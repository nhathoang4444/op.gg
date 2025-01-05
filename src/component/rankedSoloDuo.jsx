import React, { useState } from "react";
import { DownOutlined, UpOutlined, ContactsOutlined } from "@ant-design/icons";

export default function RankedSoloDuo() {
  const [isViewMode, setIsViewMode] = useState(true);

  const toggleButton = () => {
    setIsViewMode((prev) => !prev);
  };

  return (
    <>
      <div className="bg-[#FFFFFF]">
        {/* title rank / solo */}
        <div className="w-full flex h-[35px] shadow-sm rounded-t-[4px] bg-white">
          <div className="flex items-center w-[308px] h-[35px] px-[12px]">
            <span className="text-[14px] font-sans">Ranked Solo/Duo</span>
          </div>
        </div>
        {/* infor */}
        <div className="w-[332px] h-[96.8px] flex items-center mt-[2px]">
          <div className="w-[308px] flex h-[72px] px-[12px]">
            <div className="w-[72px] rounded-full bg-[#F7F7F9] h-[72px]">
              <img
                className="w-[72px] h-[72px]"
                src="https://opgg-static.akamaized.net/images/medals_new/gold.png?image=q_auto:good,f_webp,w_144&v=1734579514945"
                alt=""
              />
            </div>
            {/* infor */}
            <div className="w-[150px] flex item-center pl-[12px] pt-[8px] flex-col h-[44px]">
              {/* tier */}
              <div className="w-full h-[26px] ml-[2px]">
                <span className="text-[20px] text-[#202D37] font-bold font-sans">
                  GOLD 4
                </span>
              </div>
              <div className="w-full h-[16px] mt-[2px]">
                <span className="text-[12px] text-[#758592] font-sans">
                  84 LP
                </span>
              </div>
            </div>
            {/* winrate */}
            <div className="w-[69px] text-[12px] text-[#9AA4AF] pt-[8px] h-[44px] flex flex-col">
              {/* win/ lose */}
              <div className="w-[full] min-w-[96px] flex gap-[4px] h-[26px] justify-end">
                <span>50W</span>
                <span>51L</span>
              </div>
              {/* winrate */}
              <div className="w-full min-w-[96px] gap-[2px] flex h-[16px] justify-end">
                <span>Win rate</span>
                <span>50%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[332px] h-[48px] bg-white">
        <div className="w-[308px] h-[36px] flex gap-[12px] pl-[12px] pb-[12px] pr-[12px]">
          <div className="w-[72px] h-[36px]">
            <div className="w-[61px] flex items-center ml-[8px] bg-[#F7F7F9] rounded-[40px] flex h-[36px] ">
              <img
                className="w-[36px] h-[36px]"
                src="https://opgg-static.akamaized.net/images/medals_new/gold.png?image=q_auto:good,f_webp,w_72&v=1734579514945"
                alt=""
              />
              <div>
                <span className="text-[11px] text-[#758592] text-center">
                  S3
                </span>
              </div>
            </div>
          </div>
          <div className="w-[53px] flex item-center flex-col h-[44px]">
            {/* tier */}
            <div className="w-full h-[26px] ml-[2px]">
              <span className="text-[14px] text-[#202D37] font-bold font-sans">
                GOLD 3
              </span>
            </div>
            <div className="w-full h-[16px] ">
              <span className="text-[12px] text-[#758592] font-sans">
                73 LP
              </span>
            </div>
          </div>

          <div className="w-[68px] text-[12px] text-[#9AA4AF] pt-[8px] ml-[65px] h-[44px] flex">
            {/* win/ lose */}
            <div className="w-[68px] text-[12px] text-[#9AA4AF] pt-[8px] ml-[40px] h-[44px] flex">
              {/* win/ lose */}
              <div className="w-[58px] flex gap-[4px] h-[26px] justify-end">
                <div className="w-[58px] bg-[#5383E8] h-[18px] flex items-center rounded-[24px] justify-center">
                  <span className="text-[11px] text-white font-bold">
                    Top tier
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <tr className="w-[332px] bg-white align-center h-[23px]">
          <th className="w-[96px] p-[4px] pl-[12px] text-left text-[#202D37] text-[11px] h-[23px]">
            Season
          </th>
          <th className="w-[186px] p-[4px] text-left text-[#202D37] text-[11px] h-[23px]">
            Tier
          </th>
          <th className="w-[50px] text-right py-[4px] pr-[12px] pl-[4px] text-[#202D37] text-[11px] h-[23px]">
            LP
          </th>
        </tr>
      </div>
      {/* table */}
      <div className="w-[332px] h-[171px] mt-[2px] bg-[#EBEEF1]">
        <table className="w-[332px] bg-white flex flex-col h-[131px]">
          <tbody className="w-[332px] mt-[2px] h-[108px]">
            {/* season tier and lp */}
            <tr className="w-[332px] flex justify-center items-center h-[30px]">
              <td className="w-[96px] p-[4px] pl-[12px] text-[#9AA4AF] text-[11px] flex h-[30px]">
                <b className="w-[55px] bg-[#EBEEF1] rounded-[2px] text-center h-[18px]">
                  S2024 S2
                </b>
              </td>
              <td className="w-[186px] h-[30px]">
                <div className="w-[178px] flex gap-[4px] h-[20px]">
                  <img
                    className="w-[20px] h-[20px]"
                    src="https://opgg-static.akamaized.net/images/medals_mini/gold.png?image=q_auto:good,f_webp,w_40&v=1734579514945"
                    alt=""
                  />
                  <span className="text-[12px] text-left text-[#758592]">
                    Gold 2
                  </span>
                </div>
              </td>
              <td className="w-[50px] text-right py-[4px] pr-[12px] pl-[4px] flex h-[30px]">
                <div className="w-[34px] justify-end flex h-[14px]">
                  <span className="text-[12px]">21</span>
                </div>
              </td>
            </tr>
            <tr className="w-[332px] flex justify-center items-center h-[30px]">
              <td className="w-[96px] p-[4px] pl-[12px] text-[#9AA4AF] text-[11px] flex h-[30px]">
                <b className="w-[55px] bg-[#EBEEF1] rounded-[2px] text-center h-[18px]">
                  S2024 S2
                </b>
              </td>
              <td className="w-[186px] h-[30px]">
                <div className="w-[178px] flex gap-[4px] h-[20px]">
                  <img
                    className="w-[20px] h-[20px]"
                    src="https://opgg-static.akamaized.net/images/medals_mini/gold.png?image=q_auto:good,f_webp,w_40&v=1734579514945"
                    alt=""
                  />
                  <span className="text-[12px] text-left text-[#758592]">
                    Gold 2
                  </span>
                </div>
              </td>
              <td className="w-[50px] text-right py-[4px] pr-[12px] pl-[4px] flex h-[30px]">
                <div className="w-[34px] justify-end flex h-[14px]">
                  <span className="text-[12px]">21</span>
                </div>
              </td>
            </tr>
            <tr className="w-[332px] flex justify-center items-center h-[30px]">
              <td className="w-[96px] p-[4px] pl-[12px] text-[#9AA4AF] text-[11px] flex h-[30px]">
                <b className="w-[55px] bg-[#EBEEF1] rounded-[2px] text-center h-[18px]">
                  S2024 S2
                </b>
              </td>
              <td className="w-[186px] h-[30px]">
                <div className="w-[178px] flex gap-[4px] h-[20px]">
                  <img
                    className="w-[20px] h-[20px]"
                    src="https://opgg-static.akamaized.net/images/medals_mini/emerald.png?image=q_auto:good,f_webp,w_40&v=1734579514945"
                    alt=""
                  />
                  <span className="text-[12px] text-left text-[#758592]">
                    Emerald 4
                  </span>
                </div>
              </td>
              <td className="w-[50px] text-right py-[4px] pr-[12px] pl-[4px] flex h-[30px]">
                <div className="w-[34px] justify-end flex h-[14px]">
                  <span className="text-[12px]">48</span>
                </div>
              </td>
            </tr>
            <tr className="w-[332px] flex justify-center items-center h-[30px]">
              <td className="w-[96px] p-[4px] pl-[12px] text-[#9AA4AF] text-[11px] flex h-[30px]">
                <b className="w-[55px] bg-[#EBEEF1] rounded-[2px] text-center h-[18px]">
                  S2024 S2
                </b>
              </td>
              <td className="w-[186px] h-[30px]">
                <div className="w-[178px] flex gap-[4px] h-[20px]">
                  <img
                    className="w-[20px] h-[20px]"
                    src="https://opgg-static.akamaized.net/images/medals_mini/silver.png?image=q_auto:good,f_webp,w_40&v=1734579514945"
                    alt=""
                  />
                  <span className="text-[12px] text-left text-[#758592]">
                    Silver
                  </span>
                </div>
              </td>
              <td className="w-[50px] text-right py-[4px] pr-[12px] pl-[4px] flex h-[30px]">
                <div className="w-[34px] justify-end flex h-[14px]">
                  <span className="text-[12px]">2</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/* Button toggle */}
        <div className="w-[332px] mt-[2px] h-[41px]">
          {isViewMode ? (
            <button
              className="w-[332px] text-[#758592] text-[12px] bg-[#F7F7F9] h-[41px]"
              onClick={toggleButton}
            >
              View all searson tiers <DownOutlined />
            </button>
          ) : (
            <button
              className="w-[332px] text-[#758592] text-[12px] bg-[#F7F7F9] h-[41px]"
              onClick={toggleButton}
            >
              Close <UpOutlined />
            </button>
          )}
        </div>
      </div>
      <div className="w-full flex h-[35px] shadow-sm mt-[12px] rounded-t-[4px] bg-white">
        <div className="flex items-center w-[308px] h-[35px] px-[12px]">
          <span className="text-[14px] font-sans">Ranked Solo/Duo</span>
        </div>
      </div>
      <div className="w-[332px] h-[65px] bg-white flex items-center mt-[2px]">
        <div className="w-[308px] flex h-[72px] px-[12px]">
          <div className="w-[40px] items-center justify-center mt-[14px] rounded-full bg-[#F7F7F9] h-[40px]">
            <img
              className="w-[40px] h-[40px]"
              src="https://opgg-static.akamaized.net/images/medals_new/emerald.png?image=q_auto:good,f_webp,w_80&v=1734579514945"
              alt=""
            />
          </div>
          {/* infor */}
          <div className="w-[130px] flex item-center  ml-[38px] mt-[10px] justify-center  flex-col h-[44px]">
            {/* tier */}
            <div className="w-[190px] flex item-center  h-[36px] ">
              <span className="text-[14px] text-[#202D37] font-bold font-sans">
                GOLD 4
              </span>
            </div>
            <div className="w-[190px] item-center h-[36px] ">
              <span className="text-[12px] text-[#758592] font-sans">
                84 LP
              </span>
            </div>
          </div>
          {/* winrate */}
          <div className="w-[69px] text-[12px] text-[#9AA4AF] pt-[8px] h-[44px] flex flex-col">
            {/* win/ lose */}
            <div className="w-[full] min-w-[96px] flex gap-[4px] h-[26px] justify-end">
              <span>50W</span>
              <span>51L</span>
            </div>
            {/* winrate */}
            <div className="w-full min-w-[96px] gap-[2px] flex h-[16px] justify-end">
              <span>Win rate</span>
              <span>50%</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <tr className="w-[332px] bg-white align-center h-[23px]">
          <th className="w-[96px] p-[4px] pl-[12px] text-left text-[#202D37] text-[11px] h-[23px]">
            Season
          </th>
          <th className="w-[186px] p-[4px] text-left text-[#202D37] text-[11px] h-[23px]">
            Tier
          </th>
          <th className="w-[50px] text-right py-[4px] pr-[12px] pl-[4px] text-[#202D37] text-[11px] h-[23px]">
            LP
          </th>
        </tr>
      </div>
      {/* table */}
      <div className="w-[332px] h-[131px] mt-[2px] bg-[#EBEEF1]">
        <table className="w-[332px] bg-white flex flex-col h-[131px]">
          <tbody className="w-[332px] mt-[2px] h-[108px]">
            {/* season tier and lp */}
            <tr className="w-[332px] flex justify-center items-center h-[30px]">
              <td className="w-[96px] p-[4px] pl-[12px] text-[#9AA4AF] text-[11px] flex h-[30px]">
                <b className="w-[55px] bg-[#EBEEF1] rounded-[2px] text-center h-[18px]">
                  S2024 S2
                </b>
              </td>
              <td className="w-[186px] h-[30px]">
                <div className="w-[178px] flex gap-[4px] h-[20px]">
                  <img
                    className="w-[20px] h-[20px]"
                    src="https://opgg-static.akamaized.net/images/medals_mini/gold.png?image=q_auto:good,f_webp,w_40&v=1734579514945"
                    alt=""
                  />
                  <span className="text-[12px] text-left text-[#758592]">
                    Gold 2
                  </span>
                </div>
              </td>
              <td className="w-[50px] text-right py-[4px] pr-[12px] pl-[4px] flex h-[30px]">
                <div className="w-[34px] justify-end flex h-[14px]">
                  <span className="text-[12px]">21</span>
                </div>
              </td>
            </tr>
            <tr className="w-[332px] flex justify-center items-center h-[30px]">
              <td className="w-[96px] p-[4px] pl-[12px] text-[#9AA4AF] text-[11px] flex h-[30px]">
                <b className="w-[55px] bg-[#EBEEF1] rounded-[2px] text-center h-[18px]">
                  S2024 S2
                </b>
              </td>
              <td className="w-[186px] h-[30px]">
                <div className="w-[178px] flex gap-[4px] h-[20px]">
                  <img
                    className="w-[20px] h-[20px]"
                    src="https://opgg-static.akamaized.net/images/medals_mini/gold.png?image=q_auto:good,f_webp,w_40&v=1734579514945"
                    alt=""
                  />
                  <span className="text-[12px] text-left text-[#758592]">
                    Gold 2
                  </span>
                </div>
              </td>
              <td className="w-[50px] text-right py-[4px] pr-[12px] pl-[4px] flex h-[30px]">
                <div className="w-[34px] justify-end flex h-[14px]">
                  <span className="text-[12px]">21</span>
                </div>
              </td>
            </tr>
            <tr className="w-[332px] flex justify-center items-center h-[30px]">
              <td className="w-[96px] p-[4px] pl-[12px] text-[#9AA4AF] text-[11px] flex h-[30px]">
                <b className="w-[55px] bg-[#EBEEF1] rounded-[2px] text-center h-[18px]">
                  S2024 S2
                </b>
              </td>
              <td className="w-[186px] h-[30px]">
                <div className="w-[178px] flex gap-[4px] h-[20px]">
                  <img
                    className="w-[20px] h-[20px]"
                    src="https://opgg-static.akamaized.net/images/medals_mini/emerald.png?image=q_auto:good,f_webp,w_40&v=1734579514945"
                    alt=""
                  />
                  <span className="text-[12px] text-left text-[#758592]">
                    Emerald 4
                  </span>
                </div>
              </td>
              <td className="w-[50px] text-right py-[4px] pr-[12px] pl-[4px] flex h-[30px]">
                <div className="w-[34px] justify-end flex h-[14px]">
                  <span className="text-[12px]">48</span>
                </div>
              </td>
            </tr>
            <tr className="w-[332px] flex justify-center items-center h-[30px]">
              <td className="w-[96px] p-[4px] pl-[12px] text-[#9AA4AF] text-[11px] flex h-[30px]">
                <b className="w-[55px] bg-[#EBEEF1] rounded-[2px] text-center h-[18px]">
                  S2024 S2
                </b>
              </td>
              <td className="w-[186px] h-[30px]">
                <div className="w-[178px] flex gap-[4px] h-[20px]">
                  <img
                    className="w-[20px] h-[20px]"
                    src="https://opgg-static.akamaized.net/images/medals_mini/silver.png?image=q_auto:good,f_webp,w_40&v=1734579514945"
                    alt=""
                  />
                  <span className="text-[12px] text-left text-[#758592]">
                    Silver
                  </span>
                </div>
              </td>
              <td className="w-[50px] text-right py-[4px] pr-[12px] pl-[4px] flex h-[30px]">
                <div className="w-[34px] justify-end flex h-[14px]">
                  <span className="text-[12px]">2</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
