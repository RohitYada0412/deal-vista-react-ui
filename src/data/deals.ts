
export type DealStatus = 
  | 'Negotiating'
  | 'Kickedback'
  | 'Approved'
  | 'Closed'
  | 'Lost';

export interface Deal {
  id: string;
  clientName: string;
  clientCompany: string;
  clientInitials: string;
  dealName: string;
  dealBudget: number;
  status: DealStatus;
  assignee: {
    name: string;
    initials: string;
  };
}

// Sample dummy data for the deals
export const deals: Deal[] = [
  {
    id: '1',
    clientName: 'Chandan Kalita',
    clientCompany: 'Chandan',
    clientInitials: 'CK',
    dealName: 'Chandan Deal',
    dealBudget: 5000,
    status: 'Negotiating',
    assignee: {
      name: 'Michael Speed',
      initials: 'MS'
    }
  },
  {
    id: '2',
    clientName: 'Michael Speed',
    clientCompany: 'michael',
    clientInitials: 'MS',
    dealName: 'some deal 4',
    dealBudget: 7000,
    status: 'Negotiating',
    assignee: {
      name: 'Michael Speed',
      initials: 'MS'
    }
  },
  {
    id: '3',
    clientName: 'Sarah Johnson',
    clientCompany: 'Johnson & Co',
    clientInitials: 'SJ',
    dealName: 'Johnson Project',
    dealBudget: 50000,
    status: 'Kickedback',
    assignee: {
      name: 'Michael Speed',
      initials: 'MS'
    }
  },
  {
    id: '4',
    clientName: 'Terry Miller',
    clientCompany: 'Miller Tech',
    clientInitials: 'TM',
    dealName: 'Tech Upgrade',
    dealBudget: 25000,
    status: 'Negotiating',
    assignee: {
      name: 'John Doe',
      initials: 'JD'
    }
  },
  {
    id: '5',
    clientName: 'Lisa Wang',
    clientCompany: 'Wang Industries',
    clientInitials: 'LW',
    dealName: 'Software License',
    dealBudget: 15500,
    status: 'Negotiating',
    assignee: {
      name: 'Jane Smith',
      initials: 'JS'
    }
  },
  {
    id: '6',
    clientName: 'Mark Rodriguez',
    clientCompany: 'R&R Associates',
    clientInitials: 'MR',
    dealName: 'Office Expansion',
    dealBudget: 120000,
    status: 'Approved',
    assignee: {
      name: 'Michael Speed',
      initials: 'MS'
    }
  }
];
