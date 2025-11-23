import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const Items = ({ item, onSelect }) => {
  const selectItem = () => {
    if ("UserFirstname" in item)
      return `${item.UserFirstname} ${item.UserLastname}`;
    if ("ModuleCode" in item) return `${item.ModuleCode} ${item.ModuleName}`;
  };
  return (
    <Pressable onPress={() => onSelect(item)}>
      <View style={styles.item}>
        <Text style={styles.text}>{selectItem()}</Text>
      </View>
    </Pressable>
  );
};

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
