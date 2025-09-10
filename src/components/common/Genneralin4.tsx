import React from "react";
import { BookOutlined, CalendarOutlined, CheckCircleOutlined, BellOutlined } from "@ant-design/icons";

const Genneralin4: React.FC = () => {
  const items = [
    { label: "Tổng số lớp học", value: "8", icon: <BookOutlined />, color: "blue" },
    { label: "Buổi học hôm nay", value: "3", icon: <CalendarOutlined />, color: "green" },
    { label: "Tỷ lệ điểm danh", value: "95%", icon: <CheckCircleOutlined />, color: "yellow" },
    { label: "Thông báo mới", value: "5", icon: <BellOutlined />, color: "red" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {items.map((item, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-sm p-6 border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{item.label}</p>
              <p className="text-2xl font-bold text-gray-800">{item.value}</p>
            </div>
            <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center`}>
              <span className={`text-${item.color}-600 text-xl`}>{item.icon}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Genneralin4;
