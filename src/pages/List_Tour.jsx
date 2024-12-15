import React ,{ useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import Item_Tour from "../components/Item_Tour";
import { request } from "@/request";


const ListTour = () => {
    const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true); 
      const entity = 'tour';
      const options = { items: 3, page: 1 };

  useEffect(() => {
      const fetchData = async () => {
        setLoading(true); // Bắt đầu loading
        try {
          const response = await request.list({ entity, options });
          console.log(JSON.stringify(response));
          setData(response.result.pageItems || []);
        } catch (error) {
          console.error("Failed to fetch data:", error);
        } finally {
          setLoading(false); // Kết thúc loading
        }
      };
  
      fetchData();
    }, []);

    return (
    <div className="mx-auto max-w-screen-xl px-4 py-2 w-full mt-8">
          <div className="flex items-center gap-3">
            <img src="/img/fire.png" className="w-[40px] h-[40px]" />
            <p className="text-[30px] font-bold ">Tour du lịch được yêu thích nhất.</p>
          </div>
          <p className="text-gray-500 mt-2">Chất lượng theo đánh giá của khách hàng. Đặt tour với mức giá lí tưởng.</p>
          <div className="mt-5">
            {loading ? (
              <Button variant="text" loading={true}>
              Đang lấy dữ liệu
            </Button>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {data.length > 0 ? (
                  data.map((data) => (
                    <Item_Tour key={data.id} config={data} />
                  ))
                ) : (
                  <p className="text-gray-500">Không có dữ liệu tour để hiển thị.</p>
                )}
              </div>
            )}
          </div>
        </div>

    )

}

export default ListTour;