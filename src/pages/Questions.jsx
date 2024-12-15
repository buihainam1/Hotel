import React from "react";


const Questions = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-2 w-full mt-8">
            <div className="flex flex-row justify-center">
        <p className="text-[30px] font-bold ">Những câu hỏi thường gặp</p>
        </div>
        <div className="flex justify-center mt-5">
            <div className=" w-4/5  flex justify-center flex-col">
            {/* ques 1 */}
            <div className="w-full flex flex-row gap-10 items-center border rounded-lg justify-between p-3">
            <div className="flex flex-row items-center gap-8">
                <p className="font-bold text-[50px]">01</p>
                <p className="font-bold text-[20px] ">Làm thế nào để tôi đặt chỗ trên trang web của bạn?</p>
                </div>
                <div className="bg-blue-gray-50 p-1 rounded-md">
                    <img 
                    src="/img/plus.png"
                    className="w-[30px] h-[30px]"
                    />
                </div>
            </div>

            {/* ques 2 */}
            <div className="w-full flex flex-row gap-10 items-center border rounded-lg justify-between p-3">
            <div className="flex flex-row items-center gap-8">
                <p className="font-bold text-[50px]">02</p>
                <p className="font-bold text-[20px] ">Tôi cần những giấy tờ gì cho chuyến đi của mình và tôi có thể xin chúng ở đâu?</p>
                </div>
                <div className="bg-blue-gray-50 p-1 rounded-md">
                    <img 
                    src="/img/plus.png"
                    className="w-[30px] h-[30px]"
                    />
                </div>
            </div>

            {/* ques 3 */}
            <div className="w-full flex flex-row gap-10 items-center border rounded-lg justify-between p-3">
            <div className="flex flex-row items-center gap-8">
                <p className="font-bold text-[50px]">03</p>
                <p className="font-bold text-[20px] ">Trong trường hợp tôi cần sửa đổi hoặc hủy đặt phòng, các chính sách hiện hành là gì?</p>
                </div>
                <div className="bg-blue-gray-50 p-1 rounded-md">
                    <img 
                    src="/img/plus.png"
                    className="w-[30px] h-[30px]"
                    />
                </div>
            </div>

            {/* ques 4 */}
            <div className="w-full flex flex-row gap-10 items-center border rounded-lg justify-between p-3">
            <div className="flex flex-row items-center gap-8">
                <p className="font-bold text-[50px]">04</p>
                <p className="font-bold text-[20px] ">Trong trường hợp tôi cần sửa đổi hoặc hủy đặt phòng tôi cần làm như thế nào?</p>
                </div>
                <div className="bg-blue-gray-50 p-1 rounded-md">
                    <img 
                    src="/img/plus.png"
                    className="w-[30px] h-[30px]"
                    />
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Questions;