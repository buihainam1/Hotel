import React from "react";


const Header = () => {
    return (
        <div className="w-1100 flex justify-between mt-3 items-center ms-8 me-8 border-b border-gray-300 pb-2">
            <div className="flex">
            <div className="flex me-5">
            <img 
            src="/img/phone-call.png"
            alt="logo-call"
            className="w-[20px] h-[20px] object-cover"
            />
           <p className="ms-2">+0123 431 243</p>
            </div>
            <div className="flex">
            <img 
           src="/img/email.png"
           alt="email"
           className="w-[20px] h-[20px] object-cover"
           />
           <p className="ms-2">hotel24@gmail.com</p>
            </div>
            </div>
            

            <div className="flex me-28">
                <img
                src="/img/thunder.png"
                alt="thunder"
                className="w-[20px] h-[20px] object-cover"
                />
                <p className="ms-1">Hãy trải nghiệm dịch vụ khách sạn của chúng tôi</p>
            </div>

            <img 
            src="/img/sun.png"
            alt="sun"
            className="w-[20px] h-[2-px] object-cover"
            />
           
        </div>
    )
}

export default Header