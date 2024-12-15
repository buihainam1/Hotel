import React from "react";
import Header from "@/components/Header";
import { NavbarWithMegaMenu } from "./Navigation";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
  } from "@material-tailwind/react";
  import { useCountries } from "use-react-countries";
  import { Radio } from "@material-tailwind/react";
  import Footer from "./Footer";
  import { Chip } from "@material-tailwind/react";
  import { Link } from "react-router-dom";
  import { useLocation } from "react-router-dom";
  import useMoney from "@/utils/useMoney";


const Enter_Payment = () => {
   const location = useLocation();
    const { config } = location.state || {}; // Lấy dữ liệu từ state

    const { countries } = useCountries();
  const [country, setCountry] = React.useState(0);
  const { name, flags, countryCallingCode } = countries[country];

  const {formatCurrency} = useMoney () ;
    return (
        <div className="w-full m-auto h-full">
            <Header />
            <NavbarWithMegaMenu />
            <div className="mx-auto max-w-screen-xl px-4 py-2 w-full mt-8 flex flex-row gap-10">
              {/* div left */}
                <div className="w-3/5  ">
                <div className="flex flex-col gap-3 rounded-lg shadow-md p-5 border">
                <p className="font-bold text-[20px]">Thông tin liên hệ</p>
                <p className="text-gray-600">Hãy điền chính xác tất cả thông tin để đảm bảo bạn nhận được Phiếu xác nhận đặt phòng (E-voucher) qua email của mình.</p>
                <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
            Họ và tên
          </Typography>
          <Input
            size="lg"
            placeholder="Nhập họ và tên"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
                </div>
                <p className="text-gray-500">Như trong Hộ chiếu/CMND/CCCD (không có danh xưng/ký tự đặc biệt)</p>
                <div className="flex flex-row items-center gap-10">
                    <div className="w-2/5 mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
            Email
          </Typography>
          <Input
            size="lg"
            placeholder="Nhập Email"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <p className="text-gray-400">Chúng tôi sẽ gửi e-voucher tới email này.</p>
                    </div>
                    {/* số điện thoại */}
                    <div className="w-2/5 flex flex-col gap-6 w-full">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
            Số điện thoại
          </Typography>
                    <div className="relative flex w-full max-w-[24rem]">
      <Menu placement="bottom-start">
        <MenuHandler>
          <Button
            ripple={false}
            variant="text"
            color="blue-gray"
            className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
          >
            <img
              src={flags.svg}
              alt={name}
              className="h-4 w-4 rounded-full object-cover"
            />
            {countryCallingCode}
          </Button>
        </MenuHandler>
        <MenuList className="max-h-[20rem] max-w-[18rem]">
          {countries.map(({ name, flags, countryCallingCode }, index) => {
            return (
              <MenuItem
                key={name}
                value={name}
                className="flex items-center gap-2"
                onClick={() => setCountry(index)}
              >
                <img
                  src={flags.svg}
                  alt={name}
                  className="h-5 w-5 rounded-full object-cover"
                />
                {name} <span className="ml-auto">{countryCallingCode}</span>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <Input
  type="tel"
  placeholder="Số điện thoại"
  onChange={(e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Loại bỏ ký tự không phải số
  }}
  className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900"
  labelProps={{
    className: "before:content-none after:content-none",
  }}
  containerProps={{
    className: "min-w-0",
  }}
/>

    </div>
    <p className="text-gray-400">ví dụ. +62812345678 gồm Mã quốc gia (+62) và Số di động 0812345678.</p>
                    </div>

                </div>
                <div className="flex gap-10">
      <Radio name="type" label="Tôi là khách lưu trú" />
      <Radio name="type" label="Tôi đang đặt cho người khác" defaultChecked />
    </div>
    <div className="flex flex-row w-full justify-center items-center">
      <img src="/img/lock.png"
      className="w-[20px] h-[20px]"/>
      <p className="text-[#90A4AE]">Thanh toán được bảo mật và mã hóa</p>
    </div>
                </div>
                <div className="flex flex-col gap-3 rounded-lg shadow-md p-5 mt-5 border"> 
                  <p className="font-bold text-[20px]">Chi tiết giá</p>
                  <div className="flex flex-row justify-between">
                    <p>Giá phòng</p>
                    <p className="font-bold">183.422 VND</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Thuế và phí</p>
                    <p className="font-bold">Đã bao gồm giá</p>
                  </div>
                  <hr></hr>
                  <div className="flex flex-row justify-between items-center">
                  <p className="font-bold text-[20px]">Tổng giá phòng</p>
                  <p className="font-bold text-[20px] text-[#DF7212]">208.000 VND</p>
                  
                  </div>
                  <Link to="/pages/pay_room" >
                  <Button className="bg-[#DF7212] w-full">Tiếp tục thanh toán</Button>
                  </Link>
                </div>
                </div>

                {/* div right */}
                <div className="w-2/5 border">
                <div className="border shadow flex flex-col p-5 gap-3">
                  <div className="flex flex-row m-3 gap-5 w-full">
                    <div className="w-2/6">
                    <img
      className="h-full w-full rounded-lg object-cover object-center overflow-hidden"
      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
      alt="nature image"
    />
                    </div>
                    <div className="w-4/6 flex flex-col gap-3">
                    <p>Luxury</p>
                    <p className="font-bold text-[20px]">Phòng Superior - 1 giường đôi hoặc 2 giường đơn</p>
                    <div className="flex flex-row w-full gap-3">
                    <Chip variant="outlined" value="4.2" className="border-[#8DD3BB] border-2"/>
                    <p>Rất tốt 54 đánh giá</p>
                    </div>
                    
                    </div>

                  </div>
                  <hr></hr>
                  <div className="flex flex-row justify-between items-center  ">
                    <div className="border-2 flex flex-col rounded-lg p-1  items-center">
                      <p>Nhận phòng</p>
                      <p className="font-bold">T7, 10 THG 2 2024</p>
                      <p>Từ 14:00</p>
                    </div>
                    <div className="border h-[3px] bg-gray-500 w-1/5 justify-center"></div>        
                    <div className="border-2 flex flex-col rounded-lg p-1  items-center">
                      <p>Trả phòng</p>
                      <p className="font-bold">T2, 12 THG 2 2024</p>
                      <p>Từ 07:00</p>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="flex flex-row items-center gap-2">
                    <img src="/img/user.png" className="w-[15px] h-[15px]"/>
                <p>2 người lớn, 1 trẻ em</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                <img src="/img/bed.png" className="w-[15px] h-[15px]"/>
                <p>1 giường đôi, 1 giường đơn</p>
                </div>
                {/* gia tien */}
                <div className="flex flex-row justify-between">
                  <p>Tổng giá phòng</p>
                  <p className="line-through ">650.000 VND</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p>1 phòng, 1 đêm</p>
                  <p className="text-[#DF7212] font-bold">430.000 VND</p>
                </div>
                </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default Enter_Payment; 