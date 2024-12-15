import React, { useEffect, useState } from "react";
import Item_rooms from "../components/Item_rooms";
import { request } from "@/request";
import { Button } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";


const List_Room = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [activePage, setActivePage] = useState(1); // Số trang hiện tại
  const [totalPages, setTotalPages] = useState(1); // Tổng số trang
  const entity = 'room';
    const itemsPerPage = 4; // Số lượng item mỗi trang
  
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
    <div className="mx-auto max-w-screen-xl px-4 py-2 w-full mt-8">
      <div className="flex items-center gap-3">
        <img src="/img/fire.png" className="w-[40px] h-[40px]" />
        <p className="text-[30px] font-bold ">Phòng giá tốt nhất</p>
      </div>
      <p className="text-gray-500 mt-2">Chất lượng theo đánh giá của khách hàng. Đặt phòng với mức giá lí tưởng.</p>
      {/* <div className="mt-5">
        {loading ? (
          <Button variant="text" loading={true}>
          Đang lấy dữ liệu
        </Button>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {data.length > 0 ? (
              data.map((room) => (
                <Item_rooms key={room.id} config={room} />
              ))
            ) : (
              <p className="text-gray-500">Không có dữ liệu phòng để hiển thị.</p>
            )}
          </div>
        )}
      </div> */}
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
  );
};

export default List_Room;
