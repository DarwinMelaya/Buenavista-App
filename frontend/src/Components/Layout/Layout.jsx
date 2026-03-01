import NavigationBar from "./NavigationBar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      {/* Content area gets extra bottom padding so it doesn't hide behind the fixed nav */}
      <div className="flex-1 flex flex-col pb-20 sm:pb-24">{children}</div>

      {/* Global bottom navigation bar - fixed on screen */}
      <div className="fixed inset-x-0 bottom-0 z-40 bg-gradient-to-t from-slate-950 via-slate-950/95 to-slate-950/80 border-t border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 pb-3 pt-2 sm:px-6">
          <NavigationBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
