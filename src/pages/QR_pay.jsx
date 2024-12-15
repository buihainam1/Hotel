import React from "react";
import Header from "@/components/Header";
import { NavbarWithMegaMenu } from "./Navigation";
import { Button } from "@material-tailwind/react";
import Footer from "./Footer";
import { Tooltip } from "@material-tailwind/react";

const QR_pay = () => {
    return (
        <div className="w-full m-auto h-full">
            <Header />
            <NavbarWithMegaMenu />
            <div className="mx-auto max-w-screen-xl px-4 py-2 w-full mt-8 flex flex-row gap-10">
                <div className="w-3/5 flex flex-col border-2 rounded-lg p-5 gap-5">
                <p className="font-bold text-[25px]">Quét mã QR để thanh toán</p>
                <div className="flex flex-col gap-1 border border-[#DF7212] rounded-lg bg-[#FEF9DC] p-3">
                    <p>Vui lòng thanh toán trước thời gian quy định</p>
                    <p>Nếu không giao dịch sẽ tự động hoàn trả trong vòng 10 ngày  làm việc.</p>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex flex-row items-center justify-between bg-[#D0F0FF] p-3 rounded-t-lg">
                        <div>
                        <img src="/img/vnpay.webp"
                    alt="vnpay.png"
                    className="w-[100px] object-cover object-center overflow-hidden"
                    />
                        </div>
                        <Tooltip content="Tải mã QR về">
                        <Button variant="outlined" className="flex items-center gap-3 bg-white">Tải về mã QR</Button>
                         </Tooltip>
                          
                    </div>
                    <div className="flex flex-col border-x border-b justify-center items-center mt-10">
                        <p className="font-bold">Hotel VN</p>
                        <img src="/img/qrmeo.png" className="w-[300px] h-[300px]"/>
                        <div className="w-full flex flex-col mt-5 gap-3">
                        <p className="font-bold text-[20px]">Hướng dẫn thanh toán QR</p>
                        <ol className="list-decimal list-inside text-gray-700">
                            <li>Mở ví điện tử hoặc Ứng dụng  ngân hàng hỗ trợ thanh toán QR sau đó quét mã QR bên trên.</li>
                            <li>Vui lòng kiểm tra và đảm bảo số tiền và thông tin thanh toán khớp với thông tin đơn hàng, sau đó hoàn tất giao dịch trong thời hạn thanh toán.</li>
                            <li>Thông tin đặt chỗ sẽ được tự động xác nhận sau khi thanh toán thành công. Vui lòng kiểm tra trạng thái đặt hàng trên trang Đặt hàng.</li>
                        </ol>
                        </div>
                        
                    </div>
                </div>
                </div>
                <div className="w-2/5 flex flex-col ">
                  
                    <div className="flex flex-col bg-[#D0F0FF] p-3 ps-5 rounded-t-lg">
                        <p className="font-bold text-[20px]">Chi tiết</p>
                        <p className="text-gray-600">Mã đặt chỗ: 923874</p>
                    </div>
                    <div className="flex flex-row font-bold text-[20px] justify-between items-center p-5 border-x border-b rounded-b-lg">
                        <p>Số tiền</p>
                        <p>480.000 VND</p>
                    </div>
                
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default QR_pay;