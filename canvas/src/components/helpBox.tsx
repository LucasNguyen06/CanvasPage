
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

interface HelpBoxProps {
  onOpenHelp: () => void;
}

const HelpBox = ({ onOpenHelp }: HelpBoxProps) => {
  return (
    <div className="absolute bottom-4 right-4">
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-border rounded-lg p-1 shadow-lg">
        <Button
          variant="ghost"
          size="sm"
          className="h-6 w-6 p-0"
          onClick={onOpenHelp}
        >
          <HelpCircle className="w-3 h-3" />
        </Button>
      </div>
    </div>
  );
};

export default HelpBox;
