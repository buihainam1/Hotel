import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { NavbarWithMegaMenu } from "./Navigation";
import Item_Bookroom from "@/components/Item_Bookroom";
import { Tooltip, Button } from "@material-tailwind/react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { request } from "@/request";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const Book_Room = () => {
  const entity = "room";
  const itemsPerPage = 2; // Số lượng item mỗi trang


  // Trạng thái cho từng loại phòng
const [vipRooms, setVipRooms] = useState([]);
const [regularRooms, setRegularRooms] = useState([]);
const [luxuryRooms, setLuxuryRooms] = useState([]);

// Trạng thái phân trang cho từng loại phòng
const [vipActivePage, setVipActivePage] = useState(1);
const [regularActivePage, setRegularActivePage] = useState(1);
const [luxuryActivePage, setLuxuryActivePage] = useState(1);

// Tổng số trang cho mỗi loại phòng
const [vipTotalPages, setVipTotalPages] = useState(1);
const [regularTotalPages, setRegularTotalPages] = useState(1);
const [luxuryTotalPages, setLuxuryTotalPages] = useState(1);

// Gọi dữ liệu khi component được mount hoặc khi activePage thay đổi
useEffect(() => {
  fetchDataVip(vipActivePage); // Lấy dữ liệu cho phòng VIP
}, [vipActivePage]);

useEffect(() => {
  fetchDataRegular(regularActivePage); // Lấy dữ liệu cho phòng Thường
}, [regularActivePage]);

useEffect(() => {
  fetchDataLuxury(luxuryActivePage); // Lấy dữ liệu cho phòng Luxury
}, [luxuryActivePage]);

  // Hàm lấy dữ liệu phòng VIP
const fetchDataVip = async (page) => {
  try {
    const options = { items: itemsPerPage, page, filters: { roomTypeName: "Vip" } }; // Thêm filters cho VIP
    const response = await request.list({ entity, options });

    setVipRooms(response.result.pageItems); // Lưu dữ liệu phòng VIP
    setVipActivePage(response.result.page); // Cập nhật trang cho VIP
    setVipTotalPages(Math.ceil(response.result.count / itemsPerPage)); // Tính tổng số trang cho VIP
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu phòng VIP:", error);
  }
};

// Hàm lấy dữ liệu phòng Thường
const fetchDataRegular = async (page) => {
  try {
    const options = { items: itemsPerPage, page, filters: { roomTypeName: "Thường" } }; // Thêm filters cho Thường
    const response = await request.list({ entity, options });

    setRegularRooms(response.result.pageItems); // Lưu dữ liệu phòng Thường
    setRegularActivePage(response.result.page); // Cập nhật trang cho Thường
    setRegularTotalPages(Math.ceil(response.result.count / itemsPerPage)); // Tính tổng số trang cho Thường
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu phòng Thường:", error);
  }
};

// Hàm lấy dữ liệu phòng Luxury
const fetchDataLuxury = async (page) => {
  try {
    const options = { items: itemsPerPage, page, filters: { roomTypeName: "Luxury" } }; // Thêm filters cho Luxury
    const response = await request.list({ entity, options });

    setLuxuryRooms(response.result.pageItems); // Lưu dữ liệu phòng Luxury
    setLuxuryActivePage(response.result.page); // Cập nhật trang cho Luxury
    setLuxuryTotalPages(Math.ceil(response.result.count / itemsPerPage)); // Tính tổng số trang cho Luxury
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu phòng Luxury:", error);
  }
};

// Phân trang cho phòng VIP
const handleVipPrevious = () => {
  if (vipActivePage > 1) setVipActivePage(vipActivePage - 1);
};

const handleVipNext = () => {
  if (vipActivePage < vipTotalPages) setVipActivePage(vipActivePage + 1);
};

// Phân trang cho phòng Thường
const handleRegularPrevious = () => {
  if (regularActivePage > 1) setRegularActivePage(regularActivePage - 1);
};

const handleRegularNext = () => {
  if (regularActivePage < regularTotalPages) setRegularActivePage(regularActivePage + 1);
};

// Phân trang cho phòng Luxury
const handleLuxuryPrevious = () => {
  if (luxuryActivePage > 1) setLuxuryActivePage(luxuryActivePage - 1);
};

const handleLuxuryNext = () => {
  if (luxuryActivePage < luxuryTotalPages) setLuxuryActivePage(luxuryActivePage + 1);
};


  
  return (
    <div className="w-full m-auto h-full">
      <Header />
      <NavbarWithMegaMenu />
      <div className="mx-auto max-w-screen-xl px-4 py-2 w-full mt-8">
        {/* Phòng VIP */}
<div>
  <p className="font-bold text-[25px]">Phòng Vip</p>
</div>
<div className="grid grid-rows-2 grid-flow-col gap-4">
  {vipRooms.map((room) => (
    <Item_Bookroom key={room.id} config={room} />
  ))}
</div>
{/* Phân trang cho phòng VIP */}
<div className="relative flex items-center justify-center mt-4">
  <p>
    Trang {vipActivePage} trên {vipTotalPages}
  </p>
  <div className="absolute end-0 flex">
    <Button
      variant="text"
      className="flex items-center gap-2 rounded-full"
      onClick={handleVipPrevious}
      disabled={vipActivePage === 1}
    >
      <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Trước
    </Button>

    <Button
      variant="text"
      className="flex items-center gap-2 rounded-full"
      onClick={handleVipNext}
      disabled={vipActivePage === vipTotalPages}
    >
      Sau
      <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
    </Button>
  </div>
</div>

{/* Phòng Thường */}
<div>
  <p className="font-bold text-[25px]">Phòng Thường</p>
</div>
<div className="grid grid-rows-2 grid-flow-col gap-4">
  {regularRooms.map((room) => (
    <Item_Bookroom key={room.id} config={room} />
  ))}
</div>
{/* Phân trang cho phòng Thường */}
<div className="relative flex items-center justify-center mt-4">
  <p>
    Trang {regularActivePage} trên {regularTotalPages}
  </p>
  <div className="absolute end-0 flex">
    <Button
      variant="text"
      className="flex items-center gap-2 rounded-full"
      onClick={handleRegularPrevious}
      disabled={regularActivePage === 1}
    >
      <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Trước
    </Button>

    <Button
      variant="text"
      className="flex items-center gap-2 rounded-full"
      onClick={handleRegularNext}
      disabled={regularActivePage === regularTotalPages}
    >
      Sau
      <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
    </Button>
  </div>
</div>

{/* Phòng Luxury */}
<div>
  <p className="font-bold text-[25px]">Phòng Luxury</p>
</div>
<div className="grid grid-rows-2 grid-flow-col gap-4">
  {luxuryRooms.map((room) => (
    <Item_Bookroom key={room.id} config={room} />
  ))}
</div>
{/* Phân trang cho phòng Luxury */}
<div className="relative flex items-center justify-center mt-4">
  <p>
    Trang {luxuryActivePage} trên {luxuryTotalPages}
  </p>
  <div className="absolute end-0 flex">
    <Button
      variant="text"
      className="flex items-center gap-2 rounded-full"
      onClick={handleLuxuryPrevious}
      disabled={luxuryActivePage === 1}
    >
      <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Trước
    </Button>

    <Button
      variant="text"
      className="flex items-center gap-2 rounded-full"
      onClick={handleLuxuryNext}
      disabled={luxuryActivePage === luxuryTotalPages}
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

export default Book_Room;
