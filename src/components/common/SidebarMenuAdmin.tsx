import React, { useState } from "react";
// import { useNavigate } from "react-router";
import {
  DashboardOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  BookOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import Footer from "./Footer";
import Menu from "./Menu";

interface SidebarProps {
  activeMenu: string;
  setActiveMenu: (key: string) => void;
}


const Sidebar: React.FC<SidebarProps> = ({ activeMenu, setActiveMenu }) => {
  const [collapsed, setCollapsed] = useState(false);
  // const navigate = useNavigate();
  const menuItems = [
    { key: "dashboard", icon: <DashboardOutlined />, label: "Quản lý người dùng", badge: 0, path: "/admin/dashboard" },
    { key: "schedule", icon: <CalendarOutlined />, label: "Quản lý môn học", badge: 3, path: "/admin/subjects" },
    { key: "attendance", icon: <CheckCircleOutlined />, label: "Quản lý lớp học", badge: 0, path: "/admin/classes" },
    { key: "classes", icon: <BookOutlined />, label: "Quản lý chuyên ngành", badge: 0, path: "/admin/majors" },
    { key: "profile", icon: <UserOutlined />, label: "Thông tin cá nhân", badge: 0, path: "/user-in4" },
  ];

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div className={`bg-white shadow-lg transition-all duration-300 ${collapsed ? "w-20" : "w-72"} flex flex-col sticky top-0 h-screen`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <i className="fas fa-graduation-cap text-white text-lg"></i>
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-lg font-bold text-gray-800">EduManager</h1>
              <p className="text-xs text-gray-500">Hệ thống quản lý đào tạo</p>
            </div>
          )}
        </div>
        <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-gray-100">
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </button>
      </div>

      {/* User Info */}
      {/* Menu */}
      <Menu
        menuItems={menuItems}
        collapsed={collapsed}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}/>

      {/* Footer */}
      <Footer collapsed={collapsed} />
    </div>
  );
};

export default Sidebar;
