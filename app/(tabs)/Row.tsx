import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface RowProps {
  name: string;
  phone: string;
}

const Row: React.FC<RowProps> = ({ name, phone }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.phone}>{phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    margin: 20,
    width: "80%",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "blue",
    alignSelf: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  phone: {
    fontSize: 16,
    color: "#555",
  },
});

export default Row;
