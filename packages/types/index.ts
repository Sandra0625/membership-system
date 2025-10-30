export type Plan = {
  id: string;
  title: string;
  price: number;
  description?: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  planId?: string;
};
