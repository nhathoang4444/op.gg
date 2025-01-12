import { DownOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import useFetchDataHook from "../component/useFetchDataHook";

export default function SearchUser() {
  const [modalSearchUserOpen, setModalSearchUserOpen] = useState(false); // Kiểm soát trạng thái modal
  const [isModalReady, setIsModalReady] = useState(false); // Trạng thái để đảm bảo modal không bị nháy
  const [keyword, setKeyword] = useState(""); // tạo key để lưu giá trị cho ô input
  const [handleSearch, data] = useFetchDataHook(keyword);

  //   tạo 1 function để thay đổi state keyword
  function handleInputChange(e) {
    const value = e.target.value; // Lấy giá trị từ input
    setKeyword(value); // Cập nhật từ khóa
    handleSearch(); // Gọi hàm tìm kiếm ngay khi nhập liệu
  }

  // Gọi handleSearch mỗi khi keyword thay đổi
  useEffect(() => {
    handleSearch();
  }, [keyword, handleSearch]);

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
              <div className="absolute top-[-4px] border-none	 z-[1000] left-[0px]">
                {modalSearchUserOpen && (
                  <>
                    {keyword.trim() === "" ? (
                      /* Modal hiển thị thông báo */
                      <div className="modal-search-user absolute border-none	 top-[33px] z-[1000]">
                        <div className="w-[472px] h-[422px] bg-white rounded-[2px] flex flex-col shadow-2xl z-[1000]">
                          <div className="w-[472px] h-[88px] flex">
                            <div className="w-[308px] h-[63px] flex justify-center flex-col">
                              <div className="w-[308px] h-[19px] ml-[10px] rounded-[4px]">
                                <span className="text-[11px] py-[2px] w-[224px] h-[17px] px-[4px] text-[#44515C] bg-[#F7F7F9]">
                                  Thông Báo Thay Đổi Phương Thức Tìm Kiếm
                                </span>
                              </div>
                              <div className="w-[308px] text-[#202D37] text-[14px] ml-[14px] flex flex-col py-2 h-[14px]">
                                <p>Tìm kiếm lịch sử trận đấu bằng</p>
                                <p className="text-[#5383E8] font-bold">
                                  Tên Trò Chơi + Slogan!
                                </p>
                              </div>
                            </div>
                            <div className="w-[135px] h-[36px]">
                              <a
                                href="https://authenticate.riotgames.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <button className="w-[135px] rounded-[4px] px-[8px] mt-[20px] py-[8px] border-[2px] h-[36px] text-[12px] flex gap-[4px]">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    style={{ fill: "red" }}
                                  >
                                    <g id="icon_riot">
                                      <path
                                        id="Combined Shape"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M3 8.21102L12.6596 3.74023L20.2193 5.62338V15.5404L17.0898 15.9197L15.8434 8.83422L15.2472 9.10518L15.8569 16.0688L12.6867 16.4617L11.5487 9.98579L10.9526 10.2567L11.508 16.6107L8.37849 16.99L7.33531 11.1103L6.7392 11.3812L7.24047 17.139L5.41152 17.3694L3 8.21102ZM13.0525 18.548L12.8899 17.6403L20.2329 16.7326V19.7402L13.0525 18.548Z"
                                      ></path>
                                    </g>
                                  </svg>
                                  Kiểm Tra Riot ID
                                </button>
                              </a>
                            </div>
                          </div>
                          <div className="w-[472px] h-[34px] bg-white text-[#9AA4AF] text-[13.3px] flex">
                            <button className="w-1/2 bg-[#FFFFFF]">
                              Tìm kiếm gần đây
                            </button>
                            <button className="w-1/2 bg-[#EBEEF1]">
                              Yêu thích
                            </button>
                          </div>
                          <div className="w-[472px] text-[#9AA4AF] text-[12px] items-center justify-center flex h-[264px]">
                            <p>Không có tướng nào bạn đã nhìn thấy gần đây</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Modal hiển thị kết quả tìm kiếm */
                      <div className="modal-search-user absolute top-[40px] left-0 w-[472px] bg-white rounded shadow-lg">
                        <div className="p-4">
                          {data.length > 0 ? (
                            data.map((item) => (
                              <a
                                key={item.id}
                                href={item.link}
                                className="flex items-center gap-4 p-2 hover:bg-gray-100"
                              >
                                <img
                                  src={item.img}
                                  alt={item.name}
                                  className="w-[40px] h-[40px] object-cover"
                                />
                                <div>
                                  <p className="text-sm font-bold">
                                    {item.name}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    Vai trò: {item.lane.role.join(", ")}
                                  </p>
                                </div>
                              </a>
                            ))
                          ) : (
                            <p className="text-center text-gray-500">
                              Không tìm thấy kết quả.
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </>
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
