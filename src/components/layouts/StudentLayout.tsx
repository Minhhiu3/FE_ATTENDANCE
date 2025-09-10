import React, { useState } from "react";
import Sidebar from "../common/SidebarMenu";
import Header from "../common/Header";
import { Outlet } from "react-router";
import Genneralin4 from "../common/Genneralin4";



const App: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
            <Genneralin4 />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
