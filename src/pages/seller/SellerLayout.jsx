import React from 'react'
import { useAppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';
import { Link, NavLink, Outlet } from 'react-router-dom';

const SellerLayout = () => {
  const { setIsSeller, user } = useAppContext();

  const sidebarLinks = [
    { name: "Add Product", path: "/seller", icon: assets.add_icon },
    { name: "Overview", path: "/seller/product-list", icon: assets.product_list_icon },
    { name: "Chat", path: "/seller/orders", icon: assets.order_icon },
  ];

  const logout = async () => {
    setIsSeller(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white shadow-sm">
        <Link to="/">
          <img className="cursor-pointer w-32 md:w-40" src={assets.logo} alt="logo" />
        </Link>
        <div className="flex items-center gap-5 text-gray-600">
          <p>Hi! {user?.name || "Admin"}</p>
          <button
            onClick={logout}
            className="border rounded-full text-sm px-4 py-1 hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="md:w-64 w-16 border-r border-gray-300 pt-4 flex flex-col h-[calc(100vh-56px)] bg-white">
          {sidebarLinks.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              end={item.path === "/seller"}
              className={({ isActive }) =>
                `flex items-center py-3 px-4 gap-3 
                 ${isActive
                   ? "border-r-4 md:border-r-[6px] bg-primary/10 border-primary text-primary"
                   : "hover:bg-gray-100/90 text-gray-600"}`
              }
            >
              <img src={item.icon} alt="" className="w-7 h-7" />
              <p className="md:block hidden">{item.name}</p>
            </NavLink>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4 md:p-8 bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SellerLayout;
