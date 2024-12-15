import React from "react";
import Header from "@/components/Header";
import { NavbarWithMegaMenu } from "./Navigation";
import { IconButton } from "@material-tailwind/react";
import Footer from "./Footer";
import { Button } from "@material-tailwind/react";
import Item_Comment from "@/components/Item_Comment";
import { Carousel } from "@material-tailwind/react";
import { useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Avatar } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import useMoney from "@/utils/useMoney";
import { useLocation } from "react-router-dom";
 


const Room_Detail = () => {

  const location = useLocation();
  const { config } = location.state || {}; // Lấy dữ liệu từ state
  // đánh giá của khách hàng
  const reviews = [
    {
      id: 1,
      avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
      rating: "5.0",
      date: "03/12/2024",
      comment:
        "Trưởng đoàn và người lái xe của tôi đều rất chuyên nghiệp và đã cố gắng hết sức để đảm bảo chúng tôi có một khoảng thời gian vui vẻ...",
    },
    {
      id: 2,
      avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
      rating: "5.0",
      date: "03/12/2024",
      comment:
        "Trưởng đoàn và người lái xe của tôi đều rất chuyên nghiệp và đã cố gắng hết sức để đảm bảo chúng tôi có một khoảng thời gian vui vẻ...",
    },
    {
      id: 3,
      avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
      rating: "5.0",
      date: "03/12/2024",
      comment:
        "Trưởng đoàn và người lái xe của tôi đều rất chuyên nghiệp và đã cố gắng hết sức để đảm bảo chúng tôi có một khoảng thời gian vui vẻ...",
    },
    {
      id: 4,
      avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
      rating: "5.0",
      date: "03/12/2024",
      comment:
        "Trưởng đoàn và người lái xe của tôi đều rất chuyên nghiệp và đã cố gắng hết sức để đảm bảo chúng tôi có một khoảng thời gian vui vẻ...",
    },
    {
      id: 5,
      avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
      rating: "5.0",
      date: "03/12/2024",
      comment:
        "Trưởng đoàn và người lái xe của tôi đều rất chuyên nghiệp và đã cố gắng hết sức để đảm bảo chúng tôi có một khoảng thời gian vui vẻ...",
    },
    {
      id: 6,
      avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
      rating: "5.0",
      date: "03/12/2024",
      comment:
        "Trưởng đoàn và người lái xe của tôi đều rất chuyên nghiệp và đã cố gắng hết sức để đảm bảo chúng tôi có một khoảng thời gian vui vẻ...",
    },
  ];

  // State quản lý số lượng thẻ được hiển thị
  const [visibleCount, setVisibleCount] = useState(3);

  // Hàm hiển thị toàn bộ thẻ
  const showMore = () => {
    setVisibleCount(reviews.length);
  };

  // Hàm thu gọn danh sách về 3 thẻ
  const showLess = () => {
    setVisibleCount(3);
  };


  const [showAll, setShowAll] = useState(false);

  // Nếu `config.roomImages` tồn tại, sử dụng nó làm dữ liệu thay thế
  const data = config.roomImages?.map((image) => ({
    imageLink: image.filePath,
  })) || [];

  const items = [
    "Khám phá The Amazing Bay - Vịnh Kỳ Diệu, siêu công viên nước lớn nhất Việt Nam",
    "Trải nghiệm và chinh phục 5 chủ đề, 9 cụm trò chơi với 30 ống trượt khác nhau tại công viên",
    "Chứng kiến Bãi Biển Thiên Đường ngập tràn cát trắng cùng những ngọn sóng kỳ diệu cao 4 mét",
    "Khám phá thêm các khu vui chơi độc đáo và hấp dẫn khác tại công viên",
    "Trải nghiệm các chương trình biểu diễn nghệ thuật đặc sắc chỉ có tại đây",
  ];

  // Giới hạn số lượng mục hiển thị
  const visibleItems = showAll ? items : items.slice(0, 3);
// định dạng giá tiền
  const {formatCurrency} = useMoney () ; 

    return (
        <div>
            <Header />
            <NavbarWithMegaMenu />

            <div className="mx-auto max-w-screen-xl px-4 py-2 w-full mt-8 flex flex-col gap-5">
                {/* div head */}
                <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col gap-2">
                <p className="font-bold text-[25px]">{config.roomNumber}</p>
                <div className="flex flex-row gap-2 items-center">
                    <img src="/img/clock.png" className="w-[15px] h-[15px]"/>
                    <p className="text-[15px]">Mở | Thứ 2 - CN  09:00 - 18:00</p>
                </div>
                </div>
                <div className="flex flex-row gap-3">
                <a href="#buttons-with-link">
        <IconButton variant="outlined">
          <img src="/img/heart.png"/>
        </IconButton>
      </a>
      <a href="#buttons-with-link">
        <IconButton variant="outlined">
          <img src="/img/share.png"/>
        </IconButton>
      </a>
                </div>
                </div>
                
                {/* div2 img */}
                <div className="flex flex-row w-ful gap-3 ">
                    <div className="w-3/5">
                    <Carousel loop={true} autoplay={true} className="rounded-xl">
                    <img src={config.roomImages[0].filePath}  className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"/>
                    {/* <img src={config.roomImages[1].filePath}  className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"/>
                    <img src={config.roomImages[2].filePath}  className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"/> */}
    </Carousel>
                    </div>
    <div  className="w-2/5">
    <div className="grid grid-cols-2 gap-2">
      {data.map(({ imageLink }, index) => (
        <div key={index}>
          <img
            className="h-40 max-w-full rounded-lg object-cover object-center md:h-60 overflow-hidden"
            src={imageLink}
            alt=""
          />
        </div>
      ))}
    </div>
    </div>
                </div>

                {/* div3 */}
                <div className="flex flex-row gap-3">
                    <div className="w-1/5 flex justify-center flex-row items-center gap-2 bg-[#FAFAFA] rounded-lg p-3">
                    <div className="rounded-full bg-[#2189E5] flex items-center justify-center p-1">
                        <p className="text-[30px] font-bold text-white">4.2</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-[#1565C0]">Tuyệt vời</p>
                        <p>Từ {config.totalFeedbacks} đánh giá</p>
                    </div>
                    </div>
                    <div className="w-2/5 flex  flex-row items-center gap-2 bg-[#FAFAFA] rounded-lg p-3">
                    <div>
                        <img src="/img/placeholder.png" className="w-[40px] h-[40px]"/>
                    </div>
                    <div>
                        <p className="font-bold text-[#1565C0]">Xem bản đồ</p>
                        <p>Địa chỉ</p>
                    </div>
                    </div>
                    <div className="w-2/5 flex justify-center flex-row items-center gap-2 bg-[#FAFAFA] rounded-lg p-3">
                    <div className="w-3/5">
                    <p>Bắt đầu từ</p>
                    <div className="flex flex-row items-center gap-2">
                    <p className="font-bold text-[20px] text-[#EF6C00]">{formatCurrency(config.price)}</p>
                    <p className="line-through">{formatCurrency(config.originalPrice)}</p>
                    </div>
                    </div>
                    <div className="w-2/5">
                    <Link to="/pages/enter_payment" >
                    <Button className="bg-[#FB8C00] w-full">Đặt vé</Button>
                    </Link>
                    </div>
                    </div>
                </div>

                {/* div4 */}
                <div className="flex flex-row gap-3">
                <div className="w-3/5 flex flex-col bg-[#FAFAFA] rounded-lg gap-3 p-3">
                <p>Bạn sẽ trải nghiệm</p>
                <div>
      <ul className="list-disc pl-5">
        {visibleItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-2 text-blue-500 hover:underline"
      >
        {showAll ? "Thu gọn" : "Xem thêm"}
      </button>
    </div>
    <hr></hr>
    <div className="flex flex-row items-center">
      <img src="/img/paper.png" className="w-[30px] h-[30px]"/>
      <p className="text-[#01579B]">Thông tin liên hệ, tiện ích, dịch vụ ngôn ngữ và nhiều thông tin khác</p>
    </div>
                </div>
                <div className="w-2/5 flex flex-col">
                <p className="font-bold">Ấn tượng từ những du khách</p>
                <div>
                  <Item_Comment />
                </div>
                </div>
                </div>
                <hr className="h-2 bg-gray-50 "></hr>
                
                {/* div 5 */}
                <div className="w-full border rounded-lg bg-[#FAFAFA] flex flex-col gap-5 pb-5">
                  <p className="font-bold m-5 text-[20px]">Có vé trống cho bạn</p>
                  <div className="flex flex-row gap-5  justify-center">
                    <div className="w-1/8 rounded-lg border bg-white flex flex-row gap-2 p-3 items-center">
                    <img src="/img/calendar.png" className="w-[30px] h-[30px] "/>
                    <p className="text-[#01579B]">Xem lịch</p>
                    </div>
                    
                    <div className="w-1/8 rounded-lg border bg-white flex flex-col gap-2 p-3 items-center">
                    <p>CN</p>
                    <p>20 thg 12</p>
                    </div>

                    <div className="w-1/8 rounded-lg border bg-white flex flex-col gap-2 p-3 items-center">
                    <p>CN</p>
                    <p>20 thg 12</p>
                    </div>

                    <div className="w-1/8 rounded-lg border bg-white flex flex-col gap-2 p-3 items-center">
                    <p>CN</p>
                    <p>20 thg 12</p>
                    </div>

                    <div className="w-1/8 rounded-lg border bg-white flex flex-col gap-2 p-3 items-center">
                    <p>CN</p>
                    <p>20 thg 12</p>
                    </div>

                    <div className="w-1/8 rounded-lg border bg-white flex flex-col gap-2 p-3 items-center">
                    <p>CN</p>
                    <p>20 thg 12</p>
                    </div>

                    <div className="w-1/8 rounded-lg border bg-white flex flex-col gap-2 p-3 items-center">
                    <p>CN</p>
                    <p>20 thg 12</p>
                    </div>

                    <div className="w-1/8 rounded-lg border bg-white flex flex-col gap-2 p-3 items-center">
                    <p>CN</p>
                    <p>20 thg 12</p>
                    </div>
                    
                    
                  </div>
                </div>

                {/* div đánh giá */}
                <div className="flex flex-col gap-3">
                  <div className="w-full flex flex-col justify-center items-center">
                  <p className="font-bold text-[25px]">Đánh giá</p>
                  </div>
                  <div className="w-1/5 flex justify-center flex-row items-center gap-3  rounded-lg p-3">
                        <p className="text-[45px] font-bold">4.2</p>
                    <div className="flex flex-col">
                        <p className="font-bold ">Tuyệt vời</p>
                        <p>{config.totalFeedbacks} đánh giá</p>
                    </div>
                    </div>
                    <hr></hr>
                    <div className="flex flex-col">
                    <div className="flex flex-col gap-5">
      {reviews.slice(0, visibleCount).map((review) => (
        <div key={review.id} className="flex flex-col">
          <div className="flex flex-row gap-5">
            <div className="flex-shrink-0">
              <Avatar src={review.avatar} alt="avatar" />
            </div>
            <div className="flex flex-col">
              <p>{`${review.rating} | ${review.date}`}</p>
              <p>{review.comment}</p>
            </div>
          </div>
          <hr />
        </div>
      ))}
      {/* Nút "Xem thêm" hoặc "Thu gọn" */}
      {visibleCount < reviews.length ? (
        <button
          onClick={showMore}
          className="text-blue-500 underline mt-4 self-start"
        >
          Xem thêm
        </button>
      ) : (
        reviews.length > 3 && (
          <button
            onClick={showLess}
            className="text-blue-500 underline mt-4 self-start"
          >
            Thu gọn
          </button>
        )
      )}
    </div>
                      
                    </div>
                </div>

                {/* div bản đồ */}
                <div className="flex flex-col gap-3">
                  <p className="font-bold text-[25px]">Thông tin địa điểm</p>
                  <div className="flex flex-row gap-3 items-center">
                    <img src="/img/mapmap.png" className="w-[30px] h-[30px]"/>
                    <p>Vé Công viên nước The Amazing Bay</p>
                  </div>
                  <div className="mt-4">
                  <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.4902094364434!2d106.86922817488401!3d10.87730328927764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174dfdef316d5b3%3A0xdbbfe990f253f8e9!2zU2nDqnUgQ8O0bmcgVmnDqm4gTsaw4bubYyBUaGUgQW1hemluZyBCYXkgLSBW4buLbmggS-G7syBEaeG7h3U!5e1!3m2!1svi!2s!4v1733394473071!5m2!1svi!2s"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
                  </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default Room_Detail;