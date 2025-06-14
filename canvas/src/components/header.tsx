
import { Palette } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full h-16 gradient-primary shadow-lg relative z-40">
      <div className="h-full flex items-center px-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
            <Palette className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Quotable</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
