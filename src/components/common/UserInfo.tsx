import React, { useEffect, useState } from 'react';

interface UserInfoProps {
    collapsed: boolean;
}
interface User {
    fullname: string;
    username: string;
    status: string;
    role: string;
    email: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ collapsed }) => {
  const [ user, setUser ] = useState<User | null>(null);
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (error) {
        console.log(error);
        
      }
    }
  }, []);
  if (!user) {
    return null; // Hoặc hiển thị một trạng thái tải hoặc thông báo lỗi
  }
  return (
         <div className="p-6 border-b border-gray-100 flex items-center space-x-3">
        {!collapsed && (
          <div>
            <h3 className="font-semibold text-gray-800">{user.fullname}</h3>
            <p className="text-sm text-gray-500">{user.username}</p>
            <div className="flex items-center mt-1">
              <span className="text-xs text-gray-500">{user.email}</span>
            </div>
          </div>
        )}
      </div>
  )
}

export default UserInfo