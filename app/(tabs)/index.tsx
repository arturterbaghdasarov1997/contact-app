import { useState } from "react";
import { StyleSheet, Text, ScrollView, SafeAreaView, View, Button } from "react-native";
import contacts, { compareNames } from "../../contacts";
import ContactsList from "./ContactsList";

export default function HomeScreen() {
  const [showContacts, setShowContacts] = useState(false);
  const [sortContacts, setSortContacts] = useState(contacts);

  const toggleContacts = () => setShowContacts((prev) => !prev);

  const sort = () => {
    setSortContacts(prev => [...prev.sort(compareNames)])
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Toggle Contacts" onPress={toggleContacts} />
      </View>
      <Button title="sort" onPress={sort}/>
      {showContacts && <ContactsList contacts={sortContacts}/>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  buttonContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  scrollView: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  contact: {
    fontSize: 16,
    color: "#333",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
