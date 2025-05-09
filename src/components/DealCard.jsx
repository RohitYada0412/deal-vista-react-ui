
import { formatCurrency } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MoreHorizontal } from "lucide-react";

const DealCard = ({ deal }) => {
  return (
    <div className="grid grid-cols-[auto_1fr_1fr_1fr_auto] gap-4 items-center py-4 border-b border-crm-border-light hover:bg-gray-50 px-3">
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-gray-300 text-gray-700 text-xs">
            {deal.clientInitials}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium text-sm">{deal.clientName}</div>
          <div className="text-xs text-crm-medium-text">{deal.clientCompany}</div>
        </div>
      </div>
      
      <div>
        <div className="text-sm">{deal.dealName}</div>
      </div>
      
      <div>
        <div className="text-sm">{formatCurrency(deal.dealBudget)}</div>
      </div>
      
      <div className="flex items-center gap-2">
        <Avatar className="h-6 w-6">
          <AvatarFallback className="bg-gray-200 text-gray-700 text-xs">
            {deal.assignee.initials}
          </AvatarFallback>
        </Avatar>
        <div className="text-sm">{deal.assignee.name}</div>
      </div>
      
      <div>
        <button className="p-1 rounded-full hover:bg-gray-200">
          <MoreHorizontal className="h-5 w-5 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default DealCard;
