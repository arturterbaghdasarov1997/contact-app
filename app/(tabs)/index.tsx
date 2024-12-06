import { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Button,
  TextInput,
} from "react-native";
import contacts, { compareNames } from "../../contacts";
import ContactsList from "./ContactsList";

export default function HomeScreen() {
  const [showContacts, setShowContacts] = useState(false);
  const [sortContacts, setSortContacts] = useState(contacts);
  const [searchQuery, setSearchQuery] = useState("");

  const shuffleContacts = (array: typeof contacts) => {
    return array
      .map((contact) => ({ ...contact, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ sort, ...contact }) => contact);
  };

  const toggleContacts = () => {
    setShowContacts((prev) => !prev);
  };

  const sort = () => {
    setSortContacts((prev) => [...prev.sort(compareNames)]);
  };

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text) {
      const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(text.toLowerCase())
      );
      setSortContacts(shuffleContacts(filteredContacts));
    } else {
      setSortContacts(shuffleContacts(contacts));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Toggle Contacts" onPress={toggleContacts} />
      </View>
      <Button title="Sort" onPress={sort} />
      {showContacts && (
        <>
          <TextInput
            style={styles.searchBox}
            placeholder="Search contacts"
            value={searchQuery}
            onChangeText={handleSearch}
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />
          <ContactsList contacts={sortContacts} />
        </>
      )}
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
  searchBox: {
    height: 80,
    borderColor: "#007bff",
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginVertical: 12,
    textAlignVertical: "top",
    backgroundColor: "#f0f4f8",
    color: "#333",
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
