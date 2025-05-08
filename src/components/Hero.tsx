
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-10">
      <div className="mb-8 lg:mb-0">
        <div className="text-sm text-crm-medium-text mb-2">Welcome!</div>
        <h1 className="text-4xl font-bold">
          Manage your <span className="text-crm-blue">Deals</span>
        </h1>
        <div className="mt-4">
          <Button className="bg-crm-blue hover:bg-crm-blue/90 text-white">
            Get Started
          </Button>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2">
        <img 
          src="/lovable-uploads/14422510-e96a-4ff0-b13a-bd7b5e0d39d1.png" 
          alt="Office team working" 
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
