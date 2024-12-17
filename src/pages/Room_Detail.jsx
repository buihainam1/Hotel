import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import { NavbarWithMegaMenu } from "./Navigation";
import { IconButton, Button } from "@material-tailwind/react";
import Footer from "./Footer";
import Item_Comment from "@/components/Item_Comment";
import { Carousel,Spinner } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Avatar } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import useMoney from "@/utils/useMoney";
import { request } from "@/request";
import dayjs from "dayjs";
import Tab_search from "@/components/Tab_search";

const Room_Detail = () => {
  const location = useLocation();
  console.log(location);
  const id = location.state?.id; 

  // State
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);
  const [showAll, setShowAll] = useState(false);

  const entity = "room";

  // Fetch data
  const fetchData = async () => {
    try {
      console.log("Fetching data...");
      const response = await request.read({ entity, id });
      console.log("API Response:", response);
      setData(response.result);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  const reviews = [
    {
      id: 1,
      avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
      rating: "5.0",
      date: "03/12/2024",
      comment:
        "Trưởng đoàn và người lái xe của tôi đều rất chuyên nghiệp và đã cố gắng hết sức để đảm bảo chúng tôi có một khoảng thời gian vui vẻ...",
    },
    // Thêm các review khác nếu cần
  ];

  // Data processing
  const dataImg =
    data.roomImages?.map((image) => ({ imageLink: image.filePath })) || [];

    // Xử lý dữ liệu roomDescription
const items = Array.isArray(data.roomDescription)
? data.roomDescription
: data.roomDescription
? [data.roomDescription]
: [];

// Hiển thị các mục roomDescription
const visibleItems = showAll ? items : items.slice(0, visibleCount);

  const { formatCurrency } = useMoney();
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner className="h-16 w-16 text-gray-900/50" />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <NavbarWithMegaMenu />

      <div className="mx-auto max-w-screen-xl px-4 py-2 w-full mt-8 flex flex-col gap-5">
        {/* Header */}
        <div className="flex flex-row justify-between items-center">
          <Tab_search roomType ={data.roomTypeId} lock = {true} number={data.numberOfPeople} />
          <div className="flex flex-col gap-2">
            <p className="font-bold text-[25px]">{data.roomNumber}</p>
            <div className="flex flex-row gap-2 items-center">
              <img src="/img/clock.png" className="w-[15px] h-[15px]" alt="Clock" />
              <p className="text-[15px]">Mở | Thứ 2 - CN 09:00 - 18:00</p>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <IconButton variant="outlined">
              <img src="/img/heart.png" alt="Heart" />
            </IconButton>
            <IconButton variant="outlined">
              <img src="/img/share.png" alt="Share" />
            </IconButton>
          </div>
        </div>

        {/* Carousel */}
        <div className="flex flex-row w-full gap-3">
          <div className="w-3/5">
            <Carousel loop autoplay className="rounded-xl">
            {dataImg.map(({ imageLink }, index) => (
                <img
                  key={index}
                  src={imageLink}
                  alt={`Thumbnail ${index}`}

                  className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"
                />
              ))}
            </Carousel>
          </div>
          <div className="w-2/5">
            <div className="grid grid-cols-2 gap-2">
              {dataImg.map(({ imageLink }, index) => (
                <img
                  key={index}
                  src={imageLink}
                  alt={`Thumbnail ${index}`}

                  className="h-40 max-w-full rounded-lg object-cover"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Room details */}
        <div className="flex flex-row gap-3">
          <div className="w-1/5 bg-[#FAFAFA] rounded-lg p-3 flex flex-row items-center gap-2">
            <div className="rounded-full bg-[#2189E5] flex items-center justify-center p-1 w-[52px] h-[52px]">
              <p className="text-[30px] font-bold text-white">{data.averageRating? data.averageRating.toFixed(1):0}</p>
            </div>
            <div>
              <p className="font-bold text-[#1565C0]">Tuyệt vời</p>
              <p>Từ {data.totalFeedbacks} đánh giá</p>
            </div>
          </div>
          <div className="w-2/5 bg-[#FAFAFA] rounded-lg p-3 flex flex-row items-center gap-2">
            <img src="/img/placeholder.png" className="w-[40px] h-[40px]" alt="Map" />
            <div>
              <p className="font-bold text-[#1565C0]">Xem bản đồ</p>
              <p>Địa chỉ</p>
            </div>
          </div>
          <div className="w-2/5 bg-[#FAFAFA] rounded-lg p-3 flex flex-row justify-between items-center">
            <div>
              <p>Bắt đầu từ</p>
              <div className="flex flex-row items-center gap-2">
                <p className="font-bold text-[20px] text-[#EF6C00]">
                  {formatCurrency(data.price)}
                </p>
                <p className="line-through">
                  {formatCurrency(data.originalPrice)}
                </p>
              </div>
            </div>
            <Link to="/pages/enter_payment"
            state = {{id: data.id}}
            >
              <Button className="bg-[#FB8C00]">Đặt phòng</Button>
            </Link>
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-3/5 bg-[#FAFAFA] rounded-lg p-3">
          <p>Bạn sẽ trải nghiệm</p>
          <ul className="list-disc pl-5">
          {visibleItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          </ul>
          {items.length > visibleCount && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-2 text-blue-500 hover:underline"
          >
            {showAll ? "Thu gọn" : "Xem thêm"}
          </button>
        )}
        </div>

        
                        {/* div đánh giá */}
                        <div className="flex flex-col gap-3">
                          <div className="w-full flex flex-col justify-center items-center">
                          <p className="font-bold text-[25px]">Đánh giá</p>
                          </div>
                          <div className="w-1/5 flex justify-center flex-row items-center gap-3  rounded-lg p-3">
                                <p className="text-[45px] font-bold">{data.averageRating? data.averageRating.toFixed(1):0}</p>
                            <div className="flex flex-col">
                                <p className="font-bold ">Tuyệt vời</p>
                                <p>{data.totalFeedbacks} đánh giá</p>
                            </div>
                            </div>
                            <hr></hr>
                            <div className="flex flex-col">
                            <div className="flex flex-col gap-5">
              {data.feedbacks.slice(0, 5).map((review) => (
                <div key={review.id} className="flex flex-col">
                  <div className="flex flex-row gap-5">
                    <div className="flex-shrink-0">
                      <Avatar src={review.avatar} alt="avatar" />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold">{`${review.fullname}`}</p>
                      <p className="text-gray-600">{`${review.rating} | ${review.updatedeAt ? dayjs(review.updatedeAt).format('DD/MM/YYYY')  : dayjs(review.createdAt).format('DD/MM/YYYY')}`}</p>
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
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Room_Detail;