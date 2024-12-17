import React ,{ useEffect, useState } from "react";
import Header from "@/components/Header";
import { NavbarWithMegaMenu } from "./Navigation";
import { request } from "@/request";
import Item_rooms from "@/components/Item_rooms";

const Best_Room = () => {
    
    const [data, setData] = useState([]);
          const entity = 'room/top-deal';
          useEffect(() => {
            const fetchData = async () => {
              const response = await request.list({ entity});
              setData(response.result);
              console.log(response.result);
            };
        
            fetchData();
          }, []);
    return (
        <div className="w-full m-auto h-full">
            <Header />
            <NavbarWithMegaMenu />
            <div className="mx-auto max-w-screen-xl px-4 py-2 w-full mt-8 flex flex-col gap-3">
            <div>
              <p className="text-[30px] font-bold ">Danh sách các phòng giá rẻ nhất !!</p>
              </div>
                <div className="grid grid-cols-2 gap-4">
                                          {data.map((room) => (
                                        <Item_rooms 
                                        config = {room}
                                        />
                                      ))}
                                          
                                          </div>
            </div>
        </div>
    )
}
export default Best_Room;

