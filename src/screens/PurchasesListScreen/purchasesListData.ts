export type PurchaseListItem = {
  id: string;
  purchaseNumber: string;
  customerName: string;
  contactMasked: string;
  date: Date;
  amount: number;
  balance: number;
  status: 'paid';
};

export const MOCK_PURCHASES: PurchaseListItem[] = [
  {
    id: '1',
    purchaseNumber: '450',
    customerName: 'Jhone Doe',
    contactMasked: '91XXXXXXXXXX',
    date: new Date(2025, 1, 20),
    amount: 0,
    balance: 0,
    status: 'paid',
  },
  {
    id: '2',
    purchaseNumber: '450',
    customerName: 'Jhone Doe',
    contactMasked: '91XXXXXXXXXX',
    date: new Date(2025, 1, 20),
    amount: 0,
    balance: 0,
    status: 'paid',
  },
  {
    id: '3',
    purchaseNumber: '450',
    customerName: 'Jhone Doe',
    contactMasked: '91XXXXXXXXXX',
    date: new Date(2025, 1, 20),
    amount: 0,
    balance: 0,
    status: 'paid',
  },
];
