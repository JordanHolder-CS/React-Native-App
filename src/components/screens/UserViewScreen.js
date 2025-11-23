import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../layout/screen.js";
import FullWidthImage from "react-native-fullwidth-image";
import ModuleListScreen from "./ModuleListScreen.js";
import UserView from "../User/UserView.js";

export const UserViewScreen = ({ navigation, route }) => {
  const { user, onDelete, onModify } = route.params;

  const gotoModifyScreen = () =>
    navigation.replace("UserModifyScreen", { module, onModify });

  return (
    <Screen>
      <UserView user={user} onDelete={onDelete} onModify={gotoModifyScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  infoTray: {
    gap: 5,
  },
  text: {
    fontSize: 10,
  },
  boldText: {
    fontSize: 19,
    fontWeight: "bold",
  },
  dimText: {
    color: "grey",
  },
  image: {
    borderRadius: 9,
  },
  container: {
    gap: 15,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
});

export default UserViewScreen;
