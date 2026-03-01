import {
  HiHome,
  HiOutlineOfficeBuilding,
  HiOutlineNewspaper,
  HiOutlineUserCircle,
  HiOutlineLogin,
  HiOutlineUsers,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/home", icon: HiHome },
  { label: "Services", path: "/services", icon: HiOutlineOfficeBuilding },
  { label: "News", path: "/news", icon: HiOutlineNewspaper },
  { label: "Account", path: "/account", icon: HiOutlineUserCircle },
];

const NavigationBar = () => {
  return (
    <nav className="mt-2 grid grid-cols-4 gap-1 rounded-2xl bg-slate-900/90 border border-slate-800/90 px-2 py-2 text-[10px] sm:text-xs text-slate-300 shadow-lg shadow-slate-950/60">
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink key={item.path} to={item.path}>
            {({ isActive }) => (
              <div
                className={`flex flex-col items-center gap-1 py-1.5 rounded-xl transition-colors ${
                  isActive
                    ? "bg-emerald-500/15 text-emerald-300"
                    : "text-slate-400 hover:bg-slate-800/80 hover:text-slate-100"
                }`}
              >
                <span
                  className={`inline-flex items-center justify-center rounded-full h-6 w-6 text-base ${
                    isActive
                      ? "bg-emerald-500/80 text-slate-950"
                      : "bg-slate-800"
                  }`}
                >
                  <Icon />
                </span>
                <span className="leading-none">{item.label}</span>
              </div>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default NavigationBar;
