"use client";

import React, { useEffect, useState } from "react";
import { getPlans, getUsers } from "@membership/core";
import type { Plan, User } from "@membership/types";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [users, setUsers] = useState<User[]>([]);

const router = useRouter();

useEffect(() => {
  const loggedIn = localStorage.getItem("loggedIn");
  if (loggedIn !== "true") {
    router.push("/login");
  }
}, []);

  useEffect(() => {
    const fetchData = async () => {
      const plansData = await getPlans();
      const usersData = await getUsers();
      setPlans(plansData);
      setUsers(usersData);
    };
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Panel de Administración
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Planes</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="p-5 bg-white rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-bold text-gray-900">{plan.title}</h3>
              <p className="text-blue-600 font-semibold mt-2">
                ${plan.price.toLocaleString()}
              </p>
              <p className="text-gray-500 text-sm mt-2">{plan.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Usuarios</h2>
        <table className="w-full bg-white rounded-lg shadow border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3">Nombre</th>
              <th className="text-left p-3">Correo</th>
              <th className="text-left p-3">Activo</th>
              <th className="text-left p-3">Plan</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              const plan = plans.find((p) => p.id === user.planId);
              return (
                <tr key={user.id} className="border-t border-gray-100">
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">
                    {user.isActive ? "✅ Sí" : "❌ No"}
                  </td>
                  <td className="p-3">
                    {plan ? plan.title : "Sin plan"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </main>
  );
}
