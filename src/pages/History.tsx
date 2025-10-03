import { ArrowLeft, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const mockTransactions = [
  {
    id: 1,
    type: "sent",
    amount: 50.00,
    user: "USER98765",
    date: "2025-10-03",
    time: "14:30",
  },
  {
    id: 2,
    type: "received",
    amount: 120.00,
    user: "USER54321",
    date: "2025-10-02",
    time: "09:15",
  },
  {
    id: 3,
    type: "sent",
    amount: 25.50,
    user: "USER11111",
    date: "2025-10-01",
    time: "16:45",
  },
  {
    id: 4,
    type: "received",
    amount: 200.00,
    user: "USER22222",
    date: "2025-09-30",
    time: "11:20",
  },
  {
    id: 5,
    type: "sent",
    amount: 75.00,
    user: "USER33333",
    date: "2025-09-29",
    time: "13:00",
  },
];

const History = () => {
  const navigate = useNavigate();

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
          <h1 className="text-2xl font-bold">Transaction History</h1>
        </div>

        <div className="space-y-3">
          {mockTransactions.map((transaction, index) => (
            <div
              key={transaction.id}
              className="bg-card rounded-2xl p-4 shadow-card animate-fade-in hover:bg-secondary transition-colors cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    transaction.type === "received"
                      ? "bg-success/20"
                      : "bg-primary/20"
                  }`}
                >
                  {transaction.type === "received" ? (
                    <ArrowDownLeft className="h-5 w-5 text-success" />
                  ) : (
                    <ArrowUpRight className="h-5 w-5 text-primary" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold">
                      {transaction.type === "received" ? "Received from" : "Sent to"}
                    </p>
                    <p
                      className={`font-bold text-lg ${
                        transaction.type === "received"
                          ? "text-success"
                          : "text-foreground"
                      }`}
                    >
                      {transaction.type === "received" ? "+" : "-"}$
                      {transaction.amount.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <p className="font-mono">{transaction.user}</p>
                    <p>
                      {transaction.date} • {transaction.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
