
import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const DealFilters = ({ onSearch, onDateFilter, onActiveDealsOnly, onClear }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [activeDealsOnly, setActiveDealsOnly] = useState(false);
  
  const handleSearch = () => {
    onSearch(searchQuery);
  };
  
  const handleDateFilter = () => {
    onDateFilter(startDate, endDate);
  };
  
  const handleActiveDealsToggle = () => {
    const newValue = !activeDealsOnly;
    setActiveDealsOnly(newValue);
    onActiveDealsOnly(newValue);
  };
  
  const handleClear = () => {
    setSearchQuery("");
    setStartDate("");
    setEndDate("");
    setActiveDealsOnly(false);
    onClear();
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col md:flex-row gap-4">
      <div className="relative flex-grow">
        <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          className="pl-9 pr-4 py-2"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex gap-2">
          <Input
            type="date"
            className="w-32 px-2 py-2"
            placeholder="From"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <span className="flex items-center text-gray-400">to</span>
          <Input
            type="date"
            className="w-32 px-2 py-2"
            placeholder="To"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline"
            size="sm"
            className={activeDealsOnly ? "bg-crm-blue text-white" : ""}
            onClick={handleActiveDealsToggle}
          >
            Active Deals
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleClear}
            className="text-red-500 hover:text-red-700 flex items-center gap-1"
          >
            <X className="h-4 w-4" /> clear
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DealFilters;
