import React from "react";
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

const Setting = () => {
    const [activeTab, setActiveTab] = React.useState("html");
    const [currentView, setCurrentView] = React.useState("settings"); // "settings" or "paid"
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
                    <ListItem  onClick={() => setCurrentView("paid")}>
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
              {/* Paid Component */}
              <div className="">
                <Paid />
              </div>

              {/* Not Paid Component */}
              <div className="">
                <Not_Paid />
              </div>
            </div>
          )}
        </div>
        </div>
        </div>
        
    )
}
export default Setting;