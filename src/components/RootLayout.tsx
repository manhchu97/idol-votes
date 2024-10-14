"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Import useRouter
import Header from "./Header";
import Navigation from "./Navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeItem, setActiveItem] = useState("home");
  const router = useRouter(); // Khởi tạo router

  useEffect(() => {
    const currentPath = router.pathname; // Lấy path hiện tại

    // Kiểm tra và thực hiện hành động dựa trên path
    switch (currentPath) {
      case "/":
        setActiveItem("home");
        // Gọi hàm để lấy dữ liệu cho trang chính nếu cần
        break;
      case "/chart":
        setActiveItem("chart");
        // Gọi hàm để lấy dữ liệu cho trang biểu đồ nếu cần
        break;
      case "/vote":
        setActiveItem("vote");
        // Gọi hàm để lấy dữ liệu cho trang bình chọn nếu cần
        break;
      case "/fandom":
        setActiveItem("fandom");
        // Gọi hàm để lấy dữ liệu cho trang fandom nếu cần
        break;
      case "/community":
        setActiveItem("community");
        // Gọi hàm để lấy dữ liệu cho trang cộng đồng nếu cần
        break;
      default:
        break;
    }

    // Có thể gọi hàm để lấy dữ liệu tại đây nếu cần
    // fetchData(currentPath); 

  }, [router.pathname]); // Chạy lại useEffect khi pathname thay đổi

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow overflow-y-auto">{children}</main>
      <Navigation activeItem={activeItem} setActiveItem={setActiveItem} />
    </div>
  );
}