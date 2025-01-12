import { useState } from "react";
import searchData from "../data/searchData";

export default function useFetchDataHook(keyword) {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("users")) || [] // Lấy dữ liệu từ localStorage (nếu có)
  );

  function handleSearch() {
    if (keyword.trim() === "") {
      setData([]); // Nếu không có keyword, xóa dữ liệu
      localStorage.removeItem("users"); // Xóa dữ liệu khỏi localStorage
      return;
    }

    const filteredData = searchData.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );

    setData(filteredData); // Cập nhật state
    localStorage.setItem("users", JSON.stringify(filteredData)); // Lưu vào localStorage
  }

  return [handleSearch, data]; // Trả về hàm tìm kiếm và dữ liệu
}
