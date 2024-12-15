import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Book_Room from "./pages/Book_Room";
import Book_Tour from "./pages/Book_Tour";
import Enter_Payment from "./pages/Enter_Payment";
import Enter_Payment_Tour from "./pages/Enter_Payment_Tour";
import Pay_Room from "./pages/Pay_Room";
import Pay_Tour from "./pages/Pay_Tour";
import { SignIn } from "./pages/auth";
import { SignUp } from "./pages/auth";
import QR_pay from "./pages/QR_pay";
import Setting from "./pages/Setting";
import Room from "./pages/Room";
import Top_bookRoom from "./pages/Top_bookRoom";
import Contact from "./pages/Contact";
import Best_Room from "./pages/Best_Room";
import Room_Detail from "./pages/Room_Detail";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Cuộn trang về đầu mỗi khi đường dẫn thay đổi
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {
  return (
    <>
      {/* ScrollToTop để cuộn về đầu mỗi khi route thay đổi */}
      <ScrollToTop />
      <Routes>
        {/* Định nghĩa các route */}
        <Route path="/" element={<Home />} />
        <Route path="/pages/book_room/*" element={<Book_Room />} />
        <Route path="/pages/book_tour/*" element={<Book_Tour />} />
        <Route path="/pages/enter_payment/*" element={<Enter_Payment />} />
        <Route path="/pages/enter_payment_tour/*" element={<Enter_Payment_Tour />} />
        <Route path="/pages/pay_room/*" element={<Pay_Room />} />
        <Route path="/pages/pay_tour/*" element={<Pay_Tour />} />
        <Route path="/auth/sign-in/*" element={<SignIn />}/>
        <Route path="/auth/sign-up/*" element={<SignUp />}/>
        <Route path="/pages/qr_pay/*" element={<QR_pay />}/>
        <Route path="/pages/setting/*" element={<Setting />}/>
        <Route path="/pages/room/*" element={<Room />}/>
        <Route path="/pages/top_bookRoom/*" element={<Top_bookRoom />}/>
        <Route path="/pages/contact/*" element={<Contact />}/>
        <Route path="/pages/best_Room/*" element={<Best_Room />}/>
        <Route path="/pages/room_detail/*" element={<Room_Detail />}/>
        {/* Wildcard: Nếu route không tồn tại, chuyển về Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
