import React, { useEffect, useState } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
  import { Tooltip, Button } from "@material-tailwind/react";
  import Item_Comment from "@/components/Item_Comment";
  import { request } from "@/request";

  
function StarIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 text-yellow-700"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    );
  }


const Comment = () => {
  // const [data, setData] = useState([]);
  // const entity = 'room/feedback';
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await request.list({ entity});
  //     setData(response.result);
  //     console.log(response.result);
  //   };

  //   fetchData();
  // }, []);
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-2 w-full mt-8 ">
        <div className="flex flex-row justify-center">
        <p className="text-[30px] font-bold ">Các đánh giá gần đây</p>
        </div>
        <div className="mt-5">
        <Item_Comment 
        //config = {datacmt}
        />
       
        
        </div>
         

    </div>
    )
}

export default Comment;