import React from 'react'
import { logoutUser } from '../../common/services/authService';
interface FooterProps {
    collapsed: boolean;
}
const Footer: React.FC<FooterProps> = ({collapsed}) => {
  return (
    <>
          {!collapsed && (
        <div className="p-4 border-t border-gray-100">
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-2">
              <i className="fas fa-headset text-blue-600"></i>
            </div>
            <button onClick={logoutUser} className="w-full bg-blue-600 text-white text-xs py-2 px-3 rounded-md hover:bg-blue-700">
              Đăng suất!
            </button>
          </div>
        </div>
      )}</>
  )
}

export default Footer