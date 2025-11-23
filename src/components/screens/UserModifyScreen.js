import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../layout/screen";
import UserForm from "../User/UserForm.js";

export const UserModifyScreen = ({ navigation, route }) => {
  const { user, onDelete, onModify } = route.params;
  const handleCancel = () =>
    navigation.replace("UserViewScreen", { user, onDelete, onModify });
  return (
    <Screen>
      <UserForm
        originalUser={user}
        onSubmit={onModify}
        onCancel={handleCancel}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default UserModifyScreen;
