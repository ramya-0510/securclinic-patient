export interface BillingPatient {
  id: string;
  name: string;
  phone: string;
  uhid?: string;
  email?: string;
  lastVisit?: string;
}

export interface BillItem {
  name: string;
  price: number;
  qty: number;
}

export interface Bill {
  id: string;
  invoiceId: string;
  date: string;
  doctor: string;
  treatment: string;
  totalAmount: number;
  status: "Paid" | "Pending" | "Cancelled";
  items?: BillItem[];
}