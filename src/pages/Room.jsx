import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { NavbarWithMegaMenu } from "./Navigation";
import Item_rooms from "@/components/Item_rooms";
import { request } from "@/request";
import { Button } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Footer from "./Footer";

const Room = () => {
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1); // Số trang hiện tại
  const [totalPages, setTotalPages] = useState(1); // Tổng số trang

  const entity = "room";
  const itemsPerPage = 8; // Số lượng item mỗi trang

  const fetchData = async (page) => {
    try {
      const options = { items: itemsPerPage, page };
      const response = await request.list({ entity, options });

      setData(response.result.pageItems);
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
      <div className="mx-auto max-w-screen-xl px-4 py-2 w-full mt-8 flex flex-col gap-3">
        <div>
          <p className="text-[30px] font-bold">Danh sách tất cả các phòng</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {data.map((room) => (
            <Item_rooms key={room.id} config={room} />
          ))}
        </div>
        {/* Phân trang */}
        <div className="relative flex items-center justify-center mt-4">
  
            <p>Trang {activePage} trên {totalPages}</p>
          <div className="absolute end-0 flex">
          <Button
            variant="text"
            className="flex items-center gap-2 rounded-full"
            onClick={handlePrevious}
            disabled={activePage === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Trước
          </Button>
          
          <Button
            variant="text"
            className="flex items-center gap-2 rounded-full"
            onClick={handleNext}
            disabled={activePage === totalPages}
          >
            Sau
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Room;
