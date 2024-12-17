
import React, {useEffect, useState} from "react";
import {
  Card,
  Button,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import {
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import {IconButton } from "@material-tailwind/react";
import { request } from "@/request";

const Tab_search = ({ roomType = [], lock = false, number }) => {
    const [roomTypes, setRoomTypes] = useState([]);
    const entity = "roomtype";
   
      useEffect(() => {
        const fetchRoomTypes = async () => {
          try {
            const response = await request.list({ entity});
            const roomtypes = response.result.pageItems;
  
            setRoomTypes(roomtypes);
          } catch (error) {
            console.error("Error fetching room types:", error);
          }
        };
  
        fetchRoomTypes();
      }, []);

      const [checkInDate, setCheckInDate] = React.useState(new Date());
        const [checkOutDate, setCheckOutDate] = React.useState(null);
        
      
        // define handler change function on check-in date
        const handleCheckInDate = (date) => {
          setCheckInDate(date);
          setCheckOutDate(null);
        };
      
        // define handler change function on check-out date
        const handleCheckOutDate = (date) => {
          setCheckOutDate(date);
        };
      
        const [value, setValue] = React.useState(1);
        useEffect(() => {
            if (number > 0) {
                setValue(number);
            }
        }, [number]);
        const handleInputChange = (e) => {
            const newValue = Number(e.target.value);
            const max = lock ? number : 10;
        
            // Kiểm tra giá trị nhập vào dựa trên lock
            if (newValue >= 1 && newValue <= max) {
              setValue(newValue);
            }
          };
        
          const handleDecrement = () => {
            const min = 1;
            if (value > min) {
              setValue(value - 1);
            }
          };
        
          const handleIncrement = () => {
            const max = lock ? number : 10;
            if (value < max) {
              setValue(value + 1);
            }
          };


    return (
        <>
         {/* Overlay Card */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-lg p-3 mt-20">
      <div className="mt-3 ms-5 mb-1">
        <Link to="/pages/setting">
        <Button className="rounded-full me-2">Phòng</Button>
        </Link>
            
            <Button className="rounded-full me-2">Du lịch</Button>
            
            </div>
        <Card className="w-full flex-row bg-white/90 backdrop-blur-lg  h-[170px] border border-brown-100 items-center ps-3 pe-3" >
          
          <div>
          <div className="flex flex-row gap-x-[10px]">
              <div className="flex-col me-5">
                <p className="mb-3 ms-10">Loại phòng</p>
                <div className="flex items-center gap-4 ">
                <img 
                src="/img/map.png"
                className="w-[20px] h-[20px]"
                />
                <Select disabled={lock} value={lock && roomType ? roomTypes.find(type => type.id === roomType)?.roomTypeName : undefined}>
  {lock ? (
    <Option value={roomType}></Option>
  ) : (
    roomTypes.length > 0 ? (
      roomTypes.map((type, index) => (
        <Option key={index} value={type.id}>
          {type.roomTypeName}
        </Option>
      ))
    ) : (
      <Option disabled>Đang tải...</Option>
    )
  )}
</Select>

                </div>
              </div>
              {/* div2 */}
              <div className="flex-col me-5">
                <p className="mb-3 ms-10">Ngày nhận phòng</p>
                <div className="flex items-center gap-4 ">
                <img 
                src="/img/calendar.png"
                className="w-[20px] h-[20px]"
                />
                <div className="">
      <Popover placement="bottom">
        <PopoverHandler>
          <Input
            label="Chọn ngày"
            onChange={() => null}
            value={checkInDate ? format(checkInDate , "dd/MM/yyyy") : ""}
          />
        </PopoverHandler>
        <PopoverContent className="z-40">
          <DayPicker
          mode="single"
        selected={checkInDate}
        onSelect={(date) => {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          if (date && date >= today) {
            setCheckInDate(date);
          }else{
            alert("Không được chọn ngày trước hiện tại")
          }
        }}
        showOutsideDays
            className="border-0"
            classNames={{
              caption: "flex justify-center py-2 mb-4 relative items-center",
              caption_label: "text-sm font-medium text-gray-900",
              nav: "flex items-center",
              nav_button:
                "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
              nav_button_previous: "absolute left-1.5",
              nav_button_next: "absolute right-1.5",
              table: "w-full border-collapse",
              head_row: "flex font-medium text-gray-900",
              head_cell: "m-0.5 w-9 font-normal text-sm",
              row: "flex w-full mt-2",
              cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: "h-9 w-9 p-0 font-normal",
              day_range_end: "day-range-end",
              day_selected:
                "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
              day_today: "rounded-md bg-gray-200 text-gray-900",
              day_outside:
                "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
              day_disabled: "text-gray-500 opacity-50",
              day_hidden: "invisible",
            }}
            components={{
              IconLeft: ({ ...props }) => (
                <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
              ),
              IconRight: ({ ...props }) => (
                <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
              ),
            }}
      />
        </PopoverContent>
      </Popover>
    </div>
                </div>
              </div>
            {/* div3 */}
              <div className="flex-col me-5">
                <p className="mb-3 ms-10">Ngày trả phòng</p>
                <div className="flex items-center gap-4">
                <img 
                src="/img/calendar.png"
                className="w-[20px] h-[20px]"
                />
                <div className="">
      <Popover placement="bottom">
        <PopoverHandler>
          <Input
            label="Chọn ngày"
            onChange={() => null}
            value={checkOutDate ? format(checkOutDate, "dd/MM/yyyy") : ""}
          />
        </PopoverHandler>
        <PopoverContent className="z-40 ">
        <DayPicker
         mode="single"
        selected={checkOutDate}
        onSelect={(date) => {
          if (date && date >= checkInDate) {
            setCheckOutDate(date);
          }else{
            alert("Không được chọn ngày trước check in")
          }
        }}
        disabled={{
          before: checkInDate, // Vô hiệu hóa các ngày trước ngày Check-in
        }}
        
        showOutsideDays
            className="border-0"
            classNames={{
              caption: "flex justify-center py-2 mb-4 relative items-center",
              caption_label: "text-sm font-medium text-gray-900",
              nav: "flex items-center",
              nav_button:
                "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
              nav_button_previous: "absolute left-1.5",
              nav_button_next: "absolute right-1.5",
              table: "w-full border-collapse",
              head_row: "flex font-medium text-gray-900",
              head_cell: "m-0.5 w-9 font-normal text-sm",
              row: "flex w-full mt-2",
              cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: "h-9 w-9 p-0 font-normal",
              day_range_end: "day-range-end",
              day_selected:
                " rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
              day_today: "rounded-md bg-gray-200 text-gray-900",
              day_outside:
                "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
              day_disabled: "text-gray-500 opacity-50 cursor-not-allowed",
              day_hidden: "invisible",}}
              components={{
                IconLeft: ({ ...props }) => (
                  <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                ),
                IconRight: ({ ...props }) => (
                  <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                ),
              }}
      />
        </PopoverContent>
      </Popover>
    </div>
                </div>
              </div>

              {/* div4 */}
              <div className="flex-col me-5">
                <p   className="mb-3 ms-10">Khách</p>
                <div className="flex items-center gap-4 ">
                <img 
                src="/img/user.png"
                className="w-[20px] h-[20px]"
                />
                <div className="relative w-full">
  <Input type="number" value={value} onChange={handleInputChange}
  />


        <div className="absolute right-1 top-1 flex gap-0.5">
          <IconButton
            size="sm"
            variant="text"
            className="rounded"
            onClick={handleDecrement}
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
            </svg>
          </IconButton>
          <IconButton
            size="sm"
            variant="text"
            className="rounded"
            onClick={handleIncrement}
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
            </svg>
          </IconButton>
        </div>
      </div>
                </div>
              </div>

              <div className="w-[120px]">
              <Button className="rounded-full">Tìm kiếm</Button>
              </div>
            </div>
          </div>
          
        </Card>
      </div>
        </>
    )
}
export default Tab_search;