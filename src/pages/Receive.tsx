import { ArrowLeft, Copy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import QRCode from "react-qr-code";
import Header from "@/components/Header";

const Receive = () => {
  const navigate = useNavigate();
  const userId = "USER12345"; // Mock user ID

  const handleCopyId = () => {
    navigator.clipboard.writeText(userId);
    toast({
      title: "Copied!",
      description: "User ID copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="p-6">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Receive Money</h1>
        </div>

        <div className="bg-card rounded-3xl p-8 shadow-card mb-4 animate-fade-in text-center">
          <p className="text-muted-foreground mb-6">
            Share this QR code to receive money
          </p>
          
          <div className="bg-white p-6 rounded-2xl inline-block mb-6">
            <QRCode
              value={userId}
              size={200}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            />
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Your User ID</p>
              <div className="flex items-center gap-2 bg-secondary rounded-xl p-4">
                <code className="flex-1 text-lg font-mono font-semibold">
                  {userId}
                </code>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handleCopyId}
                  className="shrink-0"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-3xl p-6 shadow-card animate-fade-in">
          <p className="text-center text-sm text-muted-foreground">
            Anyone can scan this QR code or use your User ID to send you money instantly
          </p>
        </div>
      </div>
    </div>
  );
};

export default Receive;
