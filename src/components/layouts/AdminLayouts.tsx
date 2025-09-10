import React, { useState } from "react";
import Sidebar from "../common/SidebarMenuAdmin";
import { Outlet } from "react-router";
import Header from "../common/Header";

const App = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      {/* Sidebar cố định */}
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {/* Phần main */}
      <div className="flex-1 flex flex-col">
        {/* Header cố định */}
        <Header />

        {/* Chỉ phần này được cuộn */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
