import React from "react";
import { Link } from "react-router-dom";
import { Chip, Rating, Textarea, Button } from "@material-tailwind/react";
import useMoney from "@/utils/useMoney";
import { useNavigate } from "react-router-dom";

const Paid = ({ config }) => {
    const {formatCurrency} = useMoney () ;
    console.log("Config received in Paid:", config);
    return (
        
        <div className="flex flex-col px-5">
            <div className="flex flex-row justify-between items-center bg-[#D0ECEC] p-3 px-5 rounded-t-lg">
                <p className="font-bold text-[15px] text-[#575756]"> Mã đặt chỗ: {config.bookingReference || "Không rõ"}</p>
                <p className="font-bold text-[20px]">{formatCurrency(config.price)}</p>
            </div>
            <div className="flex flex-row bg-[#EFFCFF] p-3 px-5">
                <div className="flex flex-row items-center gap-3">
                    <img src="/img/icon/building.png" className="w-[35px] h-[35px]"/>
                    <p className="font-bold text-[18px]">{config.roomNumber || "Thông tin phòng không có sẵn"}</p>
                </div>
            </div>
            <div className="flex flex-row bg-[#D0ECEC] p-3 px-5  ">
                <div><Chip color="green" value="Đã thanh toán" /></div>
                
            </div>
            <div className="flex flex-col bg-[#EFFCFF] p-3 px-5 rounded-b-lg gap-2" >
                <div><Rating unratedColor="amber" ratedColor="amber" /></div>
                <Textarea size="md" label="Bình luận" />
                <div className="flex justify-end"><Button color="blue">Gửi</Button></div>
            </div>
        </div>
    )
}
export default Paid;