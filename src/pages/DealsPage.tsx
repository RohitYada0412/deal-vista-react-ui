
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DealTabs from "@/components/DealTabs";
import DealFilters from "@/components/DealFilters";
import DealSummary from "@/components/DealSummary";
import DealGroup from "@/components/DealGroup";
import { deals } from "@/data/deals";
import { groupDealsByStatus, calculateGroupTotal, filterDeals } from "@/lib/utils";

const DealsPage = () => {
  const [filteredDeals, setFilteredDeals] = useState(deals);
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [activeDealsOnly, setActiveDealsOnly] = useState(false);
  const [currentTab, setCurrentTab] = useState("my-deals");
  
  // Apply filters whenever filter states change
  useEffect(() => {
    const newFilteredDeals = filterDeals(deals, {
      search: searchQuery,
      startDate,
      endDate,
      activeOnly: activeDealsOnly,
      tab: currentTab
    });
    
    setFilteredDeals(newFilteredDeals);
  }, [searchQuery, startDate, endDate, activeDealsOnly, currentTab]);
  
  // Handle search filter
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  // Handle date filter
  const handleDateFilter = (start: string, end: string) => {
    setStartDate(start);
    setEndDate(end);
  };
  
  // Handle toggle active deals only
  const handleActiveDealsOnly = (active: boolean) => {
    setActiveDealsOnly(active);
  };
  
  // Handle tab change
  const handleTabChange = (tabId: string) => {
    setCurrentTab(tabId);
  };
  
  // Handle clear filters
  const handleClearFilters = () => {
    setSearchQuery("");
    setStartDate("");
    setEndDate("");
    setActiveDealsOnly(false);
  };
  
  // Group deals by status
  const dealGroups = groupDealsByStatus(filteredDeals);
  
  // Calculate total pipeline revenue
  const totalRevenue = calculateGroupTotal(filteredDeals);
  
  return (
    <div className="min-h-screen bg-crm-light-bg">
      <Navbar />
      
      <div className="container max-w-6xl px-4 mx-auto">
        <Hero />
        
        <div className="mt-8">
          <DealTabs onTabChange={handleTabChange} />
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <DealFilters 
              onSearch={handleSearch}
              onDateFilter={handleDateFilter}
              onActiveDealsOnly={handleActiveDealsOnly}
              onClear={handleClearFilters}
            />
            
            <DealSummary 
              totalDeals={filteredDeals.length} 
              totalRevenue={totalRevenue} 
            />
            
            <div className="mt-6">
              {Object.entries(dealGroups).map(([status, dealsInGroup]) => (
                <DealGroup 
                  key={status}
                  title={status}
                  count={dealsInGroup.length}
                  totalValue={calculateGroupTotal(dealsInGroup)}
                  deals={dealsInGroup}
                />
              ))}
              
              {Object.keys(dealGroups).length === 0 && (
                <div className="text-center py-10 text-crm-medium-text">
                  No deals found matching your filters.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsPage;
