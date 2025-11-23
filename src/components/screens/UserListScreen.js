import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from "react-native";
import { useState } from "react";
import Icons from "../UI/Icons";
import Screen from "../layout/screen.js";
import initialUsers from "../../data/users.js";
import ItemList from "../Items/ItemList.js";
import Button, { ButtonTray } from "../UI/Button.js";
//import { Button } from "react-native-web";

export const UserListScreen = ({ navigation }) => {
  const handleAdd = (user) => setUsers([...users, user]);

  const handleModify = (updatedUser) =>
    setUsers(
      users.map((user) =>
        user.UserID === updatedUser.UserID ? updatedUser : user
      )
    );

  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (user) =>
    setUsers(users.filter((item) => item.UserID !== user.UserID));

  const onDelete = (user) => {
    handleDelete(user);
    navigation.popToTop();
    //navigation.goBack();
  };
  const onAdd = (user) => {
    handleAdd(user);
    navigation.goBack();
  };

  const onModify = (user) => {
    handleModify(user);
    //navigation.navigate("Modules");
    //
    navigation.replace("UserViewScreen", { user, onDelete, onModify });
  };

  const gotoViewScreen = (user) =>
    navigation.navigate("UserViewScreen", { user, onDelete, onModify });
  const gotoAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });

  return (
    <Screen>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onPress={gotoAddScreen} />
      </ButtonTray>
      <ItemList Items={users} onSelect={gotoViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingHorizontal: 20,
  },
});

export default UserListScreen;
