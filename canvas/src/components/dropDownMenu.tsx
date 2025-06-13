
import { User, Moon, Sun, Share, LogOut, RotateCcw, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onToggleDarkMode: () => void;
  onOpenHelp: () => void;
  darkMode: boolean;
}

const DropdownMenu = ({ isOpen, onClose, onToggleDarkMode, onOpenHelp, darkMode }: DropdownMenuProps) => {
  if (!isOpen) return null;

  const handleMenuAction = (action: string) => {
    switch (action) {
      case "profile":
        toast.info("Profile feature coming soon!");
        break;
      case "share":
        toast.info("Share feature coming soon!");
        break;
      case "signout":
        toast.info("Sign out feature coming soon!");
        break;
      case "reset":
        if ((window as any).clearCanvas) {
          (window as any).clearCanvas();
        }
        break;
      case "help":
        onOpenHelp();
        break;
    }
    onClose();
  };

  const handleDarkModeToggle = () => {
    onToggleDarkMode();
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose}
      />
      
      {/* Menu */}
      <div className="fixed top-24 right-4 z-50 w-56 bg-white dark:bg-gray-900 border border-border rounded-xl shadow-xl p-2 animate-scale-in">
        <div className="space-y-1">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3"
            onClick={() => handleMenuAction("profile")}
          >
            <User className="w-4 h-4" />
            View Profile
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start gap-3"
            onClick={handleDarkModeToggle}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start gap-3"
            onClick={() => handleMenuAction("help")}
          >
            <HelpCircle className="w-4 h-4" />
            Help & Shortcuts
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start gap-3"
            onClick={() => handleMenuAction("reset")}
          >
            <RotateCcw className="w-4 h-4" />
            Reset Canvas
          </Button>
          
          <Button
            variant="ghost"
            className="w-full justify-start gap-3"
            onClick={() => handleMenuAction("share")}
          >
            <Share className="w-4 h-4" />
            Share Workspace
          </Button>
          
          <div className="border-t border-border my-2" />
          
          <Button
            variant="ghost"
            className="w-full justify-start gap-3"
            onClick={() => handleMenuAction("signout")}
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>
      </div>
    </>
  );
};

export default DropdownMenu;
