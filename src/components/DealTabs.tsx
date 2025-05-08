
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface DealTabsProps {
  onTabChange: (tabId: string) => void;
}

const DealTabs: React.FC<DealTabsProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState<string>("my-deals");
  
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange(tabId);
  };
  
  return (
    <div className="flex border-b border-crm-border-light mb-4">
      <Button
        variant="ghost"
        className={`rounded-none border-b-2 px-4 py-2 ${
          activeTab === "my-deals" ? 
            "border-crm-blue text-crm-blue" : 
            "border-transparent text-crm-medium-text"
        }`}
        onClick={() => handleTabChange("my-deals")}
      >
        My Deals
      </Button>
      
      <Button
        variant="ghost"
        className={`rounded-none border-b-2 px-4 py-2 ${
          activeTab === "all-clients" ? 
            "border-crm-blue text-crm-blue" : 
            "border-transparent text-crm-medium-text"
        }`}
        onClick={() => handleTabChange("all-clients")}
      >
        All Clients
      </Button>
    </div>
  );
};

export default DealTabs;
