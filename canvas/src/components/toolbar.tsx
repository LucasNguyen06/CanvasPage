
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Type, MousePointer, Pencil, Eraser, Hand } from "lucide-react";
import { Tool, DrawingSettings } from "@/pages/Index";

interface ToolbarProps {
  activeTool: Tool;
  onToolChange: (tool: Tool) => void;
  drawingSettings: DrawingSettings;
  onDrawingSettingsChange: (settings: DrawingSettings) => void;
  darkMode: boolean;
}

const colors = [
  "#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", 
  "#FF00FF", "#00FFFF", "#FFA500", "#800080", "#FFC0CB"
];

const Toolbar = ({ activeTool, onToolChange, drawingSettings, onDrawingSettingsChange, darkMode }: ToolbarProps) => {
  const [isDrawingSettingsOpen, setIsDrawingSettingsOpen] = useState(false);

  const handleColorChange = (color: string) => {
    onDrawingSettingsChange({ ...drawingSettings, color });
    console.log("Color changed to:", color);
  };

  const handleSizeChange = (size: number[]) => {
    onDrawingSettingsChange({ ...drawingSettings, size: size[0] });
    console.log("Brush size changed to:", size[0]);
  };

  const handlePressureChange = (pressure: number[]) => {
    onDrawingSettingsChange({ ...drawingSettings, pressure: pressure[0] });
    console.log("Brush pressure changed to:", pressure[0]);
  };

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-border rounded-lg p-1 shadow-lg">
      
      {/* Selection Tool */}
      <Button
        variant={activeTool === "select" ? "default" : "ghost"}
        size="sm"
        className="h-7 w-7 p-0"
        onClick={() => onToolChange("select")}
      >
        <MousePointer className="w-3 h-3" />
      </Button>

      {/* Pan Tool */}
      <Button
        variant={activeTool === "pan" ? "default" : "ghost"}
        size="sm"
        className="h-7 w-7 p-0"
        onClick={() => onToolChange("pan")}
      >
        <Hand className="w-3 h-3" />
      </Button>

      {/* Pencil Tool with Settings */}
      <Popover open={isDrawingSettingsOpen} onOpenChange={setIsDrawingSettingsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={activeTool === "pencil" ? "default" : "ghost"}
            size="sm"
            className="h-7 w-7 p-0"
            onClick={() => {
              onToolChange("pencil");
              setIsDrawingSettingsOpen(true);
            }}
          >
            <Pencil className="w-3 h-3" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-4">
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium mb-2 block">Color</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => handleColorChange(color)}
                    className="w-6 h-6 rounded border-2 border-gray-300 hover:scale-110 transition-transform"
                    style={{ 
                      backgroundColor: color,
                      borderColor: drawingSettings.color === color ? "#000" : "#ccc"
                    }}
                  />
                ))}
              </div>
              <Input
                type="text"
                placeholder="#000000"
                value={drawingSettings.color}
                onChange={(e) => handleColorChange(e.target.value)}
                className="text-sm"
              />
            </div>
            
            <div>
              <Label className="text-sm font-medium mb-2 block">
                Brush Size: {drawingSettings.size}px
              </Label>
              <Slider
                value={[drawingSettings.size]}
                onValueChange={handleSizeChange}
                max={20}
                min={1}
                step={1}
                className="w-full [&_.slider-thumb]:bg-gray-500 [&_.slider-track]:bg-gray-200 [&_.slider-range]:bg-gray-400"
              />
            </div>

            <div>
              <Label className="text-sm font-medium mb-2 block">
                Pressure: {Math.round(drawingSettings.pressure * 100)}%
              </Label>
              <Slider
                value={[drawingSettings.pressure]}
                onValueChange={handlePressureChange}
                max={2}
                min={0.1}
                step={0.1}
                className="w-full [&_.slider-thumb]:bg-gray-500 [&_.slider-track]:bg-gray-200 [&_.slider-range]:bg-gray-400"
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {/* Eraser Tool */}
      <Button
        variant={activeTool === "eraser" ? "default" : "ghost"}
        size="sm"
        className="h-7 w-7 p-0"
        onClick={() => onToolChange("eraser")}
      >
        <Eraser className="w-3 h-3" />
      </Button>

      {/* Text Tool */}
      <Button
        variant={activeTool === "text" ? "default" : "ghost"}
        size="sm"
        className="h-7 w-7 p-0"
        onClick={() => onToolChange("text")}
      >
        <Type className="w-3 h-3" />
      </Button>
    </div>
  );
};

export default Toolbar;
    