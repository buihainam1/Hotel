import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { NavbarWithMegaMenu } from "./Navigation";
import Item_rooms from "@/components/Item_rooms";
import { request } from "@/request";
import Footer from "./Footer";

const Room = () => {
  const [roomsByType, setRoomsByType] = useState({});
  const [activePage, setActivePage] = useState(1); // Số trang hiện tại
  const [totalPages, setTotalPages] = useState(1); // Tổng số trang

  const entity = "room";
  const itemsPerPage = 1; // Số lượng item mỗi trang

  const fetchData = async (page) => {
    try {
      const options = { items: itemsPerPage, page };
      const response = await request.list({ entity, options });

      const groupedData = response.result.pageItems.reduce((acc, room) => {
        const roomType = room.roomTypeName || "Khác";
        if (!acc[roomType]) acc[roomType] = [];
        acc[roomType].push(room);
        return acc;
      }, {});

      setRoomsByType(groupedData);
      setActivePage(response.result.page); // Cập nhật trang hiện tại
      setTotalPages(Math.ceil(response.result.count / itemsPerPage)); // Tính tổng số trang
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  };

  // Lấy dữ liệu khi component được mount hoặc khi activePage thay đổi
  useEffect(() => {
    fetchData(activePage);
  }, [activePage]);

  const handlePrevious = () => {
    if (activePage > 1) setActivePage(activePage - 1);
  };

  const handleNext = () => {
    if (activePage < totalPages) setActivePage(activePage + 1);
  };

  return (
    <div>
      <Header />
      <NavbarWithMegaMenu />
      <div className="mx-auto max-w-screen-xl px-4 py-2 w-full mt-8 flex flex-col gap-6">
        <div>
          <p className="text-[30px] font-bold">Danh sách tất cả các phòng</p>
        </div>
        {Object.entries(roomsByType).map(([roomType, rooms]) => (
          <div key={roomType} className="flex flex-col gap-4">
            <h2 className="text-[24px] font-semibold">{roomType}</h2>
            <div className="grid grid-cols-2 gap-4">
              {rooms.map((room) => (
                <Item_rooms key={room.id} config={room} />
              ))}
            </div>
          </div>
        ))}
        {/* Phân trang */}
        <div className="relative flex items-center justify-center mt-4">
          <p>
            Trang {activePage} trên {totalPages}
          </p>
          <div className="absolute end-0 flex">
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
              onClick={handlePrevious}
              disabled={activePage === 1}
            >
              Trước
            </button>
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
              onClick={handleNext}
              disabled={activePage === totalPages}
            >
              Sau
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Room;
