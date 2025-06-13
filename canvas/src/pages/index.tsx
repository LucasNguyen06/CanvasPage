
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Toolbar from "@/components/Toolbar";
import Canvas from "@/components/Canvas";
import DropdownMenu from "@/components/DropdownMenu";
import HelpModal from "@/components/HelpModal";
import { toast } from "sonner";

export type Tool = "select" | "pan" | "pencil" | "eraser" | "text";

export interface DrawingSettings {
  color: string;
  size: number;
  opacity: number;
  pressure: number;
}

const Index = () => {
  const [activeTool, setActiveTool] = useState<Tool>("select");
  const [darkMode, setDarkMode] = useState(false);
  const [drawingSettings, setDrawingSettings] = useState<DrawingSettings>({
    color: "#000000",
    size: 2,
    opacity: 1,
    pressure: 1,
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    toast.success(darkMode ? "Switched to light mode" : "Switched to dark mode");
  };

  const openHelp = () => {
    setIsHelpOpen(true);
    setIsDropdownOpen(false);
  };

  console.log("App initialized with tool:", activeTool);

  return (
    <div className="min-h-screen bg-background transition-colors duration-200">
      <Header />
      
      <div className="relative">
        {/* Dropdown Menu Button */}
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="fixed top-20 right-4 z-50 w-10 h-10 bg-white/90 dark:bg-gray-800/90 border border-border rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center backdrop-blur-sm"
        >
          <div className="w-4 h-4 flex flex-col justify-between">
            <div className="w-full h-0.5 bg-foreground rounded"></div>
            <div className="w-full h-0.5 bg-foreground rounded"></div>
            <div className="w-full h-0.5 bg-foreground rounded"></div>
          </div>
        </button>
        
        <DropdownMenu 
          isOpen={isDropdownOpen} 
          onClose={() => setIsDropdownOpen(false)}
          onToggleDarkMode={toggleDarkMode}
          onOpenHelp={openHelp}
          darkMode={darkMode}
        />
      </div>

      <Toolbar 
        activeTool={activeTool}
        onToolChange={setActiveTool}
        drawingSettings={drawingSettings}
        onDrawingSettingsChange={setDrawingSettings}
        darkMode={darkMode}
      />
      
      <Canvas 
        activeTool={activeTool}
        drawingSettings={drawingSettings}
        darkMode={darkMode}
        onOpenHelp={openHelp}
      />

      <HelpModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
    </div>
  );
};

export default Index;
