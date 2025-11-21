import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const UserItem = ({ user, onSelect }) => (
  <Pressable onPress={() => onSelect(user)}>
    <View style={styles.item}>
      <Text style={styles.text}>
        {user.UserFirstname} {user.UserLastname} {"("}
        {user.Type}
        {")"}
      </Text>
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

export default UserItem;
