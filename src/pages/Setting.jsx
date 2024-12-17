import React, { useState, useEffect } from "react";
import { Avatar } from "@material-tailwind/react";
import { List, ListItem, Card } from "@material-tailwind/react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  import Paid from "@/components/Paid";
  import Not_Paid from "@/components/Not_Paid";
  import { request } from "@/request";

const Setting = () => {
  const entity = 'RoomBooking//bookings';
  const [paidBookings, setPaidBookings] = useState([]);
  const [pendingBookings, setPendingBookings] = useState([]);  // State cho các booking chưa thanh toán
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("html");
  const [currentView, setCurrentView] = useState("settings");
  
   // Hàm lấy dữ liệu
   const fetchBookings = async () => {
    setLoading(true);
    try {
      const options = { userId: 'ee53a89d-3814-4733-8e5a-7b5cbf68615d' };
      const response = await request.list({ entity, options });
      const bookings = response.result.pageItems || [];
      console.log("Bookings received:", bookings);
      
      // Lọc các booking đã thanh toán
      const paid = bookings.filter((booking) => booking.paymentStatus === "Success");
      setPaidBookings(paid);

      // Lọc các booking chưa thanh toán (Pending)
      const pending = bookings.filter((booking) => booking.paymentStatus === "Pending");
      setPendingBookings(pending);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
   
    const data = [
        {
          label: "Thông tin tài khoản",
          value: "html",
          desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
        },
        {
          label: "Mật khẩu & bảo mật",
          value: "react",
          desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
          label: "Bản tin & tin khuyến mại",
          value: "vue",
          desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
      ];


    return (
        <div className="h-full w-full ">
            <div className="mx-auto max-w-screen-xl px-4 py-2 w-full mt-8 flex flex-row gap-10">
            <div className="w-2/5">
            <div className="w-full flex flex-col border-2  rounded-lg p-3 ps-5  gap-3">
                <div className="flex flex-row items-center gap-3">
                <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xl" />
                <div className="flex flex-col"> 
                    <p className="font-bold text-[20px]">Nguyen Bui Hai Nam</p>
                    <p className="text-gray-600">nam@gmail.com</p>
                </div>
                </div>
                <hr></hr>
                <div className="flex flex-col font-bold gap-5">
                
                <List>
                    <ListItem  onClick={() => { setCurrentView("paid"); fetchBookings(); }}>
                    <div className="flex flex-row items-center gap-3">
                        <img src="/img/icon/pen.png" className="w-[25px] h-[25px]" />
                        <p>Đặt chỗ của tôi</p>
                    </div>
                    </ListItem>
                    <ListItem>
                    <div className="flex flex-row items-center gap-3">
                        <img src="/img/icon/note.png" className="w-[25px] h-[25px]" />
                        <p>Danh sách giao dịch</p>
                    </div>
                    </ListItem>
                    <ListItem>
                    <div className="flex flex-row items-center gap-3">
                        <img src="/img/icon/bell.png" className="w-[25px] h-[25px]" />
                        <p>Thông báo giá vé máy bay</p>
                    </div>
                    </ListItem>
                    <ListItem>
                    <div className="flex flex-row items-center gap-3">
                        <img src="/img/icon/user2.png" className="w-[25px] h-[25px]" />
                        <p>Thông tin hành khách đã lưu</p>
                    </div>
                    </ListItem>
                    <ListItem>
                    <div className="flex flex-row items-center gap-3">
                        <img src="/img/icon/sale.png" className="w-[25px] h-[25px]" />
                        <p>Khuyến mãi</p>
                    </div>
                    </ListItem>
                    <hr></hr>
                    <ListItem>
                    <div className="flex flex-row items-center gap-3">
                        <img src="/img/icon/settings.png" className="w-[25px] h-[25px]" />
                        <p>Tài khoản</p>
                    </div>
                    </ListItem>
                    <ListItem>
                    <div className="flex flex-row items-center gap-3">
                        <img src="/img/icon/power-on.png" className="w-[25px] h-[25px]" />
                        <p>Đăng xuất</p>
                    </div>
                    </ListItem>
                    
                </List>
                </div>
            </div>
            </div>
            {/* Main Content */}
            <div className="w-3/5 flex flex-col">
          {currentView === "settings" ? (
            <div className="flex flex-col mt-5">
              <p className="font-bold text-[25px]">Cài đặt</p>
              <Tabs value={activeTab}>
                <TabsHeader
                  className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                  indicatorProps={{
                    className:
                      "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                  }}
                >
                  {data.map(({ label, value }) => (
                    <Tab
                      key={value}
                      value={value}
                      onClick={() => setActiveTab(value)}
                      className={activeTab === value ? "text-[#1BA0E2]" : ""}
                    >
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody>
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                      {desc}
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {loading ? (
                <p>Đang tải dữ liệu...</p>
              ) : error ? (
                <p>Lỗi khi tải dữ liệu.</p>
              ) : (
                <>
                  {/* Hiển thị các phòng đã thanh toán */}
                  {paidBookings.length > 0 ? (
                    paidBookings.map((booking) => (
                      <Paid
                      key={`${booking.id}-${booking.roomNumber}`} 
                        config={{
                          roomNumber: booking.roomNumber,
                          checkInDate: booking.checkInDate,
                          checkOutDate: booking.checkOutDate,
                          price: booking.price,
                          bookingReference: booking.bookingReference,
                          
                        }}
                      />
                    ))
                  ) : (
                    <p>Không có đặt chỗ nào đã thanh toán.</p>
                  )}

                  {/* Hiển thị các phòng chưa thanh toán */}
                  {pendingBookings.length > 0 ? (
                    pendingBookings.map((booking) => (
                      <Not_Paid
                        key={booking.id}
                        config={{
                          roomNumber: booking.roomNumber,
                          checkInDate: booking.checkInDate,
                          checkOutDate: booking.checkOutDate,
                          price: booking.price,
                          bookingReference: booking.bookingReference,
                          
                        }}
                      />
                    ))
                  ) : (
                    <p>Không có đặt chỗ nào chưa thanh toán.</p>
                  )}
                </>
              )}
            </div>
          )}
        </div>
        </div>
        </div>
        
    )
}
export default Setting;