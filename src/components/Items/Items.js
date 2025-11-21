import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const Items = ({ item, onSelect }) => (
  <Pressable onPress={() => onSelect(item)}>
    <View style={styles.item}>
      if (item === "users")
      {
        <Text style={styles.text}>
          {item.ModuleCode} {item.ModuleName}
        </Text>
      }
      if (item === "modules")
      {
        <Text style={styles.text}>
          {item.FirstName} {item.LastName}
        </Text>
      }
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {},
  item: {
    paddingVertical: 15,
    //paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: "lightgrey",
    //alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});

export default Items;
