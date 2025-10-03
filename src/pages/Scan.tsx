import { useState } from "react";
import { ArrowLeft, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Scan = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");

  const handleScanAndSend = () => {
    if (!amount) {
      toast({
        title: "Missing Amount",
        description: "Please enter the amount to send",
        variant: "destructive",
      });
      return;
    }

    // Simulate QR scan success
    toast({
      title: "QR Scanned! 🎉",
      description: `$${amount} ready to send`,
    });
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-md mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/send")}
            className="rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Scan QR Code</h1>
        </div>

        <div className="bg-card rounded-3xl p-6 shadow-card mb-4 animate-fade-in">
          <div className="aspect-square bg-secondary rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            <div className="text-center z-10">
              <Camera className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">
                QR Scanner will appear here
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                (Demo mode - Scanner not available)
              </p>
            </div>
            
            {/* Scanning frame animation */}
            <div className="absolute inset-8 border-2 border-primary rounded-2xl"></div>
            <div className="absolute top-8 left-8 w-6 h-6 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
            <div className="absolute top-8 right-8 w-6 h-6 border-t-4 border-r-4 border-primary rounded-tr-lg"></div>
            <div className="absolute bottom-8 left-8 w-6 h-6 border-b-4 border-l-4 border-primary rounded-bl-lg"></div>
            <div className="absolute bottom-8 right-8 w-6 h-6 border-b-4 border-r-4 border-primary rounded-br-lg"></div>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="amount" className="text-muted-foreground">
                Amount to Send
              </Label>
              <div className="relative mt-2">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold">
                  $
                </span>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="h-16 pl-10 text-2xl font-bold bg-secondary border-0"
                />
              </div>
            </div>

            <Button
              onClick={handleScanAndSend}
              className="w-full h-14 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              <Camera className="mr-2 h-5 w-5" />
              Scan & Send
            </Button>
          </div>
        </div>

        <div className="bg-card rounded-3xl p-6 shadow-card animate-fade-in">
          <p className="text-center text-sm text-muted-foreground">
            Position the QR code within the frame to scan
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scan;
