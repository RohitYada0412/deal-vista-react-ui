
import { List } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

const DealSummary = ({ totalDeals, totalRevenue }) => {
  return (
    <div className="flex items-center gap-6 mb-4 text-sm text-crm-medium-text">
      <div className="flex items-center gap-2">
        <List className="h-4 w-4" />
        <span>Pipeline</span>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded bg-crm-blue"></div>
        <span>List</span>
      </div>
      
      <div>
        Total Deals: <span className="font-medium">{totalDeals}</span>
      </div>
      
      <div>
        Total Revenue in Pipeline: <span className="font-medium">{formatCurrency(totalRevenue)}</span>
      </div>
    </div>
  );
};

export default DealSummary;
