import React from "react";
import { Link } from "react-router-dom";
import { Chip, Rating, Textarea, Button } from "@material-tailwind/react";
import useMoney from "@/utils/useMoney";

const Paid = () => {
    const {formatCurrency} = useMoney () ;
    return (
        <div className="flex flex-col px-5">
            <div className="flex flex-row justify-between items-center bg-[#D0ECEC] p-3 px-5 rounded-t-lg">
                <p className="font-bold text-[15px] text-[#575756]">Mã đặt chỗ: 79874654321</p>
                <p className="font-bold text-[20px]">{formatCurrency(208000)}</p>
            </div>
            <div className="flex flex-row bg-[#EFFCFF] p-3 px-5">
                <div className="flex flex-row items-center gap-3">
                    <img src="/img/icon/building.png" className="w-[35px] h-[35px]"/>
                    <p className="font-bold text-[18px]">Phòng Vip cho khách ngủ qua đêm</p>
                </div>
            </div>
            <div className="flex flex-row bg-[#D0ECEC] p-3 px-5  justify-between">
                <div><Chip color="green" value="Đã thanh toán" /></div>
                <p className="font-bold text-[#1BA0E2]">Tiếp tục đặt chỗ</p>
            </div>
            <div className="flex flex-col bg-[#EFFCFF] p-3 px-5 rounded-b-lg">
                <div><Rating unratedColor="amber" ratedColor="amber" /></div>
                <Textarea size="md" label="Bình luận" />
                <div className="flex justify-end"><Button color="blue">Gửi</Button></div>
            </div>
        </div>
    )
}
export default Paid;