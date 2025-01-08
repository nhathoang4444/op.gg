import { DownOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import searchData from "../data/searchData";

export default function SearchUser() {
  const [modalSearchUserOpen, setModalSearchUserOpen] = useState(false); // Kiểm soát trạng thái modal
  const [isModalReady, setIsModalReady] = useState(false); // Trạng thái để đảm bảo modal không bị nháy
  const [keyword, setKeyword] = useState(""); // tạo key để lưu giá trị cho ô input

  //   tạo 1 function để thay đổi state keyword
  function handleInputChange(e) {
    setKeyword(e.target.value);
  }
  // funnction search
  function handleSearch() {
    const filteredData = searchData.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );
    console.log(filteredData);
  }

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
                value={keyword}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch(); // Gọi hàm handleSearch khi nhấn Enter
                  }
                }}
                onClick={() => setModalSearchUserOpen(true)} // Mở modal khi click vào input
              />
              <div className="absolute top-[2px] z-[1000] left-[0px]">
                {modalSearchUserOpen && (
                  <div className="modal-search-user absolute top-[33px] z-[1000]">
                    <div className="w-[472px] h-[422px] bg-white rounded-[2px] flex flex-col shadow-2xl  z-[1000] ">
                      <div className="w-[472px] h-[88px] bg-black "></div>
                      <div className="w-[472px] h-[34px] bg-white  text-[#9AA4AF] text-[13.3px]  flex  ">
                        <button className="w-1/2 bg-[#FFFFFF]">
                          tìm kiếm gần đây
                        </button>
                        <button className="w-1/2 bg-[#EBEEF1]">
                          Yêu thích
                        </button>
                      </div>
                    </div>
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
    </>
  );
}
