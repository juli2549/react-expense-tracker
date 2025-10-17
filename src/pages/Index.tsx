// Update this page (the content is just a fallback if you fail to update the page)

import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100" data-testid="index-page">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4" data-testid="index-title">Welcome to Expense Tracker</h1>
        <p className="text-xl text-gray-600 mb-6" data-testid="index-description">
          Track your expenses and manage your budget
        </p>
        <Link to="/login">
          <Button size="lg" data-testid="get-started-button">Get Started</Button>
        </Link>
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;