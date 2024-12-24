import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <Card className="w-full max-w-2xl p-8 text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to Multi-Step Form
        </h1>
        <p className="text-lg text-muted-foreground">
          A collaborative form experience with real-time updates
        </p>
        <div>
          <Link href="/form">
            <Button size="lg">
              Start Form
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}