// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";
import {
  DashboardOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  BookOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Avatar, Badge } from "antd";

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const menuItems = [
    {
      key: "dashboard",
      icon: <DashboardOutlined className="text-lg" />,
      label: "Trang chủ",
      badge: 0,
    },
    {
      key: "schedule",
      icon: <CalendarOutlined className="text-lg" />,
      label: "Lịch học",
      badge: 3,
    },
    {
      key: "attendance",
      icon: <CheckCircleOutlined className="text-lg" />,
      label: "Điểm danh",
      badge: 0,
    },
    {
      key: "classes",
      icon: <BookOutlined className="text-lg" />,
      label: "Lớp học của tôi",
      badge: 0,
    },
    {
      key: "profile",
      icon: <UserOutlined className="text-lg" />,
      label: "Thông tin cá nhân",
      badge: 0,
    },
  ];

  const handleMenuClick = (key: string) => {
    setActiveMenu(key);
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div
        className={`bg-white shadow-lg transition-all duration-300 ${collapsed ? "w-20" : "w-72"} flex flex-col`}
      >
        {/* Header với Logo */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-graduation-cap text-white text-lg"></i>
              </div>
              {!collapsed && (
                <div>
                  <h1 className="text-lg font-bold text-gray-800">
                    EduManager
                  </h1>
                  <p className="text-xs text-gray-500">
                    Hệ thống quản lý đào tạo
                  </p>
                </div>
              )}
            </div>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {collapsed ? (
                <MenuUnfoldOutlined className="text-gray-600" />
              ) : (
                <MenuFoldOutlined className="text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Thông tin sinh viên */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <Avatar
              size={collapsed ? 32 : 48}
              src="https://readdy.ai/api/search-image?query=professional%20student%20portrait%20photo%20with%20friendly%20smile%20wearing%20casual%20shirt%20against%20clean%20white%20background%20modern%20university%20setting&width=100&height=100&seq=student-avatar-001&orientation=squarish"
              className="flex-shrink-0"
            />
            {!collapsed && (
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-gray-800 truncate">
                  Nguyễn Văn An
                </h3>
                <p className="text-sm text-gray-500">SV2024001</p>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-500">Đang hoạt động</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Menu Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => handleMenuClick(item.key)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap !rounded-button ${
                    activeMenu === item.key
                      ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                  }`}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {!collapsed && (
                    <>
                      <span className="font-medium flex-1 text-left">
                        {item.label}
                      </span>
                      {item.badge > 0 && (
                        <Badge
                          count={item.badge}
                          size="small"
                          className="flex-shrink-0"
                        />
                      )}
                    </>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer thông tin hỗ trợ */}
        <div className="p-4 border-t border-gray-100">
          {!collapsed && (
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <i className="fas fa-headset text-blue-600"></i>
                <span className="text-sm font-medium text-blue-800">
                  Hỗ trợ
                </span>
              </div>
              <p className="text-xs text-blue-600 mb-2">
                Cần trợ giúp? Liên hệ với chúng tôi
              </p>
              <button className="w-full bg-blue-600 text-white text-xs py-2 px-3 rounded-md hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap !rounded-button">
                Liên hệ hỗ trợ
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Trang chủ</h2>
              <p className="text-gray-600">
                Chào mừng bạn trở lại, Nguyễn Văn An
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                <BellOutlined className="text-xl" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3">
                <Avatar
                  size={36}
                  src="https://readdy.ai/api/search-image?query=professional%20student%20portrait%20photo%20with%20friendly%20smile%20wearing%20casual%20shirt%20against%20clean%20white%20background%20modern%20university%20setting&width=100&height=100&seq=student-avatar-002&orientation=squarish"
                />
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-800">
                    Nguyễn Văn An
                  </p>
                  <p className="text-xs text-gray-500">Sinh viên</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Tổng số lớp học</p>
                  <p className="text-2xl font-bold text-gray-800">8</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BookOutlined className="text-blue-600 text-xl" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Buổi học hôm nay</p>
                  <p className="text-2xl font-bold text-gray-800">3</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CalendarOutlined className="text-green-600 text-xl" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Tỷ lệ điểm danh</p>
                  <p className="text-2xl font-bold text-gray-800">95%</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <CheckCircleOutlined className="text-yellow-600 text-xl" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Thông báo mới</p>
                  <p className="text-2xl font-bold text-gray-800">5</p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <BellOutlined className="text-red-600 text-xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activities & Schedule */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Lịch học hôm nay */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800">
                  Lịch học hôm nay
                </h3>
                <p className="text-sm text-gray-600">
                  Thứ Hai, 25 tháng 8, 2025
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">08:00</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">
                        Lập trình Web
                      </h4>
                      <p className="text-sm text-gray-600">
                        Phòng A101 - TS. Nguyễn Văn B
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      Sắp diễn ra
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">10:00</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">
                        Cơ sở dữ liệu
                      </h4>
                      <p className="text-sm text-gray-600">
                        Phòng B205 - ThS. Trần Thị C
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      Đã kết thúc
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">14:00</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">
                        Mạng máy tính
                      </h4>
                      <p className="text-sm text-gray-600">
                        Phòng C301 - PGS. Lê Văn D
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                      Đang diễn ra
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Thông báo mới */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800">
                  Thông báo mới
                </h3>
                <p className="text-sm text-gray-600">Cập nhật mới nhất</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 mb-1">
                        Thay đổi lịch học môn Lập trình Web
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Buổi học ngày 26/8 chuyển từ phòng A101 sang phòng B203
                      </p>
                      <span className="text-xs text-gray-500">2 giờ trước</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 mb-1">
                        Nộp bài tập lớn môn Cơ sở dữ liệu
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Hạn chót nộp bài: 30/8/2025 - 23:59
                      </p>
                      <span className="text-xs text-gray-500">
                        1 ngày trước
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800 mb-1">
                        Kết quả kiểm tra giữa kỳ
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Điểm kiểm tra giữa kỳ môn Mạng máy tính đã được cập nhật
                      </p>
                      <span className="text-xs text-gray-500">
                        2 ngày trước
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
