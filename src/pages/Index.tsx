import { Wallet, Send, Download, History, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();
  const [showBalance, setShowBalance] = useState(true);
  const balance = 1234.56; // Mock balance

  const quickActions = [
    {
      icon: Send,
      label: "Send",
      path: "/send",
      gradient: "from-primary to-accent",
    },
    {
      icon: Download,
      label: "Receive",
      path: "/receive",
      gradient: "from-success to-accent",
    },
    {
      icon: History,
      label: "History",
      path: "/history",
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="p-6 pb-0">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
              <Wallet className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">My Wallet</h1>
              <p className="text-sm text-muted-foreground">USER12345</p>
            </div>
          </div>
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-primary rounded-3xl p-8 shadow-glow mb-6 animate-fade-in relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <p className="text-white/80 text-sm font-medium">Total Balance</p>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowBalance(!showBalance)}
                className="h-8 w-8 text-white hover:bg-white/20"
              >
                {showBalance ? (
                  <Eye className="h-4 w-4" />
                ) : (
                  <EyeOff className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-5xl font-bold text-white mb-6">
              {showBalance ? `$${balance.toFixed(2)}` : "••••••"}
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Active</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-3 gap-3">
            {quickActions.map((action, index) => (
              <button
                key={action.label}
                onClick={() => navigate(action.path)}
                className="bg-card rounded-2xl p-4 shadow-card hover:bg-secondary transition-all animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center mx-auto mb-3`}
                >
                  <action.icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-sm font-medium">{action.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Transactions</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/history")}
              className="text-primary"
            >
              See All
            </Button>
          </div>

          <div className="space-y-3 pb-6">
            {[
              { user: "USER98765", amount: -50.0, date: "Today" },
              { user: "USER54321", amount: 120.0, date: "Yesterday" },
              { user: "USER11111", amount: -25.5, date: "Oct 1" },
            ].map((transaction, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-4 shadow-card flex items-center justify-between animate-fade-in hover:bg-secondary transition-colors cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => navigate("/history")}
              >
                <div>
                  <p className="font-semibold mb-1">
                    {transaction.amount > 0 ? "Received from" : "Sent to"}
                  </p>
                  <p className="text-sm text-muted-foreground font-mono">
                    {transaction.user}
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className={`font-bold text-lg ${
                      transaction.amount > 0 ? "text-success" : "text-foreground"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : ""}$
                    {Math.abs(transaction.amount).toFixed(2)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {transaction.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
