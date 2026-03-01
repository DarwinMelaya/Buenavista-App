import {
  HiHome,
  HiOutlineOfficeBuilding,
  HiOutlineNewspaper,
  HiOutlineBell,
  HiOutlineUserCircle,
} from "react-icons/hi";

const navItems = [
  { label: "Home", icon: HiHome, active: true },
  { label: "Services", icon: HiOutlineOfficeBuilding },
  { label: "News", icon: HiOutlineNewspaper },
  { label: "Emergency", icon: HiOutlineBell },
  { label: "Account", icon: HiOutlineUserCircle },
];

const NavigationBar = () => {
  return (
    <nav className="mt-2 grid grid-cols-5 gap-1 rounded-2xl bg-slate-900/90 border border-slate-800/90 px-2 py-2 text-[10px] sm:text-xs text-slate-300 shadow-lg shadow-slate-950/60">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = item.active;

        return (
          <button
            key={item.label}
            type="button"
            className={`flex flex-col items-center gap-1 py-1.5 rounded-xl transition-colors ${
              isActive
                ? "bg-emerald-500/15 text-emerald-300"
                : "text-slate-400 hover:bg-slate-800/80 hover:text-slate-100"
            }`}
          >
            <span
              className={`inline-flex items-center justify-center rounded-full h-6 w-6 text-base ${
                isActive ? "bg-emerald-500/80 text-slate-950" : "bg-slate-800"
              }`}
            >
              <Icon />
            </span>
            <span className="leading-none">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default NavigationBar;
