import React from "react";
import { Button } from "@material-tailwind/react";

const Video = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-2 w-full mt-8 ">
        <div className="flex flex-row justify-between">
        <div>
        <p className="text-[30px] font-bold ">Khám phá rõ hơn</p>
        <p className="text-gray-500 mt-2">Chất lượng theo đánh giá của khách hàng. Đặt phòng với mức giá lí tưởng.</p>
        </div>
        </div>  

        <div className="flex flex-row mt-5 bg-blue-50 rounded-lg p-3 items-center justify-center">

            {/* video to */}
            <div className="w-3/5">
            <video className="h-full w-full rounded-lg" controls >
      <source src="/img/Video/main.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
            </div>


            {/* video nhỏ */}
            <div className="w-2/5 flex flex-col ms-5 justify-center gap-3">
            <div className="flex flex-row items-center">
                <div className="w-2/5">
                <video className="h-full w-full rounded-lg" controls>
      <source src="/img/Video/letan.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
                </div>
                <div className="w-3/5 ms-3">
                <p className="font-medium overflow-hidden text-ellipsis whitespace-nowrap text-[20px]">Phòng lễ tân</p>
                <p className="text-gray-500">Nhân viên phục vụ, Sảnh chính</p>

                </div>
            </div>

            <div className="flex flex-row items-center">
                <div className="w-2/5">
                <video className="h-full w-full rounded-lg" controls >
      <source src="img/Video/phongchinh.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
                </div>
                <div className="w-3/5 ms-3">
                <p className="font-medium overflow-hidden text-ellipsis whitespace-nowrap text-[20px]">Phòng chính</p>
                <p className="text-gray-500">Nơi nghỉ ngơi và thư giãn</p>
                </div>
            </div>

            <div className="flex flex-row items-center">
                <div className="w-2/5">
                <video className="h-full w-full rounded-lg" controls>
      <source src="img/Video/bancong.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
                </div>
                <div className="w-3/5 ms-3">
                <p className="font-medium overflow-hidden text-ellipsis whitespace-nowrap text-[20px]">Ban công</p>
                <p className="text-gray-500">View biển tuyệt đẹp</p>

                </div>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Video;