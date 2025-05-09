
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import DealCard from "@/components/DealCard";

const DealGroup = ({ title, count, totalValue, deals }) => {
  const [isOpen, setIsOpen] = useState(true);
  
  const formattedTotalValue = new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(totalValue);
  
  return (
    <div className="mb-2">
      <div 
        className="flex items-center bg-white border border-gray-200 rounded-md px-4 py-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <button className="mr-2">
          {isOpen ? (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          )}
        </button>
        <span className="font-medium">{title}</span>
        <span className="ml-2 px-2 py-1 bg-gray-100 rounded-full text-sm">{count}</span>
        <span className="ml-auto text-gray-500">{formattedTotalValue}</span>
      </div>
      
      {isOpen && (
        <div className="bg-white border border-gray-200 border-t-0 rounded-b-md overflow-hidden">
          {deals.map(deal => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DealGroup;
