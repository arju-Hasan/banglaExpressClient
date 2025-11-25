import { FastForward, House, Send, Settings, SlidersHorizontal, SquareArrowLeft, SquareArrowRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, Links, NavLink, Outlet } from 'react-router';

const DashboardLayout = () => {
   const [isOpen, setIsOpen] = useState(false);

  // Checkbox change detect
  useEffect(() => {
    const drawer = document.getElementById("my-drawer-4");

    const handleChange = () => {
      setIsOpen(drawer.checked);
    };

    drawer.addEventListener("change", handleChange);

    return () => drawer.removeEventListener("change", handleChange);
  }, []);

    return (
        <div>
            <div className="drawer md:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300">
                <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost text-primary">
                    {isOpen ? <SquareArrowLeft /> : <SquareArrowRight />}
                </label>
                <div className="px-4 text-2xl font-bold">
                    <span className="text-rotate">
                    <span>
                        <span>Dashboard</span>
                        <span>Bangla Express</span>
                        <span>Dashboard</span>
                        <span>Bangla Express</span>
                    </span>
                    </span>
                    </div>
                </nav>
                {/* Page content here */}

                <Outlet></Outlet>

                
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                {/* Sidebar content here */}
                <ul className="menu w-full grow">
                    {/* List item */}
                    <li>
                    <Link to="/" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                        {/* Home icon */}
                        <House className='my-0 text-primary' />
                        <span className="is-drawer-close:hidden">Homepage</span>
                    </Link>
                    </li>

                    {/* List item */}
                    <li>
                        <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" to='/dashboard/my-parcles' data-tip="MyParchles">
                        <Send className='my-2 text-primary' />
                        <span className="is-drawer-close:hidden">My-Parchles</span>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to='/dashboard/setting' className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                        {/* Settings icon */}
                        <Settings className='my-2 text-primary' />
                        <span className="is-drawer-close:hidden">Settings</span>
                    </NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
