
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

export function groupDealsByStatus(deals: any[]) {
  const groups: Record<string, any[]> = {};
  
  for (const deal of deals) {
    if (!groups[deal.status]) {
      groups[deal.status] = [];
    }
    groups[deal.status].push(deal);
  }
  
  return groups;
}

export function calculateGroupTotal(deals: any[]): number {
  return deals.reduce((sum, deal) => sum + deal.dealBudget, 0);
}

export function filterDeals(deals: any[], filters: {
  search?: string;
  startDate?: string;
  endDate?: string;
  activeOnly?: boolean;
  tab?: string;
}) {
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
