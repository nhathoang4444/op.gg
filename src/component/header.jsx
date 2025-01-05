import React, { useState, useEffect, useRef } from "react";
import { DownOutlined, UpOutlined, ContactsOutlined } from "@ant-design/icons";

export default function Header() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Create a ref for the modal element to check clicks outside it
  const modalRef = useRef(null);
  const buttonRef = useRef(null);
  const links = [
    {
      name: "League of Legends",
      image:
        "https://s-opgg-kit.op.gg/gnb/config/images/icon/f716f47e658f27f0261febb5fa52260d.svg?image=q_auto:good,f_webp,w_48,h_48",
      thumbnail:
        "https://s-opgg-kit.op.gg/gnb/config/images/thumbnail/46a00fcb04377c2ff9557c7d2c57b582.png?image=q_auto:good,f_webp,w_496,h_280",
      url: "https://www.op.gg/",
    },
    {
      name: "Teamfight Tactics",
      image:
        "https://s-opgg-kit.op.gg/gnb/config/images/icon/5cc224f533a183d42d8bc3a6099b3946.svg?image=q_auto:good,f_webp,w_48,h_48",
      thumbnail:
        "https://s-opgg-kit.op.gg/gnb/config/images/thumbnail/c5a422f7bb68033f3e51e93c11b3a9b9.png?image=q_auto:good,f_webp,w_496,h_280",
      url: "https://tft.op.gg/",
    },
    {
      name: "Valorant",
      image:
        "https://s-opgg-kit.op.gg/gnb/config/images/icon/48b77034b230d745cef6a9e3692f835e.svg?image=q_auto:good,f_webp,w_48,h_48",
      thumbnail:
        "https://s-opgg-kit.op.gg/gnb/config/images/thumbnail/575245486ee887c412d47c8ae3bc8cf5.png?image=q_auto:good,f_webp,w_496,h_280",
      url: "https://valorant.op.gg/",
    },
    {
      name: "OVERWATCH2",
      image:
        "https://s-opgg-kit.op.gg/gnb/config/images/icon/783699c9543219536d80ed7193931e07.svg?image=q_auto:good,f_webp,w_48,h_48",
      thumbnail:
        "https://s-opgg-kit.op.gg/gnb/config/images/thumbnail/9514304810a8dc99e7dfc23d705812c3.png?image=q_auto:good,f_webp,w_496,h_280",
      url: "https://overwatch.op.gg/",
    },
    {
      name: "PUBG",
      image:
        "https://s-opgg-kit.op.gg/gnb/config/images/icon/037088981bc4f247e2f494750e61f443.svg?image=q_auto:good,f_webp,w_48,h_48",
      thumbnail:
        "https://s-opgg-kit.op.gg/gnb/config/images/thumbnail/35e002a088e8168d6048f00a1c2ae157.png?image=q_auto:good,f_webp,w_496,h_280",
      url: "https://pubg.op.gg/",
    },
    {
      name: "Deadlock",
      image:
        "https://s-opgg-kit.op.gg/gnb/config/images/icon/ab5b816b4e75113f882fae593b84e835.svg?image=q_auto:good,f_webp,w_48,h_48",
      thumbnail:
        "https://s-opgg-kit.op.gg/gnb/config/images/thumbnail/86658788de576eadd331d561aed71744.jpg?image=q_auto:good,f_webp,w_496,h_280",
      url: "https://deadlock.op.gg/",
    },
  ];

  useEffect(() => {
    // Function to close the modal when clicking outside of it
    const handleClickOutside = (event) => {
      // Kiểm tra nếu click bên ngoài modal và button
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsModalOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="bg-black h-[48px] flex items-center gap-5 relative">
        {/* opgg */}
        <div>
          <h1 className="text-red-200 font-bold">OP.GG</h1>
        </div>

        {/* stats */}
        <div className="flex items-center gap-2 relative">
          <img
            className="w-[24px] h-[24px]"
            src="https://s-opgg-kit.op.gg/gnb/config/images/icon/bfa5abe2f78d6e9a55e81c9988c31442.svg?image=q_auto:good,f_webp,w_48,h_48"
            alt=""
          />
          <span className="text-[14px] text-white font-sans">Stats</span>
          <button
            ref={buttonRef} // Thêm ref vào button
            className="bg-[#424254] w-[184px] h-[38px] flex items-center"
            onClick={() => setIsModalOpen((prev) => !prev)} // Toggle modal khi click
          >
            <img
              className="w-[24px] h-[24px] ml-2"
              src="https://s-opgg-kit.op.gg/gnb/config/images/icon/f716f47e658f27f0261febb5fa52260d.svg?image=q_auto:good,f_webp,w_48,h_48"
              alt=""
            />
            <p className="text-white text-[14px] font-sans">
              League of Legends
            </p>
            <div className="text-gray-400 ml-2">
              {isModalOpen ? <UpOutlined /> : <DownOutlined />}
            </div>
          </button>

          {/* modal */}
          {isModalOpen && (
            <div
              ref={modalRef} // Attach the modalRef to the modal div
              className="bg-[#31313C] z-[1000] absolute top-[45px] w-[510px] h-[226px] rounded-md"
            >
              <div className="flex gap-2 w-[468px] h-[192px] mt-[16px]">
                <div className="w-1/2 flex flex-col ">
                  {links.map((link, index) => (
                    <a
                      key={index}
                      className="w-[180px] h-[32px] ml-2 flex hover:bg-gray-600 rounded-sm items-center"
                      href={link.url}
                      onMouseEnter={() => setHoveredImage(link.thumbnail)}
                    >
                      <img
                        className="w-[24px] h-[24px] ml-2 rounded-2xl"
                        src={link.image}
                        alt={link.name}
                      />
                      <p className="font-sans text-white text-[14px]">
                        {link.name}
                      </p>
                    </a>
                  ))}
                </div>

                <div className="w-1/2">
                  {hoveredImage && (
                    <img
                      className="w-[248px] h-[140px] rounded-md"
                      src={hoveredImage}
                      alt="Hovered"
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* item */}
        <div className="flex items-center gap-5">
          {/* item 1 */}
          <a
            className="flex items-center group"
            href="https://www.op.gg/supervive/en"
          >
            <img
              className="w-[24px] h-[24px] hidden group-hover:block"
              src="https://s-opgg-kit.op.gg/gnb/config/images/icon/e83370409f56370178c92e2f448869e1.svg?image=q_auto:good,f_webp,w_48,h_48"
              alt=""
            />
            <img
              className="w-[24px] h-[24px] group-hover:hidden"
              src="https://s-opgg-kit.op.gg/gnb/config/images/icon/06fbd15e9461a0e2322b5d2c0b7fac75.svg?image=q_auto:good,f_webp,w_48,h_48"
              alt=""
            />
            <span className="text-[14px] text-gray-400 group-hover:text-white font-sans">
              SUPERVIVE
            </span>
          </a>
          {/* item 2 */}
          <a
            className="flex items-center group"
            href="https://www.op.gg/supervive/en"
          >
            <img
              className="w-[24px] h-[24px] hidden group-hover:block"
              src="https://s-opgg-kit.op.gg/gnb/config/images/icon/93dc7e79dd2b842b7c9dd86acab04acf.svg?image=q_auto:good,f_webp,w_48,h_48"
              alt=""
            />
            <img
              className="w-[24px] h-[24px] group-hover:hidden"
              src="https://s-opgg-kit.op.gg/gnb/config/images/icon/d5dd7039220ec8680e69ce1558411984.svg?image=q_auto:good,f_webp,w_48,h_48"
              alt=""
            />
            <span className="text-[14px] text-gray-400 group-hover:text-white font-sans">
              Desktop
            </span>
          </a>
          {/* item 3 */}
          <a
            className="flex items-center group"
            href="https://www.op.gg/supervive/en"
          >
            <img
              className="w-[24px] h-[24px] hidden group-hover:block"
              src="https://s-opgg-kit.op.gg/gnb/config/images/icon/058928c9b0da0c9833f279f65e9bffe9.svg?image=q_auto:good,f_webp,w_48,h_48"
              alt=""
            />
            <img
              className="w-[24px] h-[24px] group-hover:hidden"
              src="https://s-opgg-kit.op.gg/gnb/config/images/icon/a31ab0f891ab2609ac0a9825c03816e6.svg?image=q_auto:good,f_webp,w_48,h_48"
              alt=""
            />
            <span className="text-[14px] text-gray-400 group-hover:text-white font-sans">
              Duo
            </span>
          </a>
          {/* item 4  */}
          <a
            className="flex items-center group"
            href="https://www.op.gg/supervive/en"
          >
            <img
              className="w-[24px] h-[24px] hidden group-hover:block"
              src="https://s-opgg-kit.op.gg/gnb/config/images/icon/04a40f3b0d664bf4478e2f215f448f3c.svg?image=q_auto:good,f_webp,w_48,h_48"
              alt=""
            />
            <img
              className="w-[24px] h-[24px] group-hover:hidden"
              src="https://s-opgg-kit.op.gg/gnb/config/images/icon/f8f51b5a7ef32cf4cdd43545f3ce3574.svg?image=q_auto:good,f_webp,w_48,h_48"
              alt=""
            />
            <span className="text-[14px] text-gray-400 group-hover:text-white font-sans">
              TalkG
            </span>
          </a>
          <a
            className="flex items-center group"
            href="https://www.op.gg/supervive/en"
          >
            <img
              className="w-[24px] h-[24px] hidden group-hover:block"
              src="https://s-opgg-kit.op.gg/gnb/config/images/icon/06f2c5c6f57cb212a207eb1d8f1b2160.svg?image=q_auto:good,f_webp,w_48,h_48"
              alt=""
            />
            <img
              className="w-[24px] h-[24px] group-hover:hidden"
              src="https://s-opgg-kit.op.gg/gnb/config/images/icon/1f3d8921b286644f2f28a4d4853d8d87.svg?image=q_auto:good,f_webp,w_48,h_48"
              alt=""
            />
            <span className="text-[14px] text-gray-400 group-hover:text-white font-sans">
              Esports
            </span>
          </a>
          <a
            className="flex items-center group"
            href="https://www.op.gg/supervive/en"
          >
            <img
              className="w-[24px] h-[24px] hidden group-hover:block"
              src="hhttps://s-opgg-kit.op.gg/gnb/config/images/icon/08664e3f401569aca5e12eec15695421.svg?image=q_auto:good,f_webp,w_48,h_48"
              alt=""
            />
            <img
              className="w-[24px] h-[24px] group-hover:hidden"
              src="https://s-opgg-kit.op.gg/gnb/config/images/icon/968fbbfb3dbebd05e25545bb2d1d9437.svg?image=q_auto:good,f_webp,w_48,h_48"
              alt=""
            />
            <span className="text-[14px] text-gray-400 group-hover:text-white font-sans">
              Gigs
            </span>
          </a>
        </div>

        {/* contact */}
        {/* <div className="flex  ">
          <div className="flex ">
            <button className="w-[24px] h-[24px]">
              {" "}
              <ContactsOutlined /> <h1 className="text-red-600">hihi</h1>
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
}
