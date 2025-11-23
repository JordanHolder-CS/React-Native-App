import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Items from "./Items.js";

const ItemList = ({ Items: items, onSelect }) => {
  return (
    <ScrollView style={styles.container}>
      {items.map((item) => (
        <Items
          key={item.UserID || item.ModuleID}
          item={item}
          onSelect={onSelect}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingHorizontal: 20,
  },
});

export default ItemList;
