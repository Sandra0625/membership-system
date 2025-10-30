import React from "react";

type ButtonProps = {
  label: string;
  onPress?: () => void;
};

export const PrimaryButton: React.FC<ButtonProps> = ({ label, onPress }) => {
  return (
    <button
      onClick={onPress}
      style={{
        backgroundColor: "#2563eb",
        color: "white",
        borderRadius: 8,
        padding: "10px 20px",
        fontSize: 16,
        border: "none",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};
