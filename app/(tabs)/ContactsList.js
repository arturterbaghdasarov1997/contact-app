import React from "react";
import { SectionList, Text, StyleSheet, View } from "react-native";
import Row from "./Row";

const renderItem = ({ item }) => <Row name={item.name} phone={item.phone} />;

const renderSectionHeader = ({ section }) => (
  <Text style={styles.sectionHeader}>{section.title}</Text>
);

const ContactsList = ({ contacts }) => {
  const contactsByLetters = contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    };
  }, {});

  const sections = Object.keys(contactsByLetters)
    .sort()
    .map((letter) => ({
      title: letter,
      data: contactsByLetters[letter],
    }));

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.sectionList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sectionHeader: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 10,
    backgroundColor: "#f0f0f0",
    color: "black",
  },
  sectionList: {
    flexGrow: 1,
  },
});

export default ContactsList;
