import React from "react";
import Header from "@/components/Header";
import { NavbarWithMegaMenu } from "./Navigation";
import { Radio, Typography } from "@material-tailwind/react";
import {
    Card,
    Input,
    Checkbox,
    Button,
 
  } from "@material-tailwind/react";
  import Footer from "./Footer";
  import useMoney from "@/utils/useMoney";

const Pay_Tour = () => {
  // định dạng tiền
  const {formatCurrency} = useMoney () ;
    return (
        <div className="w-full m-auto h-full">
            <Header />
            <NavbarWithMegaMenu />
            <div  className="mx-auto max-w-screen-xl px-4 py-2 w-full mt-8 flex flex-row gap-10">
                {/* div left */}
                <div className="w-3/5 flex flex-col gap-5">
                {/* vnpay */}
                <div className="border rounded-lg p-5 flex flex-col gap-3 shadow-md">
                    <p className="font-bold text-[18px]">Bạn muốn thanh toán thế nào?</p>
                    <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row">
                    <Radio
        name="description"
        label={
          <div>
            <Typography color="blue-gray" className="font-medium">
              VNPAYQR
            </Typography>
           
            
          </div> 
        }
      />
       <p className="text-[#1FD000] text-[10px]">Ưu tiên giảm giá</p>
                    </div>
                    <div>
                    <img src="/img/vnpay.webp"
                    alt="vnpay.png"
                    className="w-[100px] object-cover object-center overflow-hidden"
                    />
                    </div>                   
                    </div>
                    <div className="border border-[#81B0C9] bg-[#EBF8FF] p-2 ms-5 me-5">
                        <ul className="list-disc pl-5">
                            <li><p>Đảm bảo bạn có ví điện tử hoặc ứng dụng ngân hàng di động hỗ trợ thanh toán bằng VNPAY.</p></li>
                            <li> <p>Mã QR sẽ xuất hiện khi bạn nhấp vào nút ‘Thanh toán’. Chỉ cần lưu hoặc chụp màn hình mã QR để hoàn tất thanh toán của bạn.</p></li>
                            <li> <p>Vui lòng sử dụng mã QR mới nhất được cung cấp mới nhất để hoàn tất thanh toán của bạn.</p></li>
                        </ul>                 
                    </div>
                    
                    
                </div>
                {/* option khác */}
                <div className="border rounded-lg p-5 flex flex-col gap-3 shadow-md">
                    <div className="flex flex-row">
                    <Radio
        name="description"
        defaultChecked
        label={
          <div>
            <Typography color="blue-gray" className="font-medium">
              Thanh toán tại quầy
            </Typography>
          </div>
        } />
                    </div>
                    <hr></hr>
                    <div className="flex flex-row justify-between">
                    <Radio
        name="description"
        color="black"
        disabled
        label={
          <div>
            <Typography color="blue-gray" className="font-medium">
              Thanh toán bằng ngân hàng khác
            </Typography>
            
          </div>
        }        
      />
      <div className="flex flex-row items-center">
      <div><img src="/img/vcb.webp"  className="w-[100px] object-cover object-center overflow-hidden"/></div>
      <div><img src="/img/tcb.png"  className="w-[100px] object-cover object-center overflow-hidden"/></div>
      </div>
      
                    </div>
                </div>
                {/* Mã giảm giá */}
                <div className="border rounded-lg p-5 flex flex-row gap-3 shadow-md items-center justify-between">
                    <p>Thêm mã giảm giá</p>
                    <p className="font-bold text-[#08A2F5]">Thêm mã</p>
                </div>

                {/* Thanh toán */}
                <div className="flex flex-col gap-3 rounded-lg shadow-md p-5  border "> 
                  <div className="flex flex-row justify-between items-center">
                  <p className="font-bold text-[20px]">Tổng giá phòng</p>
                  <p className="font-bold text-[20px] text-[#DF7212]">{formatCurrency(208000)}</p>
                  
                  </div>
                  
                  <Button className="bg-[#DF7212] w-full">Thanh toán & hiển thị mã QR</Button>
                  <div className="flex justify-center items-center"><p className="text-[13px] ">Bằng cách tiếp tục thanh toán, bạn đã đồng ý Điều khoản & Điều kiện và Chính sách quyền riêng tư</p>
                  </div>
                  
                </div>
                </div>



                {/* div right */}
                <div className="w-2/5">
                <div className="w-full flex flex-col border rounded-lg p-5 gap-5 shadow-md">
                  <p>Chi tiết đặt chỗ</p>
                  <p className="uppercase font-bold">SUN WORLD HA LONG & LUNCH BUFFET - DAY TOUR</p> 
                  <hr></hr>
                  <div className="flex flex-row text-gray-600 justify-between">
                    <p>Ngày tham quan</p>
                    <p>Th3, 14 thg 12 2024</p>
                  </div>
                  <div className="flex flex-row text-gray-600 justify-between">
                    <p>Áp dụng cho</p>
                    <p>Người lớn: 2</p>
                  </div>
                  <p>Khách</p>
                  <div className="flex flex-col">
                  <p className="uppercase text-gray-700">Nguyen Bui Hai Nam</p>
                  <p className="text-gray-700">+84123456789</p>
                  <p className="text-gray-700">hotel@gmail.com</p>
                  </div>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Pay_Tour;