import { Badge } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router';

interface MenuItem {
    key: string;
    label: string;
    icon: React.ReactNode;
    path: string;
    badge: number;
}

interface SidebarMenuProps {
    activeMenu: string;
    collapsed: boolean;
    menuItems: MenuItem[];
    setActiveMenu: (key: string) => void;
}
const Menu: React.FunctionComponent <SidebarMenuProps> = ({
    activeMenu, collapsed, menuItems, setActiveMenu 
}) => {
    const navigate = useNavigate();
  return (
         <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.key}>
              <button
                onClick={() => {
                  setActiveMenu(item.key);
                  if (item.path) navigate(item.path);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
                  activeMenu === item.key
                    ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item.icon}
                {!collapsed && (
                  <>
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.badge > 0 && <Badge count={item.badge} size="small" />}
                  </>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
  )
}

export default Menu