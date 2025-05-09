
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-crm-light-bg">
      <Navbar />
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="flex items-center justify-center min-h-[70vh]">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4 text-crm-blue">404</h1>
            <p className="text-xl text-crm-medium-text mb-8">Page not found</p>
            <Button className="bg-crm-blue hover:bg-crm-blue/90 text-white">
              <a href="/">Return to Dashboard</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
