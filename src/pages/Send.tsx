import { useState } from "react";
import { ArrowLeft, Scan, Send as SendIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Send = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("");

  const handleSend = () => {
    if (!userId || !amount) {
      toast({
        title: "Missing Information",
        description: "Please enter both user ID and amount",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Money Sent! 🎉",
      description: `$${amount} sent to user ${userId}`,
    });
    
    setUserId("");
    setAmount("");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-md mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Send Money</h1>
        </div>

        <div className="bg-card rounded-3xl p-6 shadow-card mb-4 animate-fade-in">
          <div className="space-y-6">
            <div>
              <Label htmlFor="userId" className="text-muted-foreground">
                User ID or Number
              </Label>
              <Input
                id="userId"
                type="text"
                placeholder="Enter user ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="mt-2 h-12 bg-secondary border-0"
              />
            </div>

            <div>
              <Label htmlFor="amount" className="text-muted-foreground">
                Amount
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
              onClick={handleSend}
              className="w-full h-14 text-lg font-semibold bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              <SendIcon className="mr-2 h-5 w-5" />
              Send Money
            </Button>
          </div>
        </div>

        <div className="bg-card rounded-3xl p-6 shadow-card animate-fade-in">
          <Button
            onClick={() => navigate("/scan")}
            variant="secondary"
            className="w-full h-14 text-lg font-semibold"
          >
            <Scan className="mr-2 h-5 w-5" />
            Scan QR Code
          </Button>
          <p className="text-center text-sm text-muted-foreground mt-3">
            Scan recipient's QR code to send money instantly
          </p>
        </div>
      </div>
    </div>
  );
};

export default Send;
