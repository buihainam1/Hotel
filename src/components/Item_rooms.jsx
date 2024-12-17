import React from "react";
import { Chip } from "@material-tailwind/react";
import { Rating } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import usePercentage from "@/utils/usePercentage";
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Typography,
  } from "@material-tailwind/react";
  import { useNavigate } from "react-router-dom";
  import { Link } from "react-router-dom";
  import useMoney from "@/utils/useMoney";


 export default function Item_rooms({ config }) { 
  
  const { calculateDiscountPercentage } = usePercentage();


    const [openPopover, setOpenPopover] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
  console.log("điểm đánh giá phòng: "+config.roomNumber +" " + Math.floor(parseFloat(config?.averageRating||0)));

  const {formatCurrency} = useMoney () ;
    return (
        <div key={config.id} className="w-full h-[200px] flex  border border-gray-300 shadow-sm rounded-lg gap-3">
            <div className="w-2/5 ">
            {config.roomImages?.length > 0 && (
  <img 
    src={config.roomImages[0].filePath} 
    className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"
  />
)}
            </div>
            <div className="w-3/5 flex flex-col gap-2">
            {/* div1 */}
            <div className="relative">
            {calculateDiscountPercentage(config.originalPrice, config.discountedPrice) > 0 && (
  <div
    className="absolute top-0 right-5 bg-yellow-400 text-[15px] text-black font-bold text-center w-10 h-10 flex items-center justify-center"
    style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)" }}
  >
    {calculateDiscountPercentage(config.originalPrice, config.discountedPrice)}&#37;
  </div>
)}
            </div>
            {/* div2 */}
            <div className="w-12 flex items-center ms-2 mt-3">
            <Chip color="teal" value={config.roomTypeName || "Normal"} />
            </div>

            {/* div3 :Tên phòng*/}
            <div className="ms-2 w-full">
            <Popover open={openPopover} handler={setOpenPopover}>
      <PopoverHandler {...triggers}>
      <p className="font-bold text-[20px] overflow-hidden text-ellipsis whitespace-nowrap w-full">{config.roomNumber}</p>

      </PopoverHandler>
      <PopoverContent {...triggers} className="z-50 max-w-[26rem]">
        <div className="mb-2 flex items-center gap-3">
          <Typography
            as="a"
            href="#"
            variant="h6"
            color="blue-gray"
            className="font-bold transition-colors hover:text-gray-900 overflow-hidden text-ellipsis whitespace-nowrap"
          >
            Phòng tập thể dành cho 5 người
          </Typography>
          <Chip color="teal" value="Family" />
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal text-blue-gray-500"
        >
          @material-tailwind is an easy-to-use components library for Tailwind
          CSS and Material Design.
        </Typography>
        <div className="mt-4 flex items-center gap-5">
          <div className="flex items-center gap-1">
            <span className="h-3 w-3 rounded-full bg-blue-700" />
            <Typography
              color="gray"
              className="text-xs font-medium text-blue-gray-500"
            >
              Phòng đẹp
            </Typography>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-0.5 h-4 w-4 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <Typography
              color="gray"
              className="text-xs font-medium text-blue-gray-500"
            >
              1,480
            </Typography>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="-mt-px h-4 w-4 text-green-500"
            >
              <path
                fillRule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            <Typography
              color="gray"
              className="text-xs font-medium text-blue-gray-500"
            >
              Được chứng nhận
            </Typography>
          </div>
        </div>
      </PopoverContent>
    </Popover>
            </div>

            {/* div4: số lượng người và  sao */}
            <div className="flex justify-between ms-3 me-3">
                <div className="flex items-center">
                    <img 
                    src="/img/user.png"className="w-[15px] h-[15px]"/>
                    <p className="text-[18px]">{config.numberOfPeople}</p>  
                </div>
                <div className="flex gap-3 items-center">

                  <Rating value={Math.floor(parseFloat(config?.averageRating||0))} readonly />

                <p>({config.totalFeedbacks})</p>
                </div>    
            </div>

            {/* div5: giá tiền */}
            <div className="ms-3 me-3 flex items-center mt-3 mb-5 justify-between">
                <div className="flex flex-row items-center">
                <p className="font-bold text-[20px]">{formatCurrency(config.price)}&#8260;</p>
                <p className="text-gray-500 ms-1">Đêm</p>
                </div>
                <Link to="/pages/room_detail" 
                 state={{ id: config.id }} // Truyền dữ liệu thông qua state
                >
  <Button variant="outlined" className="rounded-full">
    Chọn
  </Button>
</Link>
      
            </div>

            </div>
        </div>
        
    )
}

