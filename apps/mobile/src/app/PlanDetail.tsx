import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { getPlans } from "@membership/core";
import type { Plan } from "@membership/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "PlanDetail">;

export default function PlanDetail({ route }: Props) {
  const { id } = route.params;
  const [plan, setPlan] = useState<Plan | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const plans = await getPlans();
      const found = plans.find((p) => p.id === id) || null;
      setPlan(found);
    };
    fetchData();
  }, [id]);

  if (!plan) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text>Cargando información...</Text>
      </View>
    );
  }

  const handleSubscribe = () => {
    Alert.alert("Suscripción exitosa", `Te has suscrito al ${plan.title}.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{plan.title}</Text>
      <Text style={styles.price}>${plan.price.toLocaleString()}</Text>
      <Text style={styles.description}>{plan.description}</Text>

      <TouchableOpacity style={styles.button} onPress={handleSubscribe}>
        <Text style={styles.buttonText}>Suscribirme</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8fafc",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#111827",
  },
  price: {
    fontSize: 20,
    color: "#2563eb",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#374151",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
