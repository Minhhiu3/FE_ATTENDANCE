import React, { useEffect, useState } from "react";
import { Avatar, Input, Select, message } from "antd";
import {
  EditOutlined,
  SaveOutlined,
  CloseOutlined,
  CameraOutlined,
} from "@ant-design/icons";

const { Option } = Select;

interface User {
  fullname: string;
  username: string;
  email: string;
  role: string;
  schoolYear: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

const ProfileContent: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<User | null>(null);
  const [editData, setEditData] = useState<User | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsedUser: User = JSON.parse(userData);
        setProfileData(parsedUser);
        setEditData(parsedUser);
      } catch (error) {
        console.error("Lỗi parse user:", error);
      }
    }
  }, []);

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    if (editData) {
      setProfileData(editData);
      localStorage.setItem("user", JSON.stringify(editData)); // lưu lại thay đổi
      setIsEditing(false);
      message.success("Thông tin cá nhân đã được cập nhật thành công!");
    }
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  const handleInputChange = (field: keyof User, value: string) => {
    setEditData((prev) => (prev ? { ...prev, [field]: value } : prev));
  };

  const handleAvatarUpload = () => {
    message.info("Chức năng tải ảnh đại diện sẽ được triển khai sau.");
  };

  if (!profileData) {
    return (
      <main className="flex-1 p-6">
        <div className="text-center text-gray-500">Đang tải dữ liệu...</div>
      </main>
    );
  }

  return (
    <main className="flex-1 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Profile Overview Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="relative p-8">
            <div className="absolute top-6 right-6">
              {!isEditing ? (
                <button
                  onClick={handleEdit}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <EditOutlined />
                  <span>Chỉnh sửa</span>
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={handleSave}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    <SaveOutlined />
                    <span>Lưu</span>
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                  >
                    <CloseOutlined />
                    <span>Hủy</span>
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-6">
              <div className="relative">
                <Avatar
                  size={120}
                  src="https://readdy.ai/api/search-image?query=professional%20vietnamese%20male%20student%20portrait%20photo%20with%20friendly%20smile%20wearing%20casual%20blue%20shirt%20against%20clean%20white%20background%20modern%20university%20setting%20high%20quality%20headshot&width=200&height=200&seq=student-profile-avatar-001&orientation=squarish"
                  className="border-4 border-white shadow-lg"
                />
                {isEditing && (
                  <button
                    onClick={handleAvatarUpload}
                    className="absolute bottom-0 right-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700"
                  >
                    <CameraOutlined />
                  </button>
                )}
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {isEditing ? editData?.fullname : profileData.fullname}
                </h1>
                <p className="text-lg text-gray-600 mb-2">
                  Mã số sinh viên: {isEditing ? editData?.username : profileData.username}
                </p>
                <p className="text-gray-600 mb-4">
                  Niên khóa: {isEditing ? editData?.schoolYear : profileData.schoolYear}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Thông tin chi tiết
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Họ và tên */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Họ và tên
              </label>
              {isEditing ? (
                <Input
                  value={editData?.fullname}
                  onChange={(e) => handleInputChange("fullname", e.target.value)}
                />
              ) : (
                <div className="p-3 bg-gray-50 rounded-lg text-gray-800">
                  {profileData.fullname}
                </div>
              )}
            </div>

            {/* Tên đăng nhập */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tên đăng nhập
              </label>
              <div className="p-3 bg-gray-50 rounded-lg text-gray-800">
                {profileData.username}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              {isEditing ? (
                <Input
                  value={editData?.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              ) : (
                <div className="p-3 bg-gray-50 rounded-lg text-gray-800">
                  {profileData.email}
                </div>
              )}
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vai trò
              </label>
              <div className="p-3 bg-gray-50 rounded-lg text-gray-800">
                {profileData.role}
              </div>
            </div>

            {/* Ngày tạo */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ngày tạo
              </label>
              <div className="p-3 bg-gray-50 rounded-lg text-gray-800">
                {new Date(profileData.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileContent;
