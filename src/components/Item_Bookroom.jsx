import React from "react";
import { Button } from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import useMoney from "@/utils/useMoney";
import { useNavigate } from "react-router-dom";

const Item_Bookroom = ({ config }) => {
    const {formatCurrency} = useMoney () ;
    return (
        <div className="flex flex-row mt-5">
                            <div className="w-2/5">
                            <div className="w-full h-[200px] overflow-hidden rounded-lg">
                            <Carousel transition={{ duration: 2 }} className="rounded-xl" autoplay={true} loop={true}>
                            {config.roomImages?.length > 0 && (
  <img 
    src={config.roomImages[0].filePath} 
    className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"
  />
)}
              
            </Carousel>
                            </div>
                            </div>
                            <div className="w-3/5">
                            <div className="w-full rounded-lg bg-white border flex flex-row ms-5 justify-center items-center shadow-md mb-5">
            <div className="w-4/5 p-3 flex flex-row justify-between">
            <div className="flex flex-col justify-between w-2/5 gap-2">
                <p>Thông tin</p>
                <p>Không gồm bữa sáng</p>
                <div className="flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#25B47D" class="size-6" width={20} height={20}>
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
                <p className="text-[#25B47D]">Miễn phí hủy trước 30 thg 12 2024, 12:59</p>
                
                </div>
                <div className="flex flex-row items-center gap-2">
                    <img src="/img/user.png" className="w-[15px] h-[15px]"/>
                <p>Trẻ em có thể ở miễn phí</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                <img src="/img/bed.png" className="w-[15px] h-[15px]"/>
                <p>2 giường đôi</p>
                </div>
                
                
            </div>
            <div className="flex flex-col w-1/5">
            <p>Khách</p>
                <img src="/img/user.png" className="w-[15px] h-[15px]"/>
            </div>
            <div className="flex flex-col gap-2">
                <p>Giá/ Phòng/ Đêm</p>
                <Chip value="DEAL Chọn phòng" className="bg-[#CAE3FF] text-[#18667D]"/>

                <p className="line-through text-gray-500">{formatCurrency(config.originalPrice)}</p>
                <p className="text-[#DF7212] font-bold text-[20px]">{formatCurrency(config.price)}</p>
                <p className="text-gray-500">Đã bao gồm thuế và phí</p>
                </div>
               
            </div>
            <div className="w-1/5 items-center justify-center flex flex-col">
            <Tooltip
      content="Click để đặt phòng"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
        <Link to="/pages/room_detail" state={{ config }}>
        <Button className="bg-[#DF7212]">Chọn</Button>
        </Link>
    </Tooltip>
            
            <p className="text-red-600 mt-3">Nhanh hết phòng</p>
            </div>

        </div>
                            </div>
                        </div>
        
    )
}

export default Item_Bookroom;