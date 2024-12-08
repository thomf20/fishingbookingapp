import React from "react";

interface NotificationProps {
  message: string;
  type: "success" | "error";
}

const Notification = ({ message, type }: NotificationProps) => {
  const styles: React.CSSProperties = {
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    color: type === "success" ? "green" : "red",
    backgroundColor: type === "success" ? "#e7f9e7" : "#fde7e7",
    textAlign: "center" as const, 
  };

  return <div style={styles}>{message}</div>;
};

export default Notification;
