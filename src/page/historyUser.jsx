import React, { useEffect, useState } from "react";
import Header from "../component/header";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import Introduce from "../component/introduce";
import Gamehistory from "../component/historygame";
import ModalSeachUser from "../modal/modalSearchUser";
export default function HistoryUser() {
  const [modalSearchUserOpen, setModalSearchUserOpen] = useState(false); // Kiểm soát trạng thái modal
  const [isModalReady, setIsModalReady] = useState(false); // Trạng thái để đảm bảo modal không bị nháy

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Kiểm tra nếu click không phải vào input hoặc modal
      if (
        !event.target.closest(".input-search-user") && // Không thuộc input
        !event.target.closest(".modal-search-user") // Không thuộc modal
      ) {
        setModalSearchUserOpen(false); // Đóng modal
      }
    };

    if (modalSearchUserOpen) {
      setIsModalReady(true); // Đảm bảo modal sẵn sàng hiển thị
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      setTimeout(() => setIsModalReady(false), 200); // Trì hoãn để tránh nháy
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalSearchUserOpen]);

  return (
    <>
      {/* header  */}
      <div className="flex-col">
        <div>
          <Header />
        </div>
        {/* search */}
        <div className="h-[48px] bg-[#5383E8] flex gap-2   ">
          <div className="flex items-center mx-auto  ">
            <img
              className="w-[124px] h-[46px] object-contain"
              src="https://meta-static.op.gg/logo/image/21ab73466256a60bb14d0f775c8fa450.png?image=q_auto:good,f_webp,w_580&v=1734579514945"
              alt="logo"
            />

            {/* Search User  */}
            <div className="flex">
              <div className="flex ">
                <button className="rounded-l-sm w-[60px] gap-1 mx-auto flex justify-center items-center h-[32px] bg-[#ECF2FF]">
                  <p className="text-[12px] font-bold text-[#5383E8]">VN</p>
                  <i className="text-[10px] font-bold text-[#5383E8]">
                    <DownOutlined />
                  </i>
                </button>
              </div>
              <div className="relative w-[840px] flex justify-center items-center  h-[32px] ">
                {" "}
                <input
                  className="w-[840px] flex flex-col h-[32px]"
                  type="text"
                  onClick={() => setModalSearchUserOpen(true)} // Mở modal khi click vào input
                />
                <div className="absolute top-[2px] z-[1000] left-[0px]">
                  {modalSearchUserOpen && (
                    <div className="modal-search-user absolute top-[33px] z-[1000]">
                      <ModalSeachUser />
                    </div>
                  )}
                </div>
              </div>
              <div>
                <button className="w-[60px]  h-[32px] bg-white rounded-r-sm  flex justify-center items-center">
                  <img
                    className="w-[40px] h-[35px]"
                    src="https://s-lol-web.op.gg/images/icon/icon-gg.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
            {/* video lol  */}

            <button className="w-[146px] h-[32px] ml-3 ify-center items-center flex gap-2 rounded-2xl bg-[#4171D6]">
              <div className="flex gap-2 justify-center items-center">
                <img
                  className="w-[24px] h-[24px] items-center "
                  src="https://s-lol-web.op.gg/assets/images/buttons/icon-navi-lol@2x.png"
                  alt=""
                />
                <span className="text-[12px] font-bold text-[#FEEC9C]">
                  14.24
                </span>
                <span className="text-[12px] text-white font-bold">
                  Patch notes
                </span>
              </div>
            </button>
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
