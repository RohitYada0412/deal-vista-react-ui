
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

export function groupDealsByStatus(deals) {
  const groups = {};
  
  for (const deal of deals) {
    if (!groups[deal.status]) {
      groups[deal.status] = [];
    }
    groups[deal.status].push(deal);
  }
  
  return groups;
}

export function calculateGroupTotal(deals) {
  return deals.reduce((sum, deal) => sum + deal.dealBudget, 0);
}

export function filterDeals(deals, filters) {
  let filtered = [...deals];
  
  // Filter by tab
  if (filters.tab === "my-deals") {
    filtered = filtered.filter(deal => deal.assignee.name === "Michael Speed");
  }
  
  // Filter by search term
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(deal => 
      deal.clientName.toLowerCase().includes(searchLower) || 
      deal.dealName.toLowerCase().includes(searchLower) ||
      deal.clientCompany.toLowerCase().includes(searchLower)
    );
  }
  
  // Filter by active deals
  if (filters.activeOnly) {
    filtered = filtered.filter(deal => 
      deal.status !== "Closed" && deal.status !== "Lost"
    );
  }
  
  // Date range filtering could be added here
  
  return filtered;
}
