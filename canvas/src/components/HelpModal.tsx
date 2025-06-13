
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HelpModal = ({ isOpen, onClose }: HelpModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold mb-4">Canvas Shortcuts & Tools</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3 text-foreground">Keyboard Shortcuts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex justify-between">
                <span>Pan Canvas</span>
                <span className="font-mono text-muted-foreground">Middle click + drag</span>
              </div>
              <div className="flex justify-between">
                <span>Pan Canvas</span>
                <span className="font-mono text-muted-foreground">Ctrl + click + drag</span>
              </div>
              <div className="flex justify-between">
                <span>Zoom</span>
                <span className="font-mono text-muted-foreground">Ctrl + scroll</span>
              </div>
              <div className="flex justify-between">
                <span>Pan Mode</span>
                <span className="font-mono text-muted-foreground">Spacebar (hold)</span>
              </div>
              <div className="flex justify-between">
                <span>Undo</span>
                <span className="font-mono text-muted-foreground">Ctrl + Z</span>
              </div>
              <div className="flex justify-between">
                <span>Redo</span>
                <span className="font-mono text-muted-foreground">Ctrl + Y</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-foreground">Tools</h3>
            <div className="space-y-2 text-sm">
              <div><strong>Selection Tool:</strong> Click and drag to select and move elements. Resize using corner handles.</div>
              <div><strong>Pan Tool:</strong> Click and drag to move the canvas view without selecting elements.</div>
              <div><strong>Pencil Tool:</strong> Draw freehand. Adjust color, size, and pressure in the tool settings.</div>
              <div><strong>Eraser Tool:</strong> Click or drag over elements to remove them. Visual indicator shows erase area.</div>
              <div><strong>Text Tool:</strong> Click anywhere to start typing. Text auto-resizes and supports paragraphs.</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-foreground">Tips</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>• Use the zoom controls in the bottom-left to get closer to your work</div>
              <div>• Selected elements show bounding boxes with resize handles</div>
              <div>• All actions can be undone/redone using the history controls</div>
              <div>• Switch between light and dark mode using the dropdown menu</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HelpModal;
