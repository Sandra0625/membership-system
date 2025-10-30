import { Plan, User } from "@membership/types";

export const mockPlans: Plan[] = [
  { id: "1", title: "Plan Básico", price: 10000, description: "Acceso limitado a contenido" },
  { id: "2", title: "Plan Premium", price: 25000, description: "Acceso completo a todas las funciones" },
];

export const mockUsers: User[] = [
  { id: "1", name: "María López", email: "maria@example.com", isActive: true, planId: "2" },
  { id: "2", name: "Carlos Ruiz", email: "carlos@example.com", isActive: false },
];

export const getPlans = async (): Promise<Plan[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(mockPlans), 500));
};

export const getUsers = async (): Promise<User[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(mockUsers), 500));
};
