import React from "react";
import Breadcrumb from "./BreadCrumbs";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center sticky top-0">
      <Breadcrumb />
    </header>
  );
};

export default Header;
