import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x); 
  // Ví dụ: "/category/product/123" => ["category","product","123"]

  return (
    <nav className="text-sm text-gray-600 mb-4">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="hover:underline text-blue-600">
            Trang chủ
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          return (
            <li key={name} className="flex items-center space-x-2">
              <span>/</span>
              {isLast ? (
                <span className="text-gray-500">{name}</span>
              ) : (
                <Link to={routeTo} className="hover:underline text-blue-600">
                  {name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
